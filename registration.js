let form = document.getElementById("create");
let accountData = {
    name1: "",
    surname: "",
    email: "",
    username: "",
    password: ""
}

// console.log(JSON.parse(localStorage.getItem(`account ${count}`)).name1);
// if(JSON.parse(localStorage.getItem(`account ${count}`)).email != email) {

let count = 0;

form.addEventListener("submit", ()=>{
    // window.location.href = "login.html";     
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
          } else {
            localStorage.clickcount = 1;
          }
          count = localStorage.getItem("clickcount");
      
        let name1 = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let email = document.getElementById("email").value;
        let username = document.getElementById("username").value;
        let psw = document.getElementById("password").value;
        accountData.name1 = name1;
        accountData.surname = surname;
        accountData.email = email;
        accountData.username = username;
        accountData.password = psw;
    
        localStorage.setItem(`account ${count}`, JSON.stringify(accountData));
        alert("Успешная регистрация");
    })
    
// localStorage.removeItem()
// localStorage.clear();