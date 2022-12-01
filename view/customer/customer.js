
let containProduct = document.querySelector(".display_product");
// console.log(containProduct)

// ===========================================
// let products = [
    
// //   ];
//   // productsStorage = null

//   // function saveProductonlocal() {
//   //   localStorage.setItem("products", JSON.stringify(products));
  
// ]
  
    
  function getProducionfromlocal() {

    let productsStorage = JSON.parse(localStorage.getItem("products"));
    if (productsStorage !== null) {
      products = productsStorage;
    
    
    }
  }
  

function renderProducts(){

  let productsStorage = JSON.parse(localStorage.getItem("products"));
    if (productsStorage !== null) {
      products = productsStorage;

    }
    
  let displayProduct = document.querySelector(".all_cards")
  displayProduct.remove()
  let displayProducts = document.createElement("div");
  displayProducts.className = ("all_cards");
  containProduct.appendChild(displayProducts)



    for (let index in  products){
      product = products[index]

        let card = document.createElement("div");
        card.className = ("card")
        card.dataset.index = index;
        displayProducts.appendChild(card)

        let image = document.createElement("img");
       
        image.src = product.imge
        card.appendChild(image)
     

        let imformation = document.createElement("div");
        imformation.className = ("imformation")
        card.appendChild(imformation)

        let nameProduct = document.createElement("div");
        nameProduct.className = ("div_name")
        nameProduct.textContent = "Name: "
        imformation.appendChild(nameProduct)
        let spanName = document.createElement("span");
        spanName.textContent = product.name
        nameProduct.appendChild(spanName )
        let priceProduct = document.createElement("div");
        priceProduct.setAttribute("id","price")
        priceProduct.textContent = "Price: "+ product.price + "$"
        imformation.appendChild(priceProduct)

        let gender = document.createElement("div");
        gender.setAttribute("id","gender")
        gender.textContent = "Gender: "+ product.gender 
        imformation.appendChild(gender)

        let grup_bnt = document.createElement("div")
        grup_bnt.className= ("grup_bnt");
        card.appendChild(grup_bnt);
        
        let stars = document.createElement('div');
        stars.className = ('stars');
        let i = document.createElement('i');
        i.className = 'fas fa-star';
        stars.appendChild(i);
        card.appendChild(stars)

        let bntBuy = document.createElement("button");
        bntBuy.setAttribute("id","bntBuy");
        bntBuy.textContent = "Buy now"
        let bntDetail = document.createElement("button");
        bntDetail.setAttribute("id","bntDetail");
        bntDetail.textContent = "More detail"
        grup_bnt.appendChild(bntBuy)
        grup_bnt.appendChild(bntDetail)

        
    }
}
///reseach product-------------

function searchProduct(){
  let  searchProduct = searchBookInput.value;
  searchProduct.toLocaleLowerCase;
  let nameProducts = document.querySelectorAll(".div_name");


  for ( let valuse of nameProducts){
    console.log(valuse)
    let name_product = valuse.lastElementChild.textContent.toLowerCase();
    // console.log(boxtitle)
    if (name_product.indexOf(searchProduct)=== -1){
      valuse.closest('.card').style.display = "none";
    }
    else{
      valuse.closest('.card').style.display= "block";
    }
  }
  
}

let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
  // console.log(searchBookInput)
searchBookInput.addEventListener("keyup", searchProduct);

// loadQuestions()

// renderProducts()
// p = document.createElement("div")
// console.log(p)
getProducionfromlocal()
renderProducts()
searchProduct()