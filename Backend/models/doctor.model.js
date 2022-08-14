const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  docname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    trim: true,
  },
  doc_login: {
    type: String,
    unique: true,
    trim: true
  },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;