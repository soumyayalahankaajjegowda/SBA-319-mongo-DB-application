 //country controllers
 //imports
 //import db from"../db/conn.mjs";



 // @route:  POST /countries
// @desc    Add a country to the database
// @access: Public
async function addCountry(req, res) {
    try {
      const newCountry = new Country(req.body);
      await newCountry.save();
      res.status(201).json(newCountry);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
}

// @route:  GET /
// @desc    Display welcome message
// @access: Public
async function welcomeMsg(req, res) {
    res.send("Welcome to the server!");
}

// @route:  GET /countries
// @desc    GET all countries
// @access: Public
async function getCountries(req, res) {
    try {
      const countries = await Country.find();
      res.json(countries);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

// @route:  GET /countries/:id
// @desc    GET a specific country by ID
// @access: Public
async function getCountryById(req, res) {
    try {
      const country = await Country.findById(req.params.id);
      if (!country) return res.status(404).json({ message: "Country not found" });
      res.json(country);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // @route:  UPDATE /countries/:id
// @desc    UPDATE a country by ID
// @access: Public

async function updateCountryById(req, res) {
    try {
      const updatedCountry = await Country.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedCountry)
        return res.status(404).json({ message: "Country not found" });
      res.json(updatedCountry);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // @route:  DELETE /countries/:id
// @desc    DELETE a country by ID
// @access: Public

async function removeCountryById(req, res) {
    try {
      const deletedCountry = await Country.findByIdAndDelete(req.params.id);
      if (!deletedCountry)
        return res.status(404).json({ message: "Country not found" });
      res.json({ message: "Country deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  export default {
    welcomeMsg,
    addCountry,
    getCountries,
    getCountryById,
    updateCountryById,
    removeCountryById,
  };