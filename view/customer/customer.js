
let containProduct = document.querySelector(".display_product");
let ditail_product = document.querySelector(".detail_product")
console.log(ditail_product)
// console.log(containProduct)




let searchBookInput = document
  .getElementById("search-prodcuts")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchProduct);

// ///display product////================================
let productsStorage = JSON.parse(localStorage.getItem('products'));
  // 1. Get porduct from local//=========
  function getProducionfromlocal() {

    let productsStorage = JSON.parse(localStorage.getItem("products"));
    if (productsStorage !== null) {
      products = productsStorage;
    
    
    }
  }
  
// 2. reder//=============
function renderProducts(){
  let displayProduct = document.querySelector(".all_cards")
  displayProduct.remove()
  let displayProducts = document.createElement("div");
  displayProducts.className = ("all_cards");
  containProduct.appendChild(displayProducts)

  // 3.create (HTML)

    for (let index in  products){
      product = products[index]

        let card = document.createElement("div");
        card.className = ("card");
        card.dataset.index = index;
        displayProducts.appendChild(card);
       

        let image = document.createElement("img");
       
        image.src = product.imge
        card.appendChild(image);
     
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

        bntBuy.className = "btn_buy"
        bntBuy.textContent = "Buy now"
        grup_bnt.appendChild(bntBuy)
        // grup_bnt.addEventListener("click",openDailogDetail)

        let a = document.createElement('a');
        a.href = 'ditail_buy/ditail_buy.html';
        let bntDetail = document.createElement("button");
        grup_bnt.appendChild(a)

        bntDetail.className = "btn_ditail"
        bntDetail.textContent = "More detail"
        bntDetail.addEventListener("click",openDailogDetail)
        a.appendChild(bntDetail)      
    }
    console.log(containProduct);
}
///reseach product===================

function searchProduct(){
  
  let  searchProduct = searchBookInput.value;
  searchProduct.toLocaleLowerCase;
  let nameProducts = document.querySelectorAll(".div_name");

  for ( let valuse of nameProducts){
    let name_product = valuse.lastElementChild.textContent.toLowerCase();
    if (name_product.indexOf(searchProduct)=== -1){
      valuse.closest('.card').style.display = "none";
    }
    else{
      valuse.closest('.card').style.display= "block";
    }
  }
}


//

//get data form old local============================

let product_ditail = []
function getOldLocal(event){
  index = event.target.parentElement.parentElement.parentElement.dataset.index;
  let product = productsStorage[index];

  // push old data of card when we click on bnt_ditail to new data
  product_ditail.push(product)

  // save data to local
  saveProduct()
  // remove data after we ditail again
  product_ditail = []

}

function saveProduct(){
  localStorage.setItem("prodcut_ditail",JSON.stringify(product_ditail));

}
renderProducts()

searchProduct()
openDailogDetail()
// saveProduct()
