const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const { PORT , MONGO_URI } = require('./config');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'Client/Static')))

// #######################
// All Routes
// #######################

app.get('/', (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/html' }).sendFile(path.join(__dirname, 'Client/Static/Home.html'));
});

app.all('*', (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/html' }).sendFile(path.join(__dirname, 'Client/Static/FileNotFound.html'));
});

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});



async function connectDB(){
    try{
        await mongoose.connect(MONGO_URI);
        console.log(`Connected to MongoDB successfully at ${MONGO_URI}`);
    }
    catch(error){
        console.log('An error occured while connecting with MongoDB database');
        console.log(error);
    }
};

