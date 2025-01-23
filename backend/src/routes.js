const express = require('express');
const router = express.Router();

const {validate} = require("./validator");
const {getAllQuery, saveQuery} = require("./database/query");

router.get("/getList", async(req,res) => {
    const data = await getAllQuery();
    if(data) return res.status(200).json({status:true, data:data});
    else return res.status(400).json({status: false,message:"Error in trying to fetch data from database"});
})

router.post("/entry", validate , async(req,res) => {
    console.log("got the entry>>>", req.body);
    const data = await saveQuery(req.body);
    console.log("Datat>>>>", data);
    return res.status(200).json({status: true, message:"Successfully stored the data"});
})


module.exports = router;