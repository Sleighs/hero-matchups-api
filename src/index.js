// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const dotenv = require('dotenv')

// Define Express app
const app = express();

// Helemt added for Rest API security
app.use(helmet());

// Parse JSON into JS objects
app.use(express.json());
app.use(bodyParser.json());

// Enable CORS for all requests
app.use(cors());

// Log HTTP requests
app.use(morgan('combined'));

// Add routes
app.use("/api", router)

// Enable .env
dotenv.config()

// Connect to MongoDB database
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true 
};

mongoose
	.connect(process.env.API_URI, connectionParams)
	.then(() => {
    console.log("Mongoose connected!")
	})

// starting the server
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));