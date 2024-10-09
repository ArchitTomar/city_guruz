import mongoose from 'mongoose';

// Place Schema
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

// Hotel Schema
const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

// City Schema
const citySchema = new mongoose.Schema({
  cityName: { type: String, required: true },
  state: { type: String, default: 'Unknown' }, // state field, default to 'Unknown' if not provided
  famousPlaces: [placeSchema],
  nearbyPlaces: [placeSchema],
  hiddenPlaces: [placeSchema],
  hotels: [hotelSchema]
});

// Use export default for ES module
const City = mongoose.model('City', citySchema);
export default City;
