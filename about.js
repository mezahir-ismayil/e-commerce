function logOut()  {
    window.location.href = "index.html";
    localStorage.removeItem("loggedInUser");
}
let user = document.getElementById("user");
let loggedInUser = localStorage.getItem("loggedInUser");

if(localStorage.getItem("loggedInUser")) {
    user.innerHTML = loggedInUser;
    
} else {
    user = "username";
}
