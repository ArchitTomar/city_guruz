const mongoose = require('mongoose');

const DB_URI = "mongodb+srv://archittomar0902:Aa%408516808885@cluster0.lci60.mongodb.net/CityGuruz?retryWrites=true&w=majority&appName=Cluster0"; // replace with your actual URI

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URI);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

connectToDatabase();
