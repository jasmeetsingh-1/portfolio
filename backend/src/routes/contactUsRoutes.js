const express = require('express');
const router = express.Router();


const {getAllQuery, saveQuery} = require("../database/query/contactUsQuery");
const {validate} = require("../validator");


router.get("/getList", async(req,res) => {
    const data = await getAllQuery();
    if(data) return res.status(200).json({status:true, data:data});
    else return res.status(400).json({status: false,message:"Error in trying to fetch data from database"});
})

router.post("/entry" ,validate, async(req,res) => {
    const data = await saveQuery(req.body);
    console.log("contact us /entry data ", data);
    return res.status(200).json({status: true, message:"Successfully stored the data"});
})


module.exports = router;