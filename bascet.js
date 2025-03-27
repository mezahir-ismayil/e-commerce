// localStorage.removeItem("bascetItem 0");
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

let tbody = document.getElementById("addedProducts");
let bascetArr = [];
let tr;

let items;
let id;
let idArr = [];
let saveElement;
// let newInp = document.createElement("input");
// newInp.type = "number";
for(let i = 0; i<localStorage.length; i++) {
    if(localStorage.key(i).includes("bascetItem")){
       items = JSON.parse(localStorage.getItem(localStorage.key(i)));
       saveElement = localStorage.key(i);
       id = saveElement.split(" ")[1];
        bascetArr.push(items);
        idArr.push(id);
        // bascetArr.push(id);
        // console.log(bascetArr);
        
    }
}
let subTotal =1;

for(let k = 0; k<bascetArr.length; k++) {

    tr = document.createElement("tr");

    tr.innerHTML = `
    <td><img src ="${bascetArr[k].img}" class="img"></td>
    <td> ${bascetArr[k].data}</td>
    <td>${bascetArr[k].price}</td>
    <td><input type="number" value="${+bascetArr[k].quantity}" class ="quantity" id = "quantity" oninput="calc(${k})" ></td>
    <td class="subTotal">${bascetArr[k].subTotal}</td>
    <td> 
        <button onclick="deleteI(${k})" class="bt2">Удалить</button>
    </td>            

`;
    tbody.append(tr);
}


function deleteI(index) {
    localStorage.removeItem(`bascetItem ${idArr[index]}`);
    bascetArr.splice(index,1);
    window.location.reload(); 

}

function calc(num) {
    let quantityInp = document.getElementsByClassName("quantity")[num];
    subTotal = +bascetArr[num].price.split(" ")[0]*quantityInp.value;
    let total = document.getElementsByClassName("subTotal")[num];
    total.innerHTML = `${Math.round(subTotal)} $`;
    bascetArr[num].subTotal = total.innerHTML;
    bascetArr[num].quantity = quantityInp.value;
    localStorage.setItem(`bascetItem ${idArr[num]}`, JSON.stringify(bascetArr[num]));
    
    // window.location.reload();
    // console.log(subTotal);    
}

let quantityE = document.getElementsByClassName("quantity");
for(let x=0; x<quantityE.length; x++) {
    // quantityE[x].addEventListener("keyup", ()=> {
    let cartCheck = document.getElementsByClassName("subTotal");
    let sum = 0;
    for(let j = 0; j<cartCheck.length; j++) {
        sum += +cartCheck[j].innerHTML.split(" ")[0];
    }
    // console.log(sum);
    document.getElementsByClassName("cartCheck")[0].innerHTML = sum + "$";
    let cartTotal = document.getElementById("cartTotal");
    cartTotal.innerHTML = sum + "$";
    localStorage.setItem("totalAmount", sum);
// })
}

let quantityE1 = document.getElementsByClassName("quantity");
for(let x=0; x<quantityE1.length; x++) {
    quantityE1[x].addEventListener("keyup", ()=> {
    let cartCheck = document.getElementsByClassName("subTotal");
    let sum = 0;
    for(let j = 0; j<cartCheck.length; j++) {
        sum += +cartCheck[j].innerHTML.split(" ")[0];
    }
    console.log(sum);
    document.getElementsByClassName("cartCheck")[0].innerHTML = sum + "$";
    let cartTotal = document.getElementById("cartTotal");
    cartTotal.innerHTML = sum + "$";
    localStorage.setItem("totalAmount", sum);
})
}


function pay() {
    window.location.href = "checkout.html";
}