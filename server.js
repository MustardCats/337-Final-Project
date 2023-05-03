/*
    Server side code to interact with the database.
*/

const express = require('express');
const mongoose = require('mongoose');
const md5 = require('md5');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const bodyParser = require('body-parser')
const connection_string = 'mongodb://127.0.0.1/GameDB'
const port = 3000;
const app = express();

const cookieValid = function(req,res,next) {
    if(req.cookies) {
        req.cookieExists = true;
    }else {
        req.cookieExists = false;
    }
    next()
}

app.use(express.static('public_html'));
app.use(cookieParser());
app.use(express.json());
app.use(cookieValid);

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

app.get('/login/:user/:pass', async (req,res) => {
    let u = req.params.user;
    let p = req.params.pass;
    let h = authenticate(u,p);

    let e = await User.exists({hashedPsw:h});
    if(e) {
        console.log('user exists');
        let l = User.findOne({password:h}).exec();
        l.then((results) => {
            console.log('results in login:',results);
            let sessId = results._id.toString();
            console.log(sessId);
            res.cookie("whoami",sessId,{maxAge: 1800000})
            res.end('login success');
        }).catch((err) =>{
            console.log(err);
            res.end('login fail');
        });
    }else {
        console.log('That user does not exist');
        res.end('failed to login');
    }

});

app.post('/add/user',async (req,res) => {
    let u = req.body.username;
    let p = req.body.password;
    let hash = authenticate(u,p);

    let e = await User.exists({hashedPsw: hash});
    if(e) {
        res.end('Cannot make that user, must change username or password');
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
            //We don't send cookies on user creation
            //They have to login again
            console.log('user saved');
            
        }).catch((err) => {
            console.log(err);
            res.end('user failed to create');
        })
        res.end('User saved');
        //We add cookie functionality later
    }
});

app.use(bodyParser.json());

app.get('/loadchunk/:x/:y', async (req, res) => {
    let x = req.params.x;
    let y = req.params.y;

    fs.readFile('chunks/' + x + ',' + y + '.txt', 'utf8', (err, data) => {
        if (err) {
            res.send("{}");
        }
        else {
            res.json(data);
        }
    });
});

app.post('/savechunk/', async (req, res) => {
    let chunkJSON = JSON.stringify(req.body);
    //console.log(chunkJSON);
    let x = req.body.x;
    let y = req.body.y;
    fs.writeFile('chunks/' + x + ',' + y + '.txt', chunkJSON, (err) => {
        if (err) {
            console.log(err);
        }
    });
    res.end();
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});