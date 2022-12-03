
let containProduct = document.querySelector(".display_product");
let ditail_product = document.querySelector(".detail_product")
// console.log(ditail_product)
// console.log(containProduct)


let searchBookInput = document
  .getElementById("search-prodcuts")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchProduct);

// ///display product////================================

// function saveProductonlocal() {
//   localStorage.setItem("products", JSON.stringify(products));


// }
let productsStorage = JSON.parse(localStorage.getItem('products'));
// console.log(productsStorage)
  // 1. Get porduct from local//=========
  function getProducionfromlocal() {
    let productsStorage = JSON.parse(localStorage.getItem("products"));
    if (productsStorage !== null) {
      products = productsStorage;
      // console.log(products)
     
    
    
    }
  }
  
// 2. reder//=============
function renderProducts(){
  getProducionfromlocal()
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
     
        let stars = document.createElement('div');
        stars.className = ('stars');
        for ( let i = 0; i < 5; i++){
          let i = document.createElement('i');
          i.className = 'fa fa-star';
          stars.appendChild(i);
          // card.appendChild(stars)
        }
        let add_card = document.createElement("div");
        add_card.className = ("add_card");
        add_card.appendChild(stars)
        card.appendChild(add_card)
        let add_to_card = document.createElement('button');
        add_to_card.addEventListener("click",clickAddTocard)
        add_to_card.textContent = "Add to card"
        add_card.appendChild(add_to_card);
        let group_bnt = document.createElement("div")
        group_bnt.className= ("grup_bnt");
        card.appendChild(group_bnt);
        
      
        let a_buy = document.createElement('a');
        a_buy.href = 'ditail_buy/buy.html';
        let bntBuy = document.createElement("button");
        bntBuy.addEventListener("click",datainlocalDitail)
        group_bnt.appendChild(a_buy)

        bntBuy.className = "bnt_buy"
        bntBuy.textContent = "Buy now"
        a_buy.appendChild(bntBuy)

        let a_ditail = document.createElement('a');
        a_ditail.href = 'ditail_buy/ditail.html';
        let bntDetail = document.createElement("button");
        group_bnt.appendChild( a_ditail)

        bntDetail.className = "btn_ditail"
        bntDetail.textContent = "More detail"
        bntDetail.addEventListener("click", datainlocalDitail)
        a_ditail.appendChild(bntDetail)      
    }
   
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




// =========================for detail==========================
product_ditail=[]
function datainlocalDitail(event){
  index = event.target.parentElement.parentElement.parentElement.dataset.index;
  let product = productsStorage[index];
  console.log(product)

  // push old data of card when we click on bnt_ditail to new data
  product_ditail.push(product)
  // console.log(product_ditail)

  // save data to local
  saveProduct()
  // remove data after we ditail again
  product_ditail = []

}

function saveProduct(){
  localStorage.setItem("product_ditail", JSON.stringify(product_ditail));

}
// =========================for add to card==============
let product_Add = []
function clickAddTocard(event){
  index = event.target.parentElement.parentElement.dataset.index;
  let productAdd = productsStorage[index];
  console.log(productAdd)
  product_Add.push(productAdd)
  console.log(productAdd)

  saveProductAdd()
}

function saveProductAdd(){
  localStorage.setItem("product_Add", JSON.stringify(product_Add));

}

renderProducts()
searchProduct()
datainlocalDitail()
clickAddTocard()
// datainlocalBuy
// saveProduct()
