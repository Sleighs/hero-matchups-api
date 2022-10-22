// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const dotenv = require('dotenv')

// define Express app
const app = express();

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(express.json());
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// Add routes
app.use("/api", router)

dotenv.config()

// Connect to MongoDB database
let uri =
  //`mongodb://localhost:27017/${process.env.API_DB}`
  `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@${process.env.ATLAS_CLUSTER}/${process.env.API_DB}?authSource=${process.env.ATLAS_AUTH_SOURCE}&authMechanism=${process.env.ATLAS_AUTH_MECHANISM}`;

const connectionParams = {
  useNewUrlParser: true,
  //useUnifiedTopology: true 
};

mongoose
	.connect(uri, connectionParams)
	.then(() => {
    console.log("Mongoose connected!")
	})


// starting the server
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));