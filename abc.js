// Sample data for products
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    // Add more products as needed
];

// Function to generate product cards
function generateProductCards() {
    const productGrid = document.querySelector('.product-grid');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        `;
        productGrid.appendChild(card);
    });
}

// Function to open the cart
function openCart() {
    const cart = document.querySelector('.cart');
    const overlay = document.querySelector('.overlay');
    cart.style.display = 'block';
    overlay.style.display = 'block';
}

// Function to close the cart
function closeCart() {
    const cart = document.querySelector('.cart');
    const overlay = document.querySelector('.overlay');
    cart.style.display = 'none';
    overlay.style.display = 'none';
}

// Function to add item to cart
function addToCart(id) {
    const product = products.find(product => product.id === id);
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');

    const itemHTML = `
        <li class="cart-item">
            <span>${product.name}</span>
            <span>$${product.price}</span>
        </li>
    `;
    cartItems.insertAdjacentHTML('beforeend', itemHTML);

    // Calculate and update total
    let total = parseFloat(cartTotal.textContent);
    total += product.price;
    cartTotal.textContent = total.toFixed(2);
}

// Event listeners
document.addEventListener('DOMContentLoaded', generateProductCards);

document.querySelector('.cart').addEventListener('click', function(event) {
    if (event.target.classList.contains('close')) {
        closeCart();
    }
});

document.querySelector('.overlay').addEventListener('click', function(event) {
    closeCart();
});

document.querySelector('.product-grid').addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        addToCart(productId);
        openCart();
    }
});
