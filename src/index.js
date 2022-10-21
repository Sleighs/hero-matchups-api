// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { MongoClient } = require("mongodb");
const { connectInfo } = require('./connectInfo');
const username = encodeURIComponent(connectInfo.username);
const password = encodeURIComponent(connectInfo.password);
const cluster = connectInfo.cluster;
const authSource = connectInfo.authSource;
const authMechanism = connectInfo.authMechanism;
const dbName = connectInfo.dbName;
const heroesCollection = connectInfo.heroesCollection;

const mongoose = require('mongoose');
const router = require('./routes/routes');

// define Express app
const app = express();

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

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
//run().catch(console.dir);
*/

mongoose
	.connect(uri, { useNewUrlParser: true })
	.then(() => {
        console.log("Server has started!")

        app.use("/api", router)
	})
    

// defining an endpoint to return all ads
/*app.get('/', (req, res) => {
  res.send("data goes here");
});*/

// starting the server
app.listen(5000, () => {
  console.log('Listening on port 5000');
});