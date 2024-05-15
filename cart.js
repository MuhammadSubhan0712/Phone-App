
const cartItems = JSON.parse(localStorage.getItem('cartItems'));
// console.log(cartItems)

const div = document.querySelector('div');

function renderItems (){
    let total = 0;
    if(cartItems != null && cartItems.length > 0){
        for(let i = 0; i < cartItems.length; i++){
            console.log(cartItems[i]);
            total += cartItems[i].price
            div.innerHTML += `
            <div id="cart-container" class=" border border-light rounded m-5 p-3">
            <h2>Model: ${cartItems[i].brand + ' ' + cartItems[i].model}</h2>
            <h2>Quantity: <button id="QP-btn" >+</button>     <button id="QL-btn">-</button></h2>
            <h2>Price: ${cartItems[i].price}</h2>
            </div>
            `
        }
        div.innerHTML +=`
        <h2>Total Amount = ${cartItems[i].total} </h2>`

    }
    else{
        console.log('Cart items are Empty!!!')
        div.innerHTML = `
        <h3 class="text-center">No Items Found...</h3>
        `
    }
}

renderItems()
