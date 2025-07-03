const express = require('express');
const router = express.Router();


router.get("/saveTestimony", async(req,res) => {
    return res.status(200).json({status:true, message:"save route working"});
})


module.exports = router;