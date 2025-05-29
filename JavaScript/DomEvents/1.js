/* const container = document.querySelector("#itemList");

const items = document.querySelectorAll(".item");

console.log(container);
container.lastElementChild.remove();

const botton = document.querySelector("#btn");

 botton.style.background = "red";



const btn = document.querySelector("#btn");
const myForm = document.querySelector("#mainForm");

btn.addEventListener("click", function(event){
    event.preventDefault();
    myForm.style.background = "green";
});

*/

const btn = document.querySelector("#btn");

const mail = document.querySelector("#mail");

const pass = document.querySelector("#pass");

const msg = document.querySelector("#msg");


btn.addEventListener("click", function(event){
    event.preventDefault();

    if(mail.value.length === 0 || pass.value.length === 0){
        msg.innerHTML = "Please complete details!";

        setTimeout(() => document.querySelector("#msg").remove(), 3000)
    }
    else{
        myForm.submit();
    }
});
