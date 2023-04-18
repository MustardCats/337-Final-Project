/*
    Code that is currently linked to index.html
*/




//Adding the user. 

function addUser() {
    let url = '/add/user';
    
    


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