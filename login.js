let inpName = document.getElementById("name").value;
let inpPsw = document.getElementById("psw").value;

let arrOfAcc = [];
let count = +localStorage.getItem("clickcount");
for(let i = 1; i<=count; i++) {
    arrOfAcc.push(JSON.parse(localStorage.getItem(`account ${i}`)))
}
// console.log(arrOfAcc);

let form = document.getElementById("form1");

form.addEventListener('submit', ()=> {
    let checker = false;
    
    arrOfAcc.forEach(account => {
        
        if(inpName == account.username && inpPsw == account.password) {
            checker = true;
            localStorage.setItem("chhchchch", checker);
            
        }
    });

    
})
