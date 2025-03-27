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



// ************

let addedItems = document.getElementById("addedItems");


let count = +localStorage.getItem("clickcount1");
let newDiv;


for(let i =1; i<=count; i++) {
    let items = JSON.parse(localStorage.getItem(`Item ${i}`));
    if (JSON.parse(localStorage.getItem(`Item ${i}`))) {
        newDiv = document.createElement("div");

        newDiv.innerHTML = `
        <img src ="${items.img}" class="img" >
        <p class = "data">${items.brand + " " + items.model + " " + items.description}</p>
        <p class ="price">${items.price + " $"}</p>
        <p class ="forRating">★(${Number(items.forRating)+1})</p>
        <button class ="add-to-cart"">add to cart</button>      
    `;
    newDiv.classList.add("product");
        addedItems.append(newDiv);
        // <td><img src="${pc.image}" alt="${pc.name}" width="50"></td>
        // <td>
        //     <button class="btn btn-secondary" onclick="editPc(${pc.id})">Customize</button>
        //     <button class="btn btn-danger" onclick="removePc(${pc.id})">Remove</button>
        // </td>
    } else {
        continue;
    }
}

let elementDetails = document.getElementsByTagName("img");
let detailsObj = {
    img: "",
    data: "",
    price: "",
    forRating: "",
    // quantity: ""
} 

for(let i=0; i<=elementDetails.length; i++) {
    if(elementDetails[i]) {
        elementDetails[i].addEventListener("click", ()=> {
            let img = document.getElementsByTagName("img")[i].src;
            let data = document.getElementsByClassName("data")[i].innerHTML;
            let price = document.getElementsByClassName("price")[i].innerHTML;
            let forRating = document.getElementsByClassName("forRating")[i].innerHTML;
            detailsObj.img = img;
            detailsObj.data = data;
            detailsObj.price =price;
            detailsObj.forRating = forRating; 
    
            localStorage.setItem("itemDetails", JSON.stringify(detailsObj));
            window.location.href = "product.html";
    
    
        })
    }

}

let addBtn = document.getElementsByClassName("add-to-cart");
let bascetItem = {
    img: "",
    data: "",
    price: "",
    quantity: "1",
    subTotal: ""
} 
// let i = 0;



for(let k=0; k<=addBtn.length; k++) {
        if(addBtn[k]) {
            addBtn[k].addEventListener("click", ()=> {
                let img = document.getElementsByTagName("img")[k].src;
                let data = document.getElementsByClassName("data")[k].innerHTML;
                let price = document.getElementsByClassName("price")[k].innerHTML;
                // let forRating = document.getElementsByClassName("forRating")[k].innerHTML;
                bascetItem.img = img;
                bascetItem.data = data;
                bascetItem.price =price;
                bascetItem.subTotal = +price.split(" ")[0] * +bascetItem.quantity; 
        
                localStorage.setItem(`bascetItem ${k}`, JSON.stringify(bascetItem));
                alert("Added to bascet");
                // window.location.href = "product.html";
        
        
            })
        }
}
