let allProducts = document.querySelector(".products")
let products = [
    {
        id : 1 ,
        title :"car19" ,
        color : "black" ,
        imageUrl : "images/car19.jpg"
    },
    {
        id : 2 ,
        title :"IPhone-13" ,
        color : "black" ,
        imageUrl : "images/IPhone-13.jpg"
    },
    {
        id : 3 ,
        title :"watch32" ,
        color : "gray" ,
        imageUrl : "images/w32.jpg"
    },
    {
        id : 4 ,
        title :"oppo reno 7" ,
        color : "gray" ,
        imageUrl : "images/oppo reno 7.jpg"
    }

]

function createItem() {
    let y = products.map(item=>{
        return`
        <div class="product-item">
        <img src="${item.imageUrl}" alt="car19" class="product-item-img">
        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>the new car from BMW 2024</p>
            <span>${item.color}</span>
        </div>
        <div class="product-item-choise">
            <button class="add-cart" onClick ="addToCart(${item.id})">Add To Cart</button>
            <i class="fa-regular fa-heart"></i>
        </div>
    </div>
        `
    })
    allProducts.innerHTML = y;
}

createItem()

let badge = document.querySelector(".badge")
let cartsProductsDiv = document.querySelector(".carts_products div")

let addItem = localStorage.getItem("productInCart") ? JSON.parse(localStorage.getItem("productInCart")) : [];
if(addItem) {
    addItem.map(item => {
        cartsProductsDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addItem.length;
}


function addToCart (id) {
    if(localStorage.getItem("username")){
        let choosenProducts = products.find((item) => item.id === id);
        cartsProductsDiv.innerHTML += `<p>${choosenProducts.title}</p>`;
    
        addItem = [...addItem , choosenProducts]
        localStorage.setItem("productInCart" , JSON.stringify(addItem))
    
        let cartsProductsCounter = document.querySelectorAll(".carts_products div p");
        badge.style.display = "block";
        badge.innerHTML = cartsProductsCounter.length;
    }
    else {
        window.location = "login.html"
    }
}


let shoppingCartIcon = document.querySelector(".shopping-cart")
let cartsProducts = document.querySelector(".carts_products")

shoppingCartIcon.addEventListener("click" , openCart)
function openCart() {
    if(cartsProductsDiv.innerHTML != "") {
        if(cartsProducts.style.display == "block") {
            cartsProducts.style.display = "none"
        }
        else {
            cartsProducts.style.display = "block"
        }
    }
}

