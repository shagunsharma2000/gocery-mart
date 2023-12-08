let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let quantity = 0;

document.addEventListener('DOMContentLoaded', function() {
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    displayProductDetails(selectedProduct);
});

function displayProductDetails(product) {
    const productDetailsContainer = document.getElementById('product_details');

    const productDetails = `
        <h2>${product.title}</h2>
        <img src="${product.image}" alt="${product.title}">
        <p>Description: ${product.description}</p>
        <p>Price: $${product.price}</p>
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" value="3" min="3" max="10">
    `;

    productDetailsContainer.innerHTML = productDetails;
}

function addToCart() {
    const selectedQuantity = parseInt(document.getElementById('quantity').value);

    if (selectedQuantity < 3 || selectedQuantity > 10) {
        alert('Quantity must be between 3 and 10.');
        return;
    }

    if (quantity + selectedQuantity > 10) {
        alert('You can only add up to 10 pieces.');
        return;
    }

    quantity += selectedQuantity;

    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    const cartItem = {
        product: selectedProduct,
        quantity: selectedQuantity
    };

    cartItems.push(cartItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    updateCartCount();
    alert(`Added ${selectedQuantity} piece(s) to cart. Total quantity: ${quantity}`);
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = quantity.toString();
}

function buyNow() {
    window.location.replace('address.html');
}

function showCart() {
    const cartContainer = document.getElementById('cart');

    if (cartContainer.style.display === 'none') {
        cartContainer.style.display = 'block';
        displayCartItems();
    } else {
        cartContainer.style.display = 'none';
    }
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(cartItem => {
        const listItem = document.createElement('li');
        listItem.textContent = `${cartItem.product.title} - Quantity: ${cartItem.quantity}`;
        cartItemsContainer.appendChild(listItem);
    });
}
