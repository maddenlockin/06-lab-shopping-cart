import hrtProducts from '../data/hrt.js';
import { renderProduct } from '../products/render-product.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 	
    '<li class="estrogen" title="pill form of estrogen"><h3>Estradiol Pills</h3><img src="../assets/../assets/estradiol-pills.png" alt="Estradiol Pills image"><p class="price">$59.00<button value="1">Add to Cart</button></p></li>';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(hrtProducts[0]).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
