const express = require("express");
const cors = require('cors');
const app = express(); //basically we use this app for everything now 
const routes = require("./src/routes");
const connectionMongo = require("./src/database/connection");

connectionMongo();

app.use(express.json());
app.use(cors()); 
app.use(express.urlencoded({extended:false}));


const corsOptionsDelegate = async (req, callback) => {
    const corsOptions = {
      origin: 'https://erjasmeetsingh.vercel.app',
      credentials: true,
    };
    callback(null, corsOptions);
  };

  app.use("/api", routes);
  
  
  app.use((req, res, next) => {
    console.log("Unhandled route hit:", req.method, req.originalUrl);
    next();
  });

app.listen(3003, ()=>{console.log(`Server running at 3003`)});
