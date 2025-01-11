// Middleware to validate the required request
// Either email or phone number must be present
const validate = (req, res, next) => {
   console.log("Request Body:", req.body);
    const { contactPhoneNo, contactEmail } = req.body;

    if (!(contactEmail?.trim() || contactPhoneNo?.trim())) {
        return res.status(400).json({ message: "Please enter one thing - phone number or email" });
    }

    next();
};

module.exports = {
    validate
};
