import hrtProducts from '../data/hrt.js';
import { getCart } from '../local-storage-utils.js';
import { findById } from './utils.js';


const cartItems = getCart();
//render function
export function renderCart(cartItem){
    //console.table(cartItems);

    const hrtProduct = findById(hrtProducts, cartItem.id);
    //console.table(hrtProducts);

    const tr = document.createElement('tr');

    const nameTd = document.createElement('tr');
    nameTd.textContent = hrtProduct.name;

    const quantityTd = document.createElement('tr');
    quantityTd.textContent = cartItem.quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = hrtProduct.price.toLocaleString('en-US', { 
        style: 'currency',
        currency: 'USD',
    });

    
    const total = cartItem.quantity * hrtProduct.price;

    const totalTd = document.createElement('td');
    totalTd.textContent = total.toLocaleString('en-US', { 
        style: 'currency',
        currency: 'USD',
    });


    tr.append(nameTd, quantityTd, priceTd);
    return tr;

}
export function getCartTotal() {
    let accumulator = 0;
    // const cartItems = getCartTotal();
    for (let item of cartItems){
        const hrtProduct = findById(hrtProducts, item.id);
        
        const total = item.quantity * hrtProduct.price;

        accumulator = accumulator + total;
    }
    return accumulator;
    
}