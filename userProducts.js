function logOut()  {
    window.location.href = "index.html";
    localStorage.removeItem("loggedInUser");
}
function newComp() {
    window.location.href = "newComputer.html";
}
let user = document.getElementById("user");
let loggedInUser = localStorage.getItem("loggedInUser");

if(localStorage.getItem("loggedInUser")) {
    user.innerHTML = loggedInUser;
    
} else {
    user = "username";
}

let tbody = document.getElementById("addedItems");
let count = +localStorage.getItem("clickcount1");
let id = 1;
let tr;
window.onload = function () {
    if(localStorage.getItem("redacted")) {
        localStorage.removeItem("redacted");
    }

    for(let i =1; i<=count; i++) {
        let items = JSON.parse(localStorage.getItem(`Item ${i}`));
        if (JSON.parse(localStorage.getItem(`Item ${i}`))) {
            tr = document.createElement("tr");
            // for(let k = 1; k<=8; k++) {
            //     let td = document.createElement("td");
            //     td.innerHTML = items.brand; 
            //     tr.append(td);
            // }
            tr.innerHTML = `
            <td>${1000+id++}</td>
            <td>${items.brand}</td>
            <td>${items.model}</td>
            <td>${items.category}</td>
            <td><img src ="${items.img}" class="img" ></td>
            <td>${items.price} $</td>
            <td>${id-1}/${count}</td>
            <td> 
                <button onclick="redact(${i})" class="bt1">Редактировать</button>
                <button onclick="deleteI(${i})" class="bt2">Удалить</button>
            </td>            
        
        `;
            tbody.append(tr);
            // <td><img src="${pc.image}" alt="${pc.name}" width="50"></td>
            // <td>
            //     <button class="btn btn-secondary" onclick="editPc(${pc.id})">Customize</button>
            //     <button class="btn btn-danger" onclick="removePc(${pc.id})">Remove</button>
            // </td>
        } else {
            continue;
        }
    }
}
    function deleteI(index) {
        localStorage.removeItem(`Item ${index}`);
        window.location.reload(); 
    }

    function redact(index) {
        window.location.href = "newComputer.html";
        localStorage.setItem("redacted", `Item ${index}`);
    }

    // localStorage.clear()
    // let a = 3;
    // let b = a;
    // a++;
    // console.log(a);
    // console.log(b);
    