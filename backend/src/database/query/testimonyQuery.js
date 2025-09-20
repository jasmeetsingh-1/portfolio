const testimonialSchema = require("../schemaTestimony");

// Get all testimonials (latest first)
const getAllQuery = async () => {
  const data = await testimonialSchema.find().sort({ createdAt: -1 }).exec();
  return data;
};

// Save a new testimonial
const saveQuery = async (input) => {
  const res = await testimonialSchema.insertMany({
    ...input
  });
  return res;
};

// Toggle isAllowed by UID
const toggleIsAllowedQuery = async (uid) => {
  const testimonial = await testimonialSchema.findOne({ uid });

  if (!testimonial) {
    return null; // not found
  }

  testimonial.isAllowed = !testimonial.isAllowed;
  await testimonial.save();

  return testimonial;
};

module.exports = {
  getAllQuery,
  saveQuery,
  toggleIsAllowedQuery
};