const img_buy = document.querySelector(".card_broduct img");
const name_buy = document.querySelector(".name");
const price_buy = document.querySelector(".price");
const bnt_buy = document.getElementById("buy");
const bnt_cancel = document.getElementById("cancel");
// const numberphone_input = document.getElementById("input_number");
// const numberOfwhach = document.getElementById("numberwhach");
// const money_input = document.getElementById("money");
// const location_input = document.getElementById("location");




 //For buy================
function dataBuyProduct(){
let product_ditail = JSON.parse(localStorage.getItem("product_ditail"));

    for (value of product_ditail){
        img_buy.src = value.imge
        name_buy.textContent = value.name 
        price_buy.textContent = value.price + "$"
    }
}
let dataBuys = []

  
  function saveDataBuy(){
    localStorage.setItem("dataBuys", JSON.stringify(dataBuys));
  }

 

let dataBuy = {}
function buyProduct(){
    // event.preventDefault()
    let oldstrageBuy = JSON.parse(localStorage.getItem("product_ditail"));
    for(strage of oldstrageBuy){
        name_stor = strage.name
        price_stor = strage.price
    }
    dataBuy.phone =  document.getElementById("input_number").value
    dataBuy.money = document.getElementById("numberwhach").value
    dataBuy.number = document.getElementById("money").value
    dataBuy.location = document.getElementById("location").value
    dataBuy.name = name_stor
    dataBuy.price = price_stor
   
    
    dataBuys.push(dataBuy)
    saveDataBuy()

}

// buyProduct()

dataBuyProduct()