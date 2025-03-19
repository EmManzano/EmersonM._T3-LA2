// Stores items in the cart (productName: { quantity, totalPrice }).
const cart = {};

// Adds a product to the cart or increases quantity if it exists.
function addToCart(productName, productPrice) {
    if (cart[productName]) {
        cart[productName].quantity += 1;
        cart[productName].totalPrice += productPrice;
    } else {
        cart[productName] = {
            quantity: 1,
            totalPrice: productPrice
        };
    }
    updateCartDisplay(); // Updates the displayed cart.
}

// Removes a product from the cart or decreases quantity.
function removeFromCart(productName, productPrice) {
    if (cart[productName] && cart[productName].quantity > 0) {
        cart[productName].quantity -= 1;
        cart[productName].totalPrice -= productPrice; 

        if (cart[productName].quantity == 0) {
            delete cart[productName];
        }
    } else {
        alert('The item is not in the cart!');
    }
    updateCartDisplay(); // Updates the displayed cart.
}

// Updates the HTML to show the current cart items.
function updateCartDisplay() {
    const cartList = document.getElementById('products');
    cartList.innerHTML = ''; // Clears the existing list.

    for (let product in cart) {
        const listItem = document.createElement('li');
        listItem.innerText = `${product} 
                            - Quantity: ${cart[product].quantity} 
                            - Total Price: Php ${cart[product].totalPrice.toFixed(2)}`;
        cartList.appendChild(listItem); // Adds the item to the list.
    }
}