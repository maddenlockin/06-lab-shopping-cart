import { findById } from './cart/utils.js';

const buyIt = 'buyIt';

export function getCart(){
    //get stringify cart from local storage to start
    const stringCart = localStorage.getItem(buyIt);
    const parseCart = JSON.parse(stringCart);
    //wait... does the cart even exist? is it empty?
    //intro truthiness and falseiness
    if (parseCart){
         // turn string into useable array // return real cart
        return JSON.parse(stringCart);
    } else {
        //if it doesnt exist, make an empty cart(an empty array) to start!
        return [];
    }
}

export function setCart(cartArray){
    const stringCart = JSON.stringify(cartArray);
    localStorage.setItem(buyIt, stringCart);
}

export function addToCart(productId){
    const cart = getCart();
    const cartItem = findById(cart, productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        const newItem = {
            id: productId,
            quantity: 1,
        };
        cart.push(newItem);
    }
    setCart(cart);
}
