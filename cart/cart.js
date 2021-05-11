// function to loop over cart items
//import { hrtProducts } from '../products.js'
import { renderCartItem, getCartTotal } from './render-cart.js';
import { cartItems } from './cart-items.js';

const anchor = document.querySelector('tbody');
for (let item of cartItems) {
    const tableRow = renderCartItem(item);
    anchor.append(tableRow);
}

const total = document.getElementById('total');
const totalPrice = getCartTotal();
totalPrice.textContent = totalPrice.toLocaleString('en-US', { 
    style: 'currency', 
    currency: 'USD'
});

