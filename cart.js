console.log('cart items');

const cartItems = JSON.parse(localStorage.getItem('cartItems'));
// console.log(cartItems)

const div = document.querySelector('div');

function renderItems (){
    if(cartItems != null && cartItems.length > 0){
        for(let i = 0; i < cartItems.length; i++){
            console.log(cartItems[i]);
            div.innerHTML += `
            <div class="bg-secondary  border border-light rounded m-5 p-3">
            <img> ${cartItems[i]} </img>
            <h1>Model: ${cartItems[i].brand + ' ' + cartItems[i].model}</h1>
            <h1>Price: ${cartItems[i].price}</h1>
            </div>
            `
        }
    }else{
        console.log('Cart items are Empty!!!')
        div.innerHTML = `
        <h3 class="text-center">No Items Found...</h3>
        `
    }
}

renderItems()



// localStorage.setItem('kis naam sa krwana ha' , 'value stringify wali');

// localStorage.getItem('kis item sa save krwaya ha');

// JSON.stringify()
// JSON.parse()