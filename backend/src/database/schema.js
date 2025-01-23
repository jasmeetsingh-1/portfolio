const mongoose = require('mongoose');

const postdb = new mongoose.Schema({
  contactName: {
    type: String,
    required: false,
    unique: false
  },
  contactEmail:{
    type:String,
    required:false,
    unique:false,
  },
  subject:{
    type:String,
    required:false,
    unique:false,
  },
  message:{
    type:String,
    required:false,
    unique:false,
  },
  contactPhoneNo: {
    type: String,
    required: false,
    unique:false,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('portfolioDB', postdb);
