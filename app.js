

const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: '8GB',
        rom: '256GB',
        camera: '50 megapixel',
        price: 150000,
        img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-1.jpg"  
    },
    {
        brand: 'Redmi',
        model: 'note10',
        ram: '4GB',
        rom: '64GB',
        camera: '30 megapixel',
        price: 35000 ,
        img: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note10-1.jpg" 
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: '4GB',
        rom: '64GB',
        camera: '30 megapixel',
        price: 25000 ,
        img: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-zero-x-pro-.jpg" 
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: '4GB',
        rom: '64GB',
        camera: '25 megapixel',
        price: 15000 ,
        img: "https://www.gizmochina.com/wp-content/uploads/2023/08/F2W3YJBa8AA2M-g-scaled.jpeg" 
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: '8GB',
        rom: '256GB',
        camera: '30 megapixel',
        price: 250000 ,
        img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-5.jpg" 
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: '6GB',
        rom: '128GB',
        camera: '20 megapixel',
        price: 15000 ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_qC-ygXLWzEkoQqQ1gHNg6LDLiH6KZ63WXg8tTiURyA&s" 
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: '4GB',
        rom: '64GB',
        camera: '8 megapixel',
        price: 27000 ,
        img: "https://hamariweb.com/mobiles/LargeImages/5713_02.jpg" 
    },
    {
        brand: 'Samsung',
        model: 's50',
        ram: '8GB',
        rom: '256GB',
        camera: '60 megapixel',
        price: 30000 ,
        img: "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/151054-phones-feature-samsung-s20-colours-all-the-colors-for-the-151054-samsung-galaxy-s20-s20-and-s20-ultra-image1-n9epogbhhf.jpg" 
    },

    {
        brand: 'Samsung',
        model: 'A14',
        ram: '6GB',
        rom: '128GB',
        camera: '60 megapixel',
        price: 213000 ,
        img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a14-4g-3.jpg" 
    },

    {
        brand: 'Oppo',
        model: 'Reno 6',
        ram: '12GB',
        rom: '256GB',
        camera: '60 megapixel',
        price: 64999,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kh7ogcN1bkLxWkoM5difPrrsnG7lNC9_fvRVb3egXA&s" 
    },

    {
        brand: 'Infinix',
        model: 'Note 12',
        ram: '6GB',
        rom: '128GB',
        camera: '60 megapixel',
        price: 23000 ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdlttERzXpbwDF7T-WUW2LTmso1e5XP1SU-vjI4hbOQ&s" 
    },

    {
        brand: 'Tecno',
        model: 'Camon 18',
        ram: '6GB',
        rom: '128GB',
        camera: '48 megapixel',
        price: 74999 ,
        img: "https://fdn.gsmarena.com/imgroot/reviews/21/tecno-camon-18-premier/lifestyle/-1024w2/gsmarena_001.jpg" 
    },

    {
        brand: 'Samsung',
        model: 'A12',
        ram: '6GB',
        rom: '128GB',
        camera: '48 megapixel',
        price: 24999 ,
        img: "https://hamariweb.com/mobiles/LargeImages/5536_01.jpg" 
    },

    {
        brand: 'Iphone',
        model: '13',
        ram: '4GB',
        rom: '512GB',
        camera: '12 megapixel',
        price: 278999 ,
        img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-3.jpg" 
    },

    {
        brand: 'Xiaomi',
        model: '13 Pro',
        ram: '12GB',
        rom: '512GB',
        camera: '50 megapixel',
        price: 89999 ,
        img: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-13-pro-colors-1.jpg" 
    },

    {
        brand: 'Realme',
        model: '9 Pro',
        ram: '8GB',
        rom: '128GB',
        camera: '64 megapixel',
        price: 59999 ,
        img: "https://images.moneycontrol.com/static-mcnews/2022/02/Realme-9-Pro-1.jpg" 
    },

    {
        brand: 'Redmi',
        model: 'Note 11',
        ram: '6GB',
        rom: '128GB',
        camera: '50 megapixel',
        price: 59999  ,
        img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Redmi_Note_11_and_Redmi_Note_11S.jpg" 
    },

    {
        brand: 'Samsung',
        model: 'A52',
        ram: '8GB',
        rom: '256GB',
        camera: '64 megapixel',
        price: 65999 ,
        img: "https://images.samsung.com/is/image/samsung/assets/pk/galaxy-a52/buy/A52_GroupKV_MO_img.jpg" 
    },

    {
        brand: 'Infinix',
        model: 'Smart 8 HD',
        ram: '3GB',
        rom: '64GB',
        camera: '13 megapixel',
        price: 21999 ,
        img: "https://images.fonearena.com/blog/wp-content/uploads/2023/12/Infinix-Smart-8-HD-1024x768.jpg" 
    },

    {
        brand: 'Oppo',
        model: 'F21 Pro',
        ram: '8GB',
        rom: '128GB',
        camera: '60 megapixel',
        price: 89999 ,
        img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/f21_pro/product-image/Productimage-1920.png" 
    },

    {
        brand: 'Iphone',
        model: '13 Pro Max',
        ram: '6GB',
        rom: '1TB',
        camera: '12 megapixel',
        price: 51999 ,
        img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-1.jpg" 
    },

    {
        brand: 'Redmi',
        model: 'Note 12 Pro',
        ram: '12GB',
        rom: '256GB',
        camera: '50 megapixel',
        price: 89999 ,
        img: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-12-pro-3.jpg" 
    },

    {
        brand: 'Realme',
        model: '10 Pro',
        ram: '12GB',
        rom: '256GB',
        camera: '108 megapixel',
        price: 65999 ,
        img: "https://www.ytechb.com/wp-content/uploads/2022/11/Realme-10-Pro-Wallpapers.webp" 
    },

    {
        brand: 'Infinix',
        model: 'Hot 12',
        ram: '6GB',
        rom: '128GB',
        camera: '13 megapixel',
        price: 23999 ,
        img: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-hot12-play-1.jpg" 
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

// There I render all the following Items using "MAP()" method

function renderItems (){
    for(let i = 0; i < phones.length; i++){
        div.innerHTML += `
        <div id="card" class="card bg-secondary text-light border-light  " style="width: 18rem;">
        <img src = "${phones[i].img}"  class="" id="card-img"  > 
            <div class="card-body">
                <h5 class="card-title">${phones[i].brand +' '+ phones[i].model}</h5>
                <p class="card-text">Ram 
                ${phones[i].ram} <br> Built-in ${phones[i].rom} <br> Camera ${phones[i].camera} <br>Rs ${phones[i].price}Rs.</p>
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
  
    console.log(arr[index]);
}

function gotocart(){
    console.log('cart');
    localStorage.setItem('cartItems' , JSON.stringify(arr));
    window.location = 'cart.html';
}






// There I render only the following Items which user selected using "filter()" method
//Arrow  Function

let filtereditems = (btn) =>{
    console.log(btn);
    div.innerHTML =  "  ";
    let filtered =  phones.filter((items) => {
     return items.brand === btn.innerHTML;
      //Here start the chaining b/w filter() and map() method
    }).map((items) =>{
        div.innerHTML +=
        `<div id="card" class="card bg-secondary text-light border-light  " style="width: 18rem;">
        <img src = "${phones[items].img}" class="" id="card-img"  > 
            <div class="card-body">
                <h5 class="card-title">${phones[items].brand +' '+ phones[items].model}</h5>
                <p class="card-text">Ram 
                ${phones[items].ram} <br> Built-in ${phones[items].rom} <br> Camera ${phones[items].camera} <br>Rs ${phones[items].price}Rs.</p>
                <button onclick="addtocart(${items})" class="btn btn-primary">Add to Cart</button>
            </div>
        </div>
        `;
    });
    console.log(filtered);
};