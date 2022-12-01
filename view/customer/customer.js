
let containProduct = document.querySelector(".display_product");
// console.log(containProduct)

// ===========================================
let products = [
    {
      name: "Pot",
      price: "20$",
      imge: "",
      
    },
    {
        name: "Plate",
        price: "10$",
        imge: "",
    },
    {
        name: "spoon",
        price: "10$",
        imge: "",
    },
    {
        name: "spoon",
        price: "10$",
        imge: "",
    },
  ];
  productsStorage = null

  function saveProductonlocal() {
    localStorage.setItem("products", JSON.stringify(products));
  
      
  }
    
  function getProducionfromlocal() {
   
    let productsStorage = JSON.parse(localStorage.getItem("products"));
    if (productsStorage !== null) {
      products = productsStorage;
    }
  }
function renderProducts(){
    let displayProduct = document.querySelector(".all_cards")
    displayProduct.remove()
    let displayProducts = document.createElement("div");
    displayProducts.className = ("all_cards");
    containProduct.appendChild(displayProducts)
    console.log(displayProducts)
    
    console.log(displayProducts)
    console.log(products.length)


    for (let index = 0; index < products.length; index++){
        console.log()
        objProduct = products[index]
        console.log(objProduct.name)
       
        let card = document.createElement("div");
        card.className = ("card")
        card.dataset.index = index;
        displayProducts.appendChild(card)

        let image = document.createElement("img");

        image.src ="../../img/pol5.jpg"
        card.appendChild(image)

        let imformation = document.createElement("div");
        imformation.className = ("imformation")
        card.appendChild(imformation)

        let nameProduct = document.createElement("div");
        nameProduct.setAttribute("id","name")
        nameProduct.textContent = objProduct.name
        imformation.appendChild(nameProduct)

        let priceProduct = document.createElement("div");
        priceProduct.setAttribute("id","price")
        priceProduct.textContent = objProduct.price
        imformation.appendChild(priceProduct)
        let bntBuy = document.createElement("button");
        bntBuy.setAttribute("id","bntBuy");
        bntBuy.textContent = "Buy now"
        imformation.appendChild(bntBuy)
        
    }
    


}

// loadQuestions()
saveProduct()
renderProducts()
