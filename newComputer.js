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

let inpUrl = document.getElementById("url");
let img;

inpUrl.addEventListener("keyup", () => {
    img = document.getElementById("img");
    img.src = inpUrl.value;
    // console.log(inpUrl.value);
    

})

let brand = document.getElementById("brand");
let model = document.getElementById("modal");
let category = document.getElementById("category");
let description = document.getElementById("description");
let price = document.getElementById("price");
let rating = document.getElementById("rating");



let compObj = {
    brand:"",
    model: "",
    category: "",
    description: "",
    price: "",
    img: "",
    forRating: 7
}

let count = 0;
let form = document.getElementById("form");




let rr = localStorage.getItem("redacted");

window.onload = () => {
    if(localStorage.getItem("redacted")) {
        let objR = localStorage.getItem(`${rr}`);
        let objRR = JSON.parse(objR);
        console.log(objRR);
        brand.value = objRR.brand;
        model.value = objRR.model;
        category.value = objRR.category;
        description.value = objRR.description;
        price.value = objRR.price;
        inpUrl.value = objRR.img;
        img = document.getElementById("img");
        img.src = inpUrl.value;
        // localStorage.setItem(`${rr}`, JSON.stringify(compObj));
        
    }
}


form.addEventListener("submit", () => {
    let brand = document.getElementById("brand").value;
    let model = document.getElementById("modal").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    // let rating = document.getElementById("rating").value;

    compObj.brand = brand;
    compObj.category = category;
    compObj.description = description;
    compObj.price = price;
    compObj.model = model;
    compObj.img = img.src;
    

    if (localStorage.clickcount1) {
        localStorage.clickcount1 = Number(localStorage.clickcount1)+1;
      } else {
        localStorage.clickcount1 = 1;
      }
      count = localStorage.getItem("clickcount1");

      alert("Succesfully");


    if(localStorage.getItem("redacted")) {
        localStorage.setItem(`${rr}`, JSON.stringify(compObj));
        localStorage.removeItem("redacted");
    } else {
        localStorage.setItem(`Item ${count}`, JSON.stringify(compObj));
    }


    window.location.href = "userProducts.html";

});
// localStorage.clear()