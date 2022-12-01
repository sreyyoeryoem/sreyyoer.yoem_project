
let containProduct = document.querySelector(".display_product");
// console.log(containProduct)

// ===========================================
let products = [
    // {
    //   name: "Pot",
    //   price: "20$",
    //   imge: "",
      
    // },
    // {
    //     name: "Plate",
    //     price: "10$",
    //     imge: "",
    // },
    // {
    //     name: "spoon",
    //     price: "10$",
    //     imge: "",
    // },
    // {
    //     name: "spoon",
    //     price: "10$",
    //     imge: "",
    // },
  ];
  // productsStorage = null

  // function saveProductonlocal() {
  //   localStorage.setItem("products", JSON.stringify(products));
  
      
  // }
    
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
      console.log(products)
    }
    
  let displayProduct = document.querySelector(".all_cards")
  displayProduct.remove()
  let displayProducts = document.createElement("div");
  displayProducts.className = ("all_cards");
  containProduct.appendChild(displayProducts)
  console.log(containProduct)


    for (let product of products){
      console.log(product)
      
        let card = document.createElement("div");
        console.log(card)
        card.className = ("card")
        // card.dataset.index = index;
        displayProducts.appendChild(card)

        let image = document.createElement("img");
        console.log(image)
        image.src = product.imge
        card.appendChild(image)
        console.log(image)

        let imformation = document.createElement("div");
        imformation.className = ("imformation")
        card.appendChild(imformation)

        let nameProduct = document.createElement("div");
        nameProduct.setAttribute("id","name")
        nameProduct.textContent = "Name: "+ product.name
        imformation.appendChild(nameProduct)

        let priceProduct = document.createElement("div");
        priceProduct.setAttribute("id","price")
        priceProduct.textContent = "Price: "+ product.price
        imformation.appendChild(priceProduct)
        let bntBuy = document.createElement("button");
        bntBuy.setAttribute("id","bntBuy");
        bntBuy.textContent = "Buy now"
        imformation.appendChild(bntBuy)
        
    }
    


}

// loadQuestions()

// renderProducts()
// p = document.createElement("div")
// console.log(p)
getProducionfromlocal()
renderProducts()