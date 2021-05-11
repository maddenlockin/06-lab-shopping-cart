
export function renderProduct(products){
    const li = document.createElement('li');
    li.classList.add(products.category);
    li.title = products.description;

    const h3 = document.createElement('h3');
    h3.textContent = products.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = `../assets/${products.img}`;
    img.alt = `${products.name} image`;
    li.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `$${products.price.toFixed(2)}`; 

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = products.id;
    p.appendChild(button);
    //append btn inside p and p inside li for appropriate realtionships
    li.appendChild(p);
    return li;
}