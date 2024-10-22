// server.js
// import express
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const subscriptionRoutes = require('./routes/subscription');
export const LS_ENDPOINT="https://api.lemonsqueezy.com/v1/";

export const LsapiInstance = axios.create({
    baseURL: LS_ENDPOINT,
    headers: {
         'Accept': 'application/vnd.api+json' ,
     'Content-Type': 'application/vnd.api+json' ,
      'Authorization': `Bearer ${process.env.PAYMENT_API}`
    },
});

const app = express();
app.use(bodyParser.json());

// app.post("", async (req,res)=>{
//     const reqData=await req.json();
//       const response = await LS_ENDPOINT
// })
app.use('/api/subscriptions', subscriptionRoutes);

const PORT = process.env.PORT || 5000;


mongoose.connect('mongodb://localhost:27017/pay', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error(err);
  });
