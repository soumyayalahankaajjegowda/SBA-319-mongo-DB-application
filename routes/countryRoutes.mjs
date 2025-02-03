//countryRoutes.mjs
// imports
import express from "express";
import Country from "../models/countrySchema.mjs";
import countryCtrl from "../controllers/countrycontrollers.mjs";
const router = express.Router();
 console.log(country);
// CREATE //
//@route: POST /countries
//@desc: add country to the data base
//@access:public
router.post("/countries", countryCtrl.addCountry);

//Read //
//@route: GET/
//@desc: Display welcome message
//@access:public
router.get("/", countryCtrl.welcomeMsg);

// @route:  GET /countries
// @desc    GET all countries
// @access: Public
router.get("/countries", countryCtrl.getCountries);

// @route:  GET /countries/:id
// @desc    GET a specific country by ID
// @access: Public
router.get("/countries/:id", countryCtrl.getCountryById);


////// UPDATE //////
// @route:  UPDATE /countries/:id
// @desc    UPDATE a country by ID
// @access: Public
router.patch("/countries/:id", countryCtrl.updateCountryById);

////// DELETE //////
// @route:  DELETE /countries/:id
// @desc    DELETE a country by ID
// @access: Public
router.delete("/countries/:id", countryCtrl.removeCountryById);

// Exports
export default router;
