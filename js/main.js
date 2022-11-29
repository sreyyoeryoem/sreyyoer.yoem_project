let chooseUser = document.querySelector(".card_container");
let homepage = document.querySelector(".manu_bar")
console.log(homepage)

// ------------------function----------------------------
function show(element){
    element.style.display = "block";
}
function hide (element){
    element.style.display = "none"
}








// ---------------------------------//-----------------------










let iconChooseUser = document.querySelector(".icon");
console.log(iconChooseUser)
iconChooseUser.addEventListener("click", function(){
    show(chooseUser);
    hide(homepage)
})

// -----------------------------call function------------------------
// show()
// hide(homepage)