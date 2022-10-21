// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { MongoClient } = require("mongodb");
const { connectInfo } = require('./connectInfo');
const mongoose = require('mongoose');
const router = require('./routes/routes');

const username = encodeURIComponent(connectInfo.username);
const password = encodeURIComponent(connectInfo.password);
const cluster = connectInfo.cluster;
const authSource = connectInfo.authSource;
const authMechanism = connectInfo.authMechanism;
const dbName = connectInfo.dbName;
const heroesCollection = connectInfo.heroesCollection;


// define Express app
const app = express();

// adding Helmet to enhance your Rest API's security
//app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(express.json());
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// Add routes
app.use("/api", router)

// Connect to MongoDB database
let uri =
  `mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;

const client = new MongoClient(uri);
/*
client.connect(err => {
  const collection = client.db(dbName).collection(heroesCollection);
  
  client.close();
});

async function run() {
    try {
        await client.connect();
        const database = client.db(dbName);
        const heroes = database.collection(heroesCollection);
        const cursor = heroes.find();
        //await cursor.forEach(doc => console.dir(doc));
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
*/

let mongooseUri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  //useUnifiedTopology: true 
};

mongoose
	.connect(uri, connectionParams)
	.then(() => {
    console.log("Server has started!")
	})


// starting the server
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));