import hrtProducts from '../data/hrt.js';
import { renderProduct } from '../products/render-product.js';
import { findById } from '../cart/utils.js';
import { getCartTotal } from '../cart/render-cart.js';
//import { renderCart, getCartTotal } from '../cart/render-cart.js';

const test = QUnit.test;

test('render product function', (expect) => {
    const expected =
        '<li class="estrogen" title="pill form of estrogen"><h3>Estradiol Pills</h3><img src="../assets/../assets/estradiol-pills.png" alt="Estradiol Pills image"><p class="price">$59.00<button value="1">Add to Cart</button></p></li>';
    const actual = renderProduct(hrtProducts[0]).outerHTML;
    expect.equal(actual, expected);
});

test('findById will return the expected id', (expect) => {
    const testosteroneCypionate = [{
        id: 4,
        name: 'Testosterone Cypionate',
        img: '../assets/testosterone-cypionate.png',
        description: 'most common injectable form of testosterone',
        category: 'testosterone',
        price: 59.00,
        cost: 0.25,
    }];
    const expected = {
        id: 4,
        name: 'Testosterone Cypionate',
        img: '../assets/testosterone-cypionate.png',
        description: 'most common injectable form of testosterone',
        category: 'testosterone',
        price: 59.00,
        cost: 0.25,
    };
    const actual = findById(testosteroneCypionate, 4);
    expect.deepEqual(actual, expected);

});
const cartItems = [
    {
        id: 1,
        quantity: 2,
    },
    {
        id: 3,
        quantity: 1,
    },

];

// test('get cart total function', (expect) => {
//     const expected = 196.00;
//     const actual = getCartTotal();
//     expect.equal(actual, expected);
// });