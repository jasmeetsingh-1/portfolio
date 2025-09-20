const express = require('express');
const { saveQuery, getAllQuery, toggleIsAllowedQuery } = require('../database/query/testimonyQuery');
const router = express.Router();


router.post("/saveTestimony", async(req,res) => {
    const data = await saveQuery({
        ...req.body,
        isAllowed: false,
    });
    console.log("result of the /saveTestimony >>>", data);
    return res.status(200).json({status:true, message:"save route working"});
})

router.get("/getTestimony", async(req,res) => {
    const data = await getAllQuery();
    if(data) return res.status(200).json({status:true, data:data});
    else return res.status(400).json({status: false,message:"Error in trying to fetch data from database"});
})

router.put("/toggleTestimonyVisibility", async(req,res)=>{
    try {
        const { uid } = req.query;

        if (!uid) {
            return res.status(400).json({ error: "UID is required" });
        }

        const updatedTestimonial = await toggleIsAllowedQuery(uid);

        if (!updatedTestimonial) {
            return res.status(404).json({ error: "Testimonial not found" });
        }

        res.status(200).json({
            message: "isAllowed toggled successfully",
            uid: updatedTestimonial.uid,
            isAllowed: updatedTestimonial.isAllowed
        });
    } catch (error) {
        console.error("❌ Toggle Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;