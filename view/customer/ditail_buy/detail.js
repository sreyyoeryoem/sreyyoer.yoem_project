const image_detail = document.querySelector(".img_product img");
const name_detail = document.getElementById("name");
const price_detail = document.getElementById("price");


// /@@/ detail and buy Product =========================

//1. get data from localstorage//===================


 
function dataDetailProdut(){
let product_ditail = JSON.parse(localStorage.getItem("product_ditail"));

    for (value of product_ditail){
        console.log(value)
        image_detail.src = value.imge
        name_detail.textContent = value.name;
        price_detail.textContent = value.price + " $"
      
        
    }
    
}


//2 cancel===========================
// function bnt_cancel(event){
//     // index = event.target.parentElement.parentElement.parentElement.dataset.index;



// }

dataDetailProdut()