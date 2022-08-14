const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const villagerSchema = new Schema({
  villagerPigeonMail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 5
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: Date
  }
});

const Villager = mongoose.model('Villager', villagerSchema);

module.exports = Villager;