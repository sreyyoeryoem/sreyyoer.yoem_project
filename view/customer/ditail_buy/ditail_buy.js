const prodcut_image = document.querySelector(".img_product img");
console.log(prodcut_image)
const product_name = document.getElementById("name");
const product_price = document.getElementById("price");
console.log(product_price)
const bnt_buy = document.getElementById("buy");
const bnt_cancel = document.getElementById("cancel");

// /@@/ display Product =========================

//1. get data from localstorage//===================
let product_ditail = JSON.parse(localStorage.getItem('prodcut_ditail'));
console.log(product_ditail)
function displayProduct(){
    for (value of product_ditail){
        console.log(value)
        prodcut_image.src = value.imge
        console.log(prodcut_image)
        product_name.textContent = value.name;
        product_price.textContent = value.price + " $"
        console.log( product_price.textContent)
        
        
    }
    
}
// 2 buy product=================
function buyProduct(){
    
    
}

//3 cancel===========================
// function bnt_cancel(event){
//     // index = event.target.parentElement.parentElement.parentElement.dataset.index;



// }

displayProduct()