// function to loop over cart items
//import { hrtProducts } from '../products.js'
import { renderCart, getCartTotal } from './render-cart.js';
import { getCart } from '../local-storage.js';

const cartItems = getCart();
const anchor = document.querySelector('tbody');
for (let item of cartItems) {
    const tableRow = renderCart(item);
    anchor.append(tableRow);
}

const total = document.getElementById('total');
const totalPrice = getCartTotal();
total.textContent = totalPrice.toLocaleString('en-US', { 
    style: 'currency', 
    currency: 'USD'
});

