import mongoose from 'mongoose';
import City from './touristcitymodel.js'; 
import fs from 'fs';


let touristcitiesData;
try {
  const fileData = fs.readFileSync('touristcitiesData.json', 'utf8');
  touristcitiesData = JSON.parse(fileData);
} catch (err) {
  console.error('Error reading or parsing JSON file:', err);
  process.exit(1); 
}


touristcitiesData.forEach(city => {
  if (!city.cityName) {
    console.error('Missing cityName for one of the entries:', city);
  }
});


mongoose.connect('mongodb+srv://archittomar0902:Aa%408516808885@cluster0.lci60.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');

 
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
