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

let orderBtn = document.getElementById("orderBtn");
let inputs = document.querySelectorAll("form input");

let cartCheck = document.getElementById("cartCheck");
let cartTotal = document.getElementById("cartTotal");

if (localStorage.getItem("totalAmount")) {
    let amount = localStorage.getItem("totalAmount");
    cartCheck.innerHTML = amount + " $";
    cartTotal.innerHTML = amount + " $";
}



    function validate() {
    for(let i=0; i<inputs.length; i++) {
        if (inputs[i].value == "") {
            alert("Fill the inputs");
            console.log(inputs[i]);
            return false;
        } else {
            alert("Successfully");
            
            
            let saveElement;
            let id = 0;
            for(let i = 0; i<localStorage.length; i++) {
                if(localStorage.key(i).includes("bascetItem")){
                    // items = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    saveElement = localStorage.key(i);
                    id = saveElement.split(" ")[1];
                    // bascetArr.push(items);
                    // idArr.push(id);
                    localStorage.removeItem(`bascetItem ${id}`);
                    // bascetArr.push(id);
                    // console.log(bascetArr);
                    
                }
            }
            localStorage.removeItem("totalAmount");
            break;
        }
    }
    }
