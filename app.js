

const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000 ,
        img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-1.jpg"  
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000 ,
        img: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note10-1.jpg" 
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000 ,
        img: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-zero-x-pro-.jpg" 
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000 ,
        img: "https://fdn2.gsmarena.com/vv/pics/tecno/tecno-spark10-pro-.jpg" 
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000 ,
        img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-5.jpg" 
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000 ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_qC-ygXLWzEkoQqQ1gHNg6LDLiH6KZ63WXg8tTiURyA&s" 
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000 ,
        img: "https://hamariweb.com/mobiles/LargeImages/5713_02.jpg" 
    },
    {
        brand: 'Samsung',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000 ,
        img: "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/151054-phones-feature-samsung-s20-colours-all-the-colors-for-the-151054-samsung-galaxy-s20-s20-and-s20-ultra-image1-n9epogbhhf.jpg" 
    },

]


let arr;
let items = JSON.parse(localStorage.getItem('cartItems'));
if(items === null){
    arr = [];
}else{
    arr = items;
}


const div = document.querySelector('.products');
function renderItems (){
    for(let i = 0; i < phones.length; i++){
        div.innerHTML += `
        <div class="card bg-dark text-light border-light" style="width: 18rem;">
        <img src = "${phones[i].img}" class > 
            <div class="card-body">
                <h5 class="card-title">${phones[i].brand +' '+ phones[i].model}</h5>
                <p class="card-text">Rs ${phones[i].price}</p>
                <button onclick="addtocart(${i})" class="btn btn-primary">Add to Cart</button>
            </div>
        </div>
        `
    }
}

renderItems()


function addtocart(index){
    if(arr.includes(phones[index])){
        phones[index].quantity += 1;
    }else{
        phones[index].quantity = 1;
        arr.push(phones[index]);
    }
    console.log(arr);
}

function gotocart(){
    console.log('cart');
    localStorage.setItem('cartItems' , JSON.stringify(arr));
    window.location = 'cart.html';
}
