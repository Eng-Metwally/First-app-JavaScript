let productInCart = localStorage.getItem("productInCart")
let allProducts = document.querySelector(".products")

if(productInCart) {
    let item = JSON.parse(productInCart)
    createproductInCart(item)
}

function createproductInCart(product) {
    let y = product.map(item=>{
        return`
        <div class="product-item">
        <img src="${item.imageUrl}" alt="car19" class="product-item-img">
        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>the new car from BMW 2024</p>
            <span>${item.color}</span>
        </div>
        <div class="product-item-choise">
            <button class="add-cart" onClick ="removeFromCart(${item.id})">Remove from Cart</button>
        </div>
    </div>
        `
    })
    allProducts.innerHTML = y
}

function removeFromCart(id) {
    let productInCart = JSON.parse(localStorage.getItem("productInCart"));

    // Find index of the product with given id
    let productIndex = productInCart.findIndex(item => item.id === id);

    if (productIndex !== -1) {
        // Remove the item from the array
        productInCart.splice(productIndex, 1);
        // Update the localStorage
        localStorage.setItem("productInCart", JSON.stringify(productInCart));
        // Update the displayed cart
        createproductInCart(productInCart);
    }
}
