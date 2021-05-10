
import products from '../data/hrt.js';
import { renderProduct } from './render-product.js';

console.log(products);

const ul = document.getElementById('hrt-products');

// we want to loop through each fruit in fruits
// render the fruit using renderFruit ffunction
// and append the rendered fruit to the ul element

for (const product of products){
    const el = renderProduct(product);
    
    console.log(el);
    // el is the li element 
    ul.appendChild(el);
}