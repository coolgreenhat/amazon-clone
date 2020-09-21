const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.REACT_APP_SECRET_KEY);

//App Config
const app = express();

// Middleware
app.use(cors({ origin: true}));
app.use(express.json());


//API Routes
app.get('/', (request, response) => response.status(200).send("Hello World"))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  
  console.log('Payment Request Received for ₹ ', total)
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,  // subunits of currency
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
})

// Listen Command 
exports.api = functions.https.onRequest(app);
 