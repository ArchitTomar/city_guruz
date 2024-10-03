const mongoose = require('mongoose');

const mongodb = async () => {
    try {
        await mongoose.connect('mongodb+srv://archittomar0902:Aa@8516808885@cluster0.lci60.mongodb.net/retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);  // Exit process with failure
    }
};

module.exports = mongodb;
