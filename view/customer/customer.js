
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
     

        let imformation = document.createElement("div");
        imformation.className = ("imformation")
        card.appendChild(imformation)

        let nameProduct = document.createElement("div");
        nameProduct.setAttribute("id","name")
        nameProduct.textContent = "Name: "+ product.name 
        imformation.appendChild(nameProduct)

        let priceProduct = document.createElement("div");
        priceProduct.setAttribute("id","price")
        priceProduct.textContent = "Price: "+ product.price + "$"
        imformation.appendChild(priceProduct)



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

// loadQuestions()

// renderProducts()
// p = document.createElement("div")
// console.log(p)
getProducionfromlocal()
renderProducts()