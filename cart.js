
const cartItems = JSON.parse(localStorage.getItem('cartItems'));
// console.log(cartItems)

const div = document.querySelector('div');
const totalamt = document.querySelector('.totalamt');
function renderItems (){

    if(cartItems != null && cartItems.length > 0){

        for(let i = 0; i < cartItems.length; i++){
            console.log(cartItems[i]);
         
            div.innerHTML += `
            <div id="cart-container" class=" border border-light rounded m-5 p-3">
            <h2>Model: ${cartItems[i].brand + ' ' + cartItems[i].model}</h2>
            <h2>Quantity: <button onclick="plusBtn(${i})" id="QP-btn" >+</button>  ${cartItems[i].quantity}   <button onclick="minusbtn(${i})" id="QL-btn">-</button></h2>
            <h3>Price: ${cartItems[i].price * cartItems[i].quantity }Rs. </h3>
            <button class="btn btn-danger position-relative" onclick="deletebtn(${i})">Delete</button>
            </div>
         `
        }
    }
    else
    {
        console.log('Cart items are Empty!!!')
        div.innerHTML = `
        <h3 class="text-center">No Items Found...</h3>
        `
    }
}
renderItems()



function plusBtn(index) {
    cartItems[index].quantity += 1
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    location.reload()
    total()
}

function minusbtn(index) {
    if (cartItems[index].quantity === 1) {
        cartItems.splice(index, 1)
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        location.reload()
    }

    else{
        cartItems[index].quantity -= 1 
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        location.reload()
        total()
    }
    
}

function deletebtn(index) {
    cartItems.splice(index, 1)
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
    location.reload()
}


function total() {
    let total = 0 ;
    for(let i = 0; i < cartItems.length; i++){
        total = total + (cartItems[i].price * cartItems[i].quantity)
    }
    totalamt.innerHTML = `<h2 class="text-center"> Total: ${total}  </h2>`
}
total()