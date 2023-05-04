/**
 * Author: Patrick Comden, Patrick Hsu, and Caitlin Wong 
 * File Name: code.js
 * 
 * Code that is currently linked to index.html
 */

//Adding the user. 
//

/**
 * <script src="https://cdn.jsdelivr.net/npm/pixi.js@7.x/dist/pixi.min.js"></script>
    <script src="./camera.js"></script>
    <script src="./input.js"></script>
    <script src="./level.js"></script>
    <script src="./chunk.js"></script>
    <script src="./character.js"></script>
    <script src="./app.js"></script>
 */
// function loadGame () {
//     console.log(document.readyState);
//     var scripts = [
//         './sprites.js',
//         './respawn.js',
//         './camera.js',
//         './input.js',
//         './chunk.js',
//         './character.js',
//         './level.js',
//         './app.js'
//     ];
//     scripts.forEach(script => {
//         console.log(script);
//         var scriptToAdd = document.createElement('script');
//         scriptToAdd.setAttribute('src',script);
//         scriptToAdd.setAttribute('async',false);  
//         document.body.appendChild(scriptToAdd);
//         scriptToAdd.addEventListener("load", () => {
//             console.log(`${script} loaded`)
//         });
        
//         scriptToAdd.addEventListener("error", (ev) => {
//             console.log("Error on loading file", ev);
//         });
//     });
//     document.getElementById('playGameButton').style.display = "none";
//     console.log(document.readyState);
// }

setUpListeners();

function noSpace() {
    window.addEventListener('keydown', function(e) {
        if(e.code === "Space" && e.target === document.body) {
          e.preventDefault();
        }
      });
}
//Add on win, remove event listener

/**
 * 
 * Adds the user to the database, is called when a user registers 
 * @returns null, return is just used to exit the function
 */
function addUser() {
    let url = '/add/user';
    let u = document.getElementById('addUserField')
    let ps = document.getElementById('addUserPassword');
    if (u.value == '' || ps.value == '') {
        console.log('Fields cannot be empty');
        alert("Fields cannot be empty!");
        return;
    }
    let p = fetch(url, {
        method: "POST",

        body: JSON.stringify({
            username: u.value,
            password: ps.value
        }),

        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Timestamp": Date.now()
        }
    });
    let p2 = p.then((res) => {
        return res.text();
    }).then((text) => {
        console.log(text);
    }).catch((err) => {
        console.log(err);
    });
    u.value = '';
    ps.value = '';
    exitPopup();
}
/**
 * Logs the user out of the current session by getting rid of the cookies.
 */
function logout() {
    let b = document.getElementById('loginButton').style.display = "block";
    let 
}
/**
 * /login/:user/:pass <-- URL format
 */
function loginGame() {
    let url = '/login/'
    let u = document.getElementById('loginUserField');
    let ps = document.getElementById('loginUserPassword');
    console.log(u.value);
    console.log(ps.value);
    if(u.value == '' || ps.value == '') {
        alert("Fields cannot be empty!");
    }else {
        url += u.value + "/" + ps.value;
        let p = fetch(url);
        p.then((results) => {
            return results.text();
        }).then((text) => {
            console.log(text);
        }).catch((err) => {
            console.log(err);
        });
        console.log('exiting popup');
        let playerID = document.cookie
        .split("; ")
        .find((row) => row.startsWith("whoami="))
        ?.split("=")[1];
        console.log('Session ID: ', playerID);
        exitPopup();
    }
    
}

function setUpListeners() {
    let pswPop = document.getElementById('loginUserPassword');
    pswPop.addEventListener('keydown', (event) => {
        if(event.code === "Enter") {
            document.getElementById('loginButton').click();
        }
    });
    let addPop = document.getElementById('addUserPassword');
    addPop.addEventListener('keydown', (event) => {
        if(event.code === "Enter") {
            document.getElementById('addUserButton').click();
        }
    });
}

function showLoginPopup() {
    document.getElementById('loginPopup').style.display = "block";
    
}

function showAddUserPopup() {
    document.getElementById('addUserPopup').style.display = "block";
}
/**
 * This function just exits out of all popups so we don't need to specify specific ones. 
 */
function exitPopup() {
    Array.from(document.querySelectorAll('.container-popup')).forEach(function (popup) {
        popup.style.display = "none";
    });
    clearFields();
}

function clearFields() {
    Array.from(document.querySelectorAll('.accountFormCell')).forEach(function(inputField) {
        inputField.value = '';
    });
}

setInterval( () => {
    //window.location.reload();
},2000);

/**
 * Won't work properly unless the person is logged in, and they are considered logged in 
 * if they have the cookie, handles the game ending stuff. 
 * 
 * /gameEnd/:id/:score <-- URL formatting
 */
function onGameEnd() {
    let url = '/gameEnd/'
    let score = calcScore();
    console.log('Score at end of game: ', score);
    let playerID = document.cookie
    .split("; ")
    .find((row) => row.startsWith("whoami="))
    ?.split("=")[1];
    console.log(playerID);
    url += playerID + "/" +score;
    let p = fetch(url);
    p.then((results) => {
        return results.text();
    }).then((text) => {
        console.log(text);
    }).catch((err) => {
        console.log('error: ',err);
    });
}