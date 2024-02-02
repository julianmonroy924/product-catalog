//1. I am creaing an empty array to store the items.
const productFormJAVA = document.querySelector('#productForm');
const clickBtnEl = document.querySelector('#click-me');
//2. I am using a loop to promp users to inpute their data for 5 items. 
//for (count = 0; count < 5; count++) {
    let inventory = [];
    let result2 = 0;

const inventoryFunction = function (event) {
    event.preventDefault();
  
    const nameElement = document.querySelector('#productName');
    const modelElement = document.querySelector('#productModelHTML');
    const costElement = document.querySelector('#productCostHTML');
    const quantityElement = document.querySelector('#productQuantityHTML');
    
    
    const newProduct = {
      productNameJS: nameElement.value,
      productModelJS: modelElement.value,
      productCostJS: costElement.value,
      productQuantityJS: quantityElement.value,
      };
  
    inventory.push(newProduct);
      //console.log(amazonCatalog);

      const newItemList = document.querySelector('#new-item-list');

      div = document.createElement('div');
      div.classList.add('mt-2', 'h-2', 'justify-center', 'items-center', "max-h-96");
      div.innerHTML = `

    <div class="bg-teal-300 p-8 w-2/3 rounded-lg max-h-96">
    
    <p class="text-xl"> *New Product Added* <br> <span class="font-bold text-red"> 
    Product Name:\t ${nameElement.value}  
    Product Model:\t ${modelElement.value}
    Product Cost:\t ${costElement.value}
    Product Quantity:\t ${quantityElement.value}
    </span> 
    </p><br>


    </div>
`

newItemList.appendChild(div);


    }
  
  productFormJAVA.addEventListener('submit', inventoryFunction); 


//console.log(` \tProduct Name\tPrice\t\tCurrency\tQuantity\tPrime`);

const browserDisplayFunction = function () {
    // event.preventDefault();

SecondCounter = 1;
ThirdCounter = 0;

console.log('Test for functionality of eventFunction2');

for(let counter of inventory){

const browserResult = document.querySelector('#product-result');
//let bodyElement = document.dody;
div = document.createElement("div");
div.classList.add("mt-2", "h-2", "justify-center", "items-center");
//divElement.textContent = ` \tProduct Name\tPrice\t\tCurrency\tQuantity\tPrime`;  
//divElement.textContent =  (`\n ${ThirdCounter += 1}. ${counter['productNameJS']}\n ${counter['productModelJS']}\n ${counter['productCostJS']}\n${counter['productQuantityJS']}\n\n\n`) ;
//divElement.textContent = `Your content here ${amazonCatalog}`;
div.innerHTML = `

<div class="bg-teal-300 p-8 w-2/3 rounded-lg">
    
    <p class="text-xl"> Product #${SecondCounter++}: <br> <span class="font-bold text-red"> 
    Product Name:\t ${counter['productNameJS']} <br> 
    Product Model:\t ${counter['productModelJS']}<br>
    Product Cost:\t ${counter['productCostJS']}<br>
    Product Quantity:\t ${counter['productQuantityJS']}
    </span> </p>

    
</div>
`




browserResult.appendChild(div);
    
  }
}
  
  clickBtnEl.addEventListener('click', () => browserDisplayFunction());

    //3. I am gathering the data points for the coresponding products.
    //let productName = prompt(`Please enter the name for product ${count + 1} of 5'. `);
    //let modelName = prompt("Enter the Model Number for " + productName + ":");
    //let costAmount = prompt("Enter the Cost in dollars and cents (ex00.00) for " + productName + ": $");
    //let quantityAvailable = prompt("Enter in Kilograms the Quantity Available  for " + productName + ":");
    
    
    //inventory.push([productName, modelName, costAmount, quantityAvailable]);
 

    //------------------This for loop can be used to replace the while loop. It does not have the exit "break"; rather the user is asked the prompts 
    //                  how ever many times the counter is allowed to run.(in this example is 2)
    // for(let counter = 2; counter > 0; counter--){
    //     // stuff that happens as long as this is true
    //      // console.log(`the counter is now: ${counter}`)
    //      // 3. Ask user for stuff? 
    //      // concept: `prompt`  < ask info from the user
    //      const productName = prompt("What is the product name?")
    //      const productModel = prompt("What is the product model number?")
    //      const productCost = prompt("What is the product cost?")
    //      const productQuantity = prompt("How many of this product?")
    //      // add the every new product to the array
    //      products.push([productName, productModel, productCost, productQuantity])
    //    }
    //-------------------

 

//5. I am displaying the array in the console utilizing a counter to go through the array. 
// for (let counter = 0; counter < inventory.length; counter++) {

//     console.log(inventory[counter]);
// }
// //6. I am displaying the array through an alert utilizing a loop and counter to go through the array.
// let result2 = 0;
// let result = 0;
// for (let counter = 0; counter < inventory.length; counter++ ) {
//     result += `\nThe catalog contains product # ${counter + 1} \nProduct Name: ${inventory[counter][0]} Model #: ${inventory[counter][1]} Cost: ${inventory[counter][2]} Quantity Added: ${inventory[counter][3]}\n `;

//     result2 += `<br>The catalog contains product # ${counter + 1} <br>Product Name: ${inventory[counter][0]} Model #: ${inventory[counter][1]} Cost: ${inventory[counter][2]} Quantity Added: ${inventory[counter][3]}\n `;
//     //alert(`The catalog contains product # ${counter + 1} `);
//     //alert(`ProductName: ${inventory[counter][0]} Model #: ${inventory[counter][1]} Cost: ${inventory[counter][2]} Quantity Added: ${inventory[counter][3]}`);
//     // alert('Model #:', inventory[counter][1]);
//     // alert('Cost:', inventory[counter][2]);
//     // alert('Quantity:', inventory[counter][3]);


// //-------------------------- This for loop is an automatic scan of all items in an array (all the products in the products?!) It replaces #6 !
//     // for(let product of products){
//      //    ---         --
//     //     console.log(`Product name: ${product[0]}`);
//     //     console.log(`Model Number: ${product[1]} `);
//     //     console.log(`Cost: $ ${product[2]}`);
//     //     console.log(`Qty in Stock: ${product[3]}`);
      
//     //     // ==== 
      
//     //     console.log("----------------");
      
//     //   }
// //-------------------------------

// // I am adding an alert with the final answer. (This is a MANUAL way to output the information)
// // alert(`The catalog contains the following item: `);
// // alert(`Product Number 1: ${inventory[counter][0]}, Model #: ${inventory[0][1]}, Cost: ${inventory[0][2]}, Quantity Available: ${inventory[0][3]} `);
// // alert(`Product Number 2: ${inventory[counter][1]}, Model #: ${inventory[1][1]}, Cost: ${inventory[1][2]}, Quantity Available: ${inventory[1][3]} `);
// // alert(`Product Number 3: ${inventory[counter][2]}, Model #: ${inventory[2][1]}, Cost: ${inventory[2][2]}, Quantity Available: ${inventory[2][3]} `);
// // alert(`Product Number 3: ${inventory[counter][3]}, Model #: ${inventory[2][1]}, Cost: ${inventory[2][2]}, Quantity Available: ${inventory[2][3]} `);


// }

// alert(result);
// // I am loging the result in the browser
// //
// let bodyElement = document.dody;
// let divElement = document.createElement("div");
// divElement.classList.add("h-screen", "flex", "justify-center", "items-center");
// divElement.textContent = `Your content here ${inventory}`;


// divElement.innerHTML = `

// <div class="bg-teal-300 p-8 w-2/3 rounded-lg">
//     <p class="text-gray-600 text-xs uppercase"> Catalog MVP by @JulianMonroy </p>
//     <p class="text-7xl"> Catalog: <span class="font-bold text-red"> ${result2} <br> 
//     </span> </p>
// </div>
// `;
// document.body.appendChild(divElement);



// const bodyElement = document.dody;
// const arrayContainer = document.createElement("div");
// newText.classList.add("h-screen", "flex", "justify-center", "items-center");
// inventory.forEach(item => {
//      const spanElement = document.createElement("span");

//      spanElement.className = "inline-block bg-blue-500 text-white px-2 py-1 rounded mr-2";

//      spanElement.textContent = item;

//      // Append the span element to the container
//      arrayContainer.appendChild(spanElement);
//  });









// bodyElement.appendChild(newText);