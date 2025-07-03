
const express = require('express');
const router = express.Router();


const contactUsRoutes = require('./routes/contactUsRoutes');
const testimonyRoutes = require('./routes/testimonyRoutes');

//routes base /api
router.use("/contactUs", contactUsRoutes);
router.get("/testimony" , testimonyRoutes );

module.exports = router;