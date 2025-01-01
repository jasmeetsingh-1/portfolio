const express = require("express");

const app = express(); //basically we use this app for everything now 
const routes = require("./src/routes");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
const cors = require('cors');
const corsOptionsDelegate = async (req, callback) => {
    const corsOptions = {
      origin: '*',
      credentials: true,
      // methods: ['GET', 'POST', 'OPTIONS'],
      // allowedHeaders: ['Content-Type', 'Authorization']
    };
    callback(null, corsOptions);
  };



app.use("/api/",  cors(corsOptionsDelegate), routes);

app.listen(3003, ()=>{console.log(`Server running at 3002`)}); 
