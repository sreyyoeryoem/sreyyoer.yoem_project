const formCreata = document.querySelector(".create");
let table_Data = document.querySelector(".display_product");
let all_broduct = document.querySelector(".all_product");




let products = [
  //   {
  //     name: "Pot",
  //     price: "20$",
  //     imge: "https://media-www.canadiantire.ca/product/living/kitchen/cookware/1429086/rock-one-pot-28cm-stock-pot-orange-cfb85715-d1bc-4ce3-a815-0fb8a138cf7b.png",
      
  //   },
  //   {
  //       name: "Plate",
  //       price: "10$",
  //       imge: "https://media-www.canadiantire.ca/product/living/kitchen/cookware/1429086/rock-one-pot-28cm-stock-pot-orange-cfb85715-d1bc-4ce3-a815-0fb8a138cf7b.png",
  //   },
  //   {
  //       name: "spoon",
  //       price: "10$",
  //       imge: "https://media-www.canadiantire.ca/product/living/kitchen/cookware/1429086/rock-one-pot-28cm-stock-pot-orange-cfb85715-d1bc-4ce3-a815-0fb8a138cf7b.png",
  //   },
  //   {
  //     name: "spoon",
  //     price: "10$",
  //     imge: "https://media-www.canadiantire.ca/product/living/kitchen/cookware/1429086/rock-one-pot-28cm-stock-pot-orange-cfb85715-d1bc-4ce3-a815-0fb8a138cf7b.png",
  // },
  ];

 

  let productToEdit = null

  //  LOCAL STORAGE ---------------------------------------------------------

function saveProductonlocal() {
  localStorage.setItem("products", JSON.stringify(products));

    
}
  
function getProducionfromlocal() {
 
  let productsStorage = JSON.parse(localStorage.getItem("products"));
  if (productsStorage !== null) {
    products = productsStorage;
  }
}
// ------------------------------------hide/show-------------------
function show(element){
  element.style.display = "block"

}
function hide(element){
  element.style.display = "none"
}



// =============================================render products=========================
function renderProduct() {

  
  let  displayPorduct = document.querySelector(".display_product");
  displayPorduct.remove();

  let displayPorducts = document.createElement("div");
  displayPorducts.className=("display_product");
  all_broduct.appendChild(displayPorducts);


  
  for (let index = 0; index < products.length; index++) {
    getProducionfromlocal()
    let product = products[index];

    let card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index;
    displayPorducts.appendChild(card)
    
    let imfor_product = document.createElement("div");
    imfor_product.className=("imfor_prodcut")
    card.appendChild(imfor_product)

    let deleteEdit = document.createElement("div");
    deleteEdit.className = ("delete_edit");
    card.appendChild(deleteEdit)

    let Image = document.createElement("img");
    Image.src = product.imge
    
    imfor_product.appendChild(Image)

    let span_Name = document.createElement("span");
    span_Name.textContent = "Name: " + product.name
    imfor_product.appendChild(span_Name)

    let span_Price = document.createElement("span");
    span_Price.textContent = "Price: " + product.price + "$"
    imfor_product.appendChild(span_Price)


    let img_edit = document.createElement("img");
    img_edit.src = "../../img/edit.png"
    deleteEdit.appendChild(img_edit)
    img_edit.addEventListener("click",editProduct)
 
    let img_delete = document.createElement("img");
    img_delete.src = "../../img/delete.png"
    deleteEdit.appendChild(img_delete)
    img_delete.addEventListener("click",removeProduct)
  }
  // saveProductonlocal()
}
// ======================================================createNewProduct==================================
function createNewProduct(){
  hide(formCreata)
  document.getElementById("btnCreate").textContent = "EDIT";
  
 

  if (productToEdit !== null) {
    let editProduct = products[productToEdit];
    console.log(productToEdit)
    editProduct.name = document.getElementById("name_product").value;
    editProduct.price = document.getElementById("price_product").value;
    editProduct.imge = document.getElementById("image_product").value;
    
  } else {
    let newProduct = {};
    newProduct.name = document.getElementById("name_product").value;
    newProduct.price = document.getElementById("price_product").value;
    newProduct.imge = document.getElementById("image_product").value;
    products.push(newProduct)
    console.log(products)
  }

  saveProductonlocal()
  renderProduct()
}
function openDialog(){
  show(formCreata)
}
// ============================================cancel==========================================================
function onCancel(){
  hide(formCreata)
}
// =======================================edit=================================================================
function editProduct(event) {
  
  productToEdit = event.target.parentElement.parentElement.dataset.index;
  console.log(productToEdit)
  
  // update the dialog with question informatin
  let product = products[productToEdit];

  document.getElementById("name_product").value = product.name
  console.log(product.name)
  document.getElementById("price_product").value = product.price
  document.getElementById("image_product").value = product.imge
  
  document.getElementById("btnCreate").textContent = "EDIT";
  show(formCreata);

}
// =========================================remove===========================================
function removeProduct(event) {
  //  Get index
  let index = event.target.parentElement.parentElement.dataset.index;

  // Remove question
  products.splice(index, 1);
  
  // Save to local storage
  saveProductonlocal()
  // Update the view
  renderProduct()

  
}
// call====================================
getProducionfromlocal()
// saveProductonlocal()

renderProduct()
// saveProductonlocal()

