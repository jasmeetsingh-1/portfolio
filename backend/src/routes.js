const express = require('express');

const router = express.Router();

router.get("/getList", async(req,res) => {
    console.log("req body getList>>>", req.body);
    return res.send({message:"got getList the route"});
})

router.post("/entry", async(req,res) => {
    console.log("got the entry>>>", req.body);
    return res.status(200).json({status: true, message:"Successfully stored the data"});
})


module.exports = router;