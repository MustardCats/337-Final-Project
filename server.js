/*
    Server side code to interact with the database.
*/


const express = require('express');
const mongoose = require('mongoose');

const connection_string = 'mongodb://127.0.0.1/DATABASE_NAME'
const port = 3000;
const app = express();

app.use(express.static('public_html'));

app.use(express.json());

mongoose.connect(connection_string, {useNewUrlParser: true});
mongoose.connection.on('error',() => {
    console.log("There was a problem connecting to the database.");
});




app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});