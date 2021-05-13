// function to loop over cart items
//import { hrtProducts } from '../products.js'
import { renderCart, getCartTotal } from './render-cart.js';
import { getCart } from '../local-storage-utils.js';

const cartItem = getCart();
const anchor = document.querySelector('tbody');
for (let item of cartItem) {
    const tableRow = renderCart(item);
    anchor.append(tableRow);
}

const total = document.getElementById('total');
const totalPrice = getCartTotal();
total.textContent = totalPrice.toLocaleString('en-US', { 
    style: 'currency', 
    currency: 'USD'
});

const checkOutButton = document.getElementById('check-out-button');
if (cartItem.length === 0){
    checkOutButton.disabled = true;
}
checkOutButton.addEventListener('click', () => {
    // make alert with cart contents
    const checkOutAlert1 = JSON.stringify(cartItem, true, 2);
    alert(`You have ${checkOutAlert1} in your cart`);
    //remove from local storage
    alert(`Ready to place your order?`);
    localStorage.clear();
    alert(`return to home page`);
});