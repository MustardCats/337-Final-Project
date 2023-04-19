/*
    Server side code to interact with the database.
*/

const express = require('express');
const mongoose = require('mongoose');
const md5 = require('md5');
const cookieParser = require('cookie-parser');
const connection_string = 'mongodb://127.0.0.1/GameDB'
const port = 8080;
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


app.post('/add/user',async (req,res) => {
    let u = req.body.username;
    let p = req.body.password;
    let hash = authenticate(u,p);

    let e = await User.exists({hashedPsw: hash});
    if(e) {
        res.end('Cannot make that user');
    }else {
        //I do the check for username and etc client side.
        var user = new User( {
            bestTime: 0,
            username: u,
            hashedPsw: hash,
            levelProg: 0
        });

        let prom = user.save();//We wait for the user to be saved into the DB
        prom.then((doc)=>{
            console.log('user saved');
            
        }).catch((err) => {
            console.log(err);
            res.end('user failed to create');
        })
        res.end('User saved');
        //We add cookie functionality later
    }
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});