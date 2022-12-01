const formCreata = document.querySelector(".create");
let table_Data = document.querySelector(".display_product");
let all_broduct = document.querySelector(".all_product");
let inputName = document.getElementById("name_product");
let inputPrice = document.getElementById("price_product");
let inputImage = document.getElementById("image_product");
let gender = document.getElementById("gender");

// for(let values of gender ){
//   if (values.selected){
//     let genderSelecte = values
//     console.log(genderSelecte)
//   }
//   // console.log(value)

// console.log(gender)







let products = [];



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
  console.log(productsStorage)

}
// ------------------------------------hide/show-------------------
function show(element) {
  element.style.display = "block"

}
function hide(element) {
  element.style.display = "none"
}



// =============================================render products=========================
function renderProduct() {


  let displayPorduct = document.querySelector(".display_product");
  displayPorduct.remove();

  let displayPorducts = document.createElement("div");
  displayPorducts.className = ("display_product");
  all_broduct.appendChild(displayPorducts);



  for (let index = 0; index < products.length; index++) {
    getProducionfromlocal()
    let product = products[index];

    let card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index;
    displayPorducts.appendChild(card)

    let imfor_product = document.createElement("div");
    imfor_product.className = ("imfor_prodcut")
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
    let span_gender = document.createElement("span");
    span_Price.textContent = "Gender: " + product.gender + "$"
    imfor_product.appendChild(span_Price)


    let edit = document.createElement("h4");
    // img_edit.src = "../../img/edit.png"
    edit.textContent = "Edit"
    deleteEdit.appendChild(edit)
    edit.addEventListener("click", openDialogToEdit)

    let deletes = document.createElement("h4");
    // img_delete.src = "../../img/delete.png"
    deletes.textContent = "Delete"
    deleteEdit.appendChild(deletes)
    deletes.addEventListener("click", removeProduct)
  }
  // saveProductonlocal()
}



function createOrEditProduct() {

  // 1 - Hide the dialog
  hide(formCreata)
  
 

  if (productToEdit !== null) {

    // 2 - Edit the existing kitchen product
    let editProduct = products[productToEdit];
    editProduct.name = inputName.value;
    editProduct.price = inputPrice.value;
    editProduct.gender = gender.value
    editProduct.imge = inputImage.value;
    console.log()

  } else {

    // 2 - Create a  new  kitchen product
    let newProduct = {};
    newProduct.name = inputName.value;
    newProduct.price = inputPrice.value;
    newProduct.gender =  document.getElementById("gender").value
    console.log(newProduct.gender)
    newProduct.imge = inputImage.value;
    console.log(newProduct.gender)
    if(newProduct.name !== "" && parseInt(newProduct.price) >=0 && newProduct.imge !== "" && (newProduct.gender != "")){
        products.push(newProduct)
    }
    else{

      if (inputName.value == ""){
        inputName.style.boder = "red"
      }
      if (inputPrice.value == ""){
        inputPrice.style.border = "red"
      }
      if (inputImage.value == ""){
        inputImage.style.border = "red"
      

      }

        
        
    }
  }

  // 3 - Save the list of products to local storage
  saveProductonlocal()

  // 4 - Update the view (HTML)
  renderProduct()
}


// function canCreateNew(){
//   if (inputName.name != "" && parseInt(inputPrice )>0 && inputImage != ""){
//     createOrEditProduct()
//     saveProductonlocal()
//     renderProduct()
//   }
//   else{
//   }
// }
//
// Open the dilaog to CREATE a new product
//
function openDialogToCreate() {

  // 1 - Update the diaolg button to CREATE
  document.getElementById("btnCreate").textContent = "CREATE";

  // 2 - CLear the reference of edit
  productToEdit = null;

  // 3  - Show the dialog
  show(formCreata);

}


function openDialogToEdit(event) {

  // 1 - Update the diaolg button to EDIT
  document.getElementById("btnCreate").textContent = "EDIT";

  // 2 - Update the reference of edit
  productToEdit = event.target.parentElement.parentElement.dataset.index;

  // 3 - update the dialog with question informatin
  let product = products[productToEdit];
  inputName.value = product.name
  console.log(product.name)
  inputPrice.value = product.price
  inputImage.value = product.imge
  
  // 4  - Show the dialog
  show(formCreata);

}


function onCancel() {
  hide(formCreata)
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

