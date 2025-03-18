
let arrOfAcc = [];
let count = +localStorage.getItem("clickcount");
for(let i = 1; i<=count; i++) {
    arrOfAcc.push(JSON.parse(localStorage.getItem(`account ${i}`)));
}

let form = document.getElementById("form1");


form.addEventListener('submit', (event)=> {
    let inpName = document.getElementById("name").value;
    let inpPsw = document.getElementById("psw").value;
    event.preventDefault();
    let checker = false;
    
    arrOfAcc.forEach(account => {
        if(inpName == account.username && inpPsw == account.password) {
            checker = true;
            // localStorage.setItem("accountNum", 1);
        }
    });

    if(checker==false) {
        alert("Username oder password incorrect");
    } else {
        alert("Succesfully");
        window.location.href = "index2.html";
        localStorage.setItem("loggedInUser", inpName);
    }
    
})


// localStorage.clear()