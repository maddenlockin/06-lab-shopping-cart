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
    alert('You purchased:\n' + JSON.stringify(cartItem, true, 2));
    //remove from local storage
    localStorage.clear();
    window.location = '../';

});