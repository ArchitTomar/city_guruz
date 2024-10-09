const mongoose = require('mongoose');
const City = require('./touristcitymodel'); 
const fs = require('fs');
const mongodb = require('./mongodb'); 


const citiesData = JSON.parse(fs.readFileSync('touristcitiesData.json', 'utf8'));

const insertCityData = async () => {
    try {
        
        await mongodb();
        await City.insertMany(touristcitiesData);
        console.log('Cities data inserted successfully');
         mongoose.connection.close();
    } catch (err) {
        console.error('Error inserting data:', err);
    }
};


insertCityData();
