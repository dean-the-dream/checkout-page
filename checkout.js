const plus = document.querySelectorAll(".plus")
const minus = document.querySelectorAll(".minus")
const productList = document.querySelector(".products")
let priceList = document.querySelectorAll("strong")
let productTotals = document.querySelectorAll(".product-line-price")
let sub = document.querySelector("#cart-subtotal").firstElementChild.nextElementSibling;
let shipping = document.querySelector("#cart-shipping").firstElementChild.nextElementSibling;
let tax = document.querySelector("#cart-tax").firstElementChild.nextElementSibling;
changeSubtotal();
changeTax();
changeShipping();
changeTotal();



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
        total.innerText = `${(parseFloat(amount.innerText) * parseFloat(count.innerText)).toFixed(2)}` 
    }
}
      
function changeSubtotal (){
    // let sub = document.querySelector("#cart-subtotal p + p")
    // productTotals = document.querySelectorAll(".product-line-price")
    let subNums = []
    for(let i = 0; i < productTotals.length; i++){
        subNums.push(parseFloat(productTotals[i].innerText).toFixed(2));
    }
    
    sub.innerText = (subNums.reduce((x, y) => parseFloat(x) + parseFloat(y))).toFixed(2);
}

function changeTax () {
    
    tax.innerText = (parseFloat(sub.innerText) * .18).toFixed(2);
}

function changeShipping () {
    
    (parseFloat(sub.innerText) == 0) ? shipping.innerText = "0" : shipping.innerText = "15"
}

function changeTotal () {
    let total = document.querySelector("#cart-total").firstElementChild.nextElementSibling;
    total.innerText = `${(parseFloat(shipping.innerText) + parseFloat(sub.innerText) + parseFloat(tax.innerText)).toFixed(2)}`; 
}

function removeProduct(e) {
    if(e.target.className == "remove-product"){
      e.target.parentElement.parentElement.parentElement.remove();  
    }
}







productList.addEventListener("click", changeQuantity)
productList.addEventListener("click", changeProductTotal)
productList.addEventListener("click", changeSubtotal)
productList.addEventListener("click", changeTax)
productList.addEventListener("click", changeShipping)
productList.addEventListener("click", changeTotal)
document.addEventListener("click", removeProduct)
// console.log(productTotals)
