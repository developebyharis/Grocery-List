const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
let editElement;
let editFlag = false;
let edited = "";
FormData.addEventListner("submit", addItem);