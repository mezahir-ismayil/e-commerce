function logOut()  {
    window.location.href = "index.html";
    localStorage.removeItem("loggedInUser");
}
function openUserProducts() {
    window.location.href = "userProducts.html";
}
let arrOfAcc = [];
let count = +localStorage.getItem("clickcount");
for(let i = 1; i<=count; i++) {
    arrOfAcc.push(JSON.parse(localStorage.getItem(`account ${i}`)));
}


let user = document.getElementById("user");
let loggedInUser = localStorage.getItem("loggedInUser");
let nameP = document.getElementById("name");
let surname = document.getElementById("surname");
let email = document.getElementById("email");
let username = document.getElementById("username");  
let userNum = +localStorage.getItem("clickcount");
let obj;
arrOfAcc.forEach(account => {
    if (loggedInUser == account.username) {
        obj = account;
    }
})


if(localStorage.getItem("loggedInUser")) {
    user.innerHTML = loggedInUser;
    nameP.innerHTML = obj.name1;
    surname.innerHTML = obj.surname;
    email.innerHTML = obj.email;
    username.innerHTML = obj.username;
    
} else {
    user = "username";
}
