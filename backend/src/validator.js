// Middleware to validate the required request
// Either email or phone number must be present

const validate = (req, res, next) => {
   const {contactPhoneNo , contactEmail} = req.body; //now if both are false 

   if(!contactEmail && !contactPhoneNo){
    return res.status(400).json({status:false, message:"Request must have either email or phone number"})
   }

   next();

};

module.exports = {
    validate
};
