import { addToCart } from '../local-storage-utils.js';

export function renderProduct(product){
    const li = document.createElement('li');
    li.classList.add(product.category);
    li.title = product.description;

    const h3 = document.createElement('h3');
    h3.textContent = product.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = `../assets/${product.img}`;
    img.alt = `${product.name} image`;
    li.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `$${product.price.toFixed(2)}`; 

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    
    button.addEventListener('click', () => {
        addToCart(product.id);
    });
    button.value = product.id;
    p.appendChild(button);
    //append btn inside p and p inside li for appropriate realtionships
    li.appendChild(p);
    return li;
}