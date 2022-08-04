const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const canoeSchema = new Schema({
  content: {
    type: Array,
    required: true
  },
  totalprice: {
    type: Number,
    required: true
  },
  delivered: {
    type: Boolean
  },
  hutaddress: {
    type: String,
    required: true
  },
  villagerpigeonmail: {
    type: Schema.Types.ObjectId, ref: 'Villager',
    required: true
  }
}, {
  timestamps: true
});

const Canoe = mongoose.model('Canoe', canoeSchema);

module.exports = Canoe;