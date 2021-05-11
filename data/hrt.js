    //import { renderProduct } from '../products/render-product.js';

const estradiolPills = {
    id: 1,
    name: 'Estradiol Pills',
    img: '../assets/estradiol-pills.png',
    description: 'pill form of estrogen',
    category: 'estrogen',
    price: 59.00,
    cost: 0.25,
};
const estradiolValerate = {
    id: 2,
    name: 'Estradiol Valerate',
    img: '../assets/estradiol-valerate.png',
    description: 'most common injectable form of estrogen',
    category:'estrogen',
    price: 165.00,
    cost: 0.25,
};
const spironolactone = {
    id: 3,
    name: 'Spironolactone',
    img: '../assets/spironolactone.png',
    description: 'testosterone blocker',
    category:'testosterone-blocker',
    price: 78.00,
    cost: 0.25,
};
const testosteroneCypionate = {
    id: 4,
    name: 'Testosterone Cypionate',
    img: '../assets/testosterone-cypionate.png',
    description: 'most common injectable form of testosterone',
    category: 'testosterone',
    price: 59.00,
    cost: 0.25,
};
const testosteroneGelPump = {
    id: 5,
    name: 'Testosterone Gel Pump',
    img: '../assets/testosterone-gel-pump.png',
    description: 'transdermal topical gel form of testosterone',
    category: 'testosterone',
    price: 59.00,
    cost: 0.25,
};
const hrtProducts = [
    estradiolPills,
    estradiolValerate,
    spironolactone,
    testosteroneCypionate,
    testosteroneGelPump,
];
export default hrtProducts;