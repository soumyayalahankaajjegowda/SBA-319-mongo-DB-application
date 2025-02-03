# SBA-319-mongo-DB-application
MongoDB Country Database Application

This project is a CRUD API for managing country data, built with Node.js, Express, MongoDB, and Mongoose. It allows users to create, read, update, and delete information about countries, including details like continent, capital city, population, and languages.

The application can be easily extended with additional collections, like cities or languages, and serves as a foundational example of a database-driven RESTful API.

Features
CRUD Operations: Create, Read, Update, and Delete country data.
MongoDB Indexing: Optimized queries using indexes on frequently queried fields.
Mongoose:
Data Validation: Ensures data consistency with schema validation.
Error Handling: Handles common errors and returns appropriate HTTP responses.
RESTful API: Follows REST standards for intuitive interaction.
Prerequisites
Node.js 
MongoDB (local or remote instance, e.g., MongoDB Atlas)
Mongoose
Git
Setup
Clone the repository:


Start the server: npm start

This will start running the server on the specified port (default: 3000).

Node.js and Express for server and routing.

MongoDB and Mongoose for database and schema management.

dotenv for environment variable management.

Project Structure

/models: Mongoose schema definitions.

/routes: Express route definitions.

/db: Database connection file.

/data: Sample data for seeding the database.

/scripts: Utility scripts (e.g., database seeding).

Future Enhancements
Add collections for cities or languages to demonstrate MongoDB relations.
Implement more detailed data validation with Mongoose validators.
Add pagination to the /countries GET endpoint.
