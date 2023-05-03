/*
    Code that is currently linked to index.html
*/




//Adding the user. 
//

/**
 * Various scripts and functions kept for reference
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

function addUser() {
    let url = '/add/user';
    let u = document.getElementById('addUserField')
    let ps = document.getElementById('addUserPassword');
    if(u.value == '' || ps.value == '') {
        console.log('Fields cannot be empty');
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

function login() {
    let url = '/login/'
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
    Array.from(document.querySelectorAll('.container-popup')).forEach(function(popup) {
        popup.style.display = "none";
    });
}

setInterval( () => {
    window.location.reload();
},5000);