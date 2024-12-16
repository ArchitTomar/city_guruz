const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  City: { type: String, required: true },
  Place: { type: String, required: true },
  keyword: { type: String },
  Ratings: { type: Number },
  Distance: { type: String },
  Place_desc: { type: String }
});

module.exports = mongoose.model('Place', placeSchema);
