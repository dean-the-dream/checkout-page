const plus = document.querySelectorAll(".plus")
const minus = document.querySelectorAll(".minus")
const productList = document.querySelector(".products")
const productTotals = document.querySelectorAll(".product-price p strong").innerText
let sub = document.querySelector("#cart-subtotal p + p")
function changeQuantity (e) {
    if((e.target.className == "plus")){
        let qty = e.target.previousElementSibling;
        qty.innerText = `${Number(qty.innerText) + 1}`
    }

    if((e.target.className == "minus")  ){
        let qty = e.target.nextElementSibling;
        if((Number(qty.innerText) > 0))
        qty.innerText = `${Number(qty.innerText) - 1}`
        console.log(qty.innerText)
        
           qty = e.target.nextElementSibling;
        } 
        
        
    }

function changeProductTotal (e){
    if((e.target.className == "plus") || (e.target.className == "minus")){
        let amount = e.target.parentElement.previousElementSibling.firstElementChild.firstElementChild;
        let count = e.target.parentElement.firstElementChild.nextElementSibling;
        let total = e.target.parentElement.nextElementSibling.nextElementSibling;
        total.innerText = `${(parseFloat(amount.innerText) * parseFloat(count.innerText))}` 
    }
}
      
function changeSubtotal (e){

    

}

productList.addEventListener("click", changeQuantity)
productList.addEventListener("click", changeProductTotal)
console.log(productTotals)
changeSubtotal();