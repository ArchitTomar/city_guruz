import mongoose from 'mongoose';
import City from './touristcitymodel.js'; // Make sure the path is correct and add the .js extension for ES modules
import fs from 'fs';

// Read JSON data from the file
let touristcitiesData;
try {
  const fileData = fs.readFileSync('touristcitiesData.json', 'utf8');
  touristcitiesData = JSON.parse(fileData);
} catch (err) {
  console.error('Error reading or parsing JSON file:', err);
  process.exit(1); // Exit the process if there's an error
}

// Check for missing cityName fields
touristcitiesData.forEach(city => {
  if (!city.cityName) {
    console.error('Missing cityName for one of the entries:', city);
  }
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://archittomar0902:Aa%408516808885@cluster0.lci60.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');

    // Insert city data into the database
    City.insertMany(touristcitiesData)
      .then(() => {
        console.log('Cities data inserted successfully');
      })
      .catch(err => {
        console.error('Error inserting data:', err);
      })
      .finally(() => {
        mongoose.connection.close();
      });
  })
  .catch(err => {
    console.error('Could not connect to MongoDB:', err);
  });
