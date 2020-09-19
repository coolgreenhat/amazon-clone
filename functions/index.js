const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.REACT_APP_STRIPE);

//App Config
const app = express();

// Middleware
app.use(cors({ origin: true}));
app.use(express.json());


//API Routes
app.get('/', (request, response) => res.status(200).send("Hello World"))

// Listen Command 
exports.api = functions.https.onRequest(app)
