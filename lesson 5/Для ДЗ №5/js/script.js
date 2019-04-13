let adv = document.querySelector(".adv");
let menuItems = document.querySelectorAll(".menu-item");
let menu = document.querySelectorAll(".menu");
let newMenuItem = document.createElement("li");
let text = document.querySelector("#title");
let attitude = document.querySelector("#prompt");

newMenuItem.innerText = "Пятый пункт";
newMenuItem.className = "menu-item";

console.log(menu);

menu[0].insertBefore(menuItems[2], menuItems[1]);
menu[0].appendChild(newMenuItem);

document.body.style.backgroundImage = "url(../img/apple_true.jpg)";

let columns = document.querySelectorAll(".column");
console.log(columns[1]);
columns[1].removeChild(adv);

text.innerText = "Мы продаем только подлинную технику Apple";
attitude.innerText = prompt("Каково ваше отношение к технике apple?","Попизже всяких андройдов ебаных");