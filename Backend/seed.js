const mongoose = require('mongoose');
const Place = require('./Models/Place'); // Ensure the path matches your project structure
const placesData = require('./Places.json'); // Ensure this JSON file is correctly placed and formatted

// Connect to local MongoDB instance
mongoose
  .connect('mongodb://localhost:27017/cityguruz', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB:', err));

async function seedDatabase() {
  try {
    // Clear existing data
    await Place.deleteMany({});
    console.log('Existing records cleared!');

    // Insert new data
    const result = await Place.insertMany(placesData);
    console.log(`${result.length} records inserted!`);

    process.exit();
  } catch (error) {
    console.error('Error inserting data:', error);
    process.exit(1);
  }
}

seedDatabase();
