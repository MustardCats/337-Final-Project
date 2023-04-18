/*
    Server side code to interact with the database.
*/

const express = require('express');
const mongoose = require('mongoose');
const md5 = require('md5');
const cookieParser = require('cookie-parser');
const connection_string = 'mongodb://127.0.0.1/DATABASE_NAME'
const port = 3000;
const app = express();

app.use(express.static('public_html'));

app.use(express.json());

mongoose.connect(connection_string, {useNewUrlParser: true});
mongoose.connection.on('error',() => {
    console.log("There was a problem connecting to the database.");
});

var Schema = mongoose.Schema;
var UserSchema = new Schema ({
    bestTime: Number, 
    username: String,
    hashedPsw: String, 
    levelProg: Number
})

var User  = mongoose.model('User',UserSchema);


/**
 * Authentication function, hashes the password for security purposes. 
 * 
 * @param {String} username 
 * @param {String} password 
 * @returns {String} that is equal to the hashed result of the username and password
 */
function authenticate(username,password) {
    let salt = username;
    let hash = password;
    let toHash = hash+salt;
    let h = md5(toHash);
    return h;
}

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/public_html/index.html');
})

app.post('/add/user',async (req,res) => {

});

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});