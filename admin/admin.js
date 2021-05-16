const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    //default is the auto fill query parameters in the url

    const data = new FormData(form);
    // console.log(data.get('name'));
    // console.log(data.get('id'));
    // console.log(data.get('price'));
    // console.log(data.get('category'));

    const product = {
        name: data.get('name'),
        id: data.get('id'),
        price: data.get('price'),
        category: data.get('category'),
    };
    // console.log(product);
    
    // const stringProduct = localStorage.getItem('products');
    // const parseProduct = JSON.parse(stringProduct);
    // parseProduct.push(product);
    // console.log(parseProduct);
});