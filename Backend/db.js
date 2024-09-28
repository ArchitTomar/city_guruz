const mongoose = require('mongoose');
const mongoURI ='mongodb+srv://archittomar0902:Aa8516808885@cluster0.lci60.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongodb=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected");
    });
} 
module.exports=mongodb;