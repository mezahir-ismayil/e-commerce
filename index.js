function logIn() {
    window.location.href = "login.html";
}
// localStorage.clear();

// let user = document.getElementById("user");
let loggedInUser = localStorage.getItem("loggedInUser");

window.onload =() => {
    if(localStorage.getItem("loggedInUser")) {
        window.location.href = "index2.html";
    } 
};

