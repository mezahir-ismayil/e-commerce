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

let img = document.getElementById("img");
let data = document.getElementById("itemName");
let rating = document.getElementById("rating");
let price = document.getElementById("price");
let description = document.getElementById("description");

let itemDetails = JSON.parse(localStorage.getItem("itemDetails"));
img.src = itemDetails.img;
data.innerHTML = itemDetails.data;
rating.innerHTML = itemDetails.forRating;
price.innerHTML = itemDetails.price;
description.innerHTML += itemDetails.data;

// console.log(itemDetails.img);
