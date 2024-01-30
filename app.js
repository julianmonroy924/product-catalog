//1. I am creaing an empty array to store the items.
const productFormJAVA = document.querySelector('#productForm');
//2. I am using a loop to promp users to inpute their data for 5 items. 
//for (count = 0; count < 5; count++) {
    let inventory = [];
    let result2 = 0;

const eventFunction = function (event) {
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
    console.log(`\n*New Product Added*  Product Name: ${nameElement.value} Model: ${modelElement.value} Currency: ${currencyElement.value} Quantity: ${quantityElement.value}\n `);
  }
  
  productFormJAVA.addEventListener('submit', eventFunction); 

  const eventFunction2 = function (event) {
    // event.preventDefault();

//console.log(` \tProduct Name\tPrice\t\tCurrency\tQuantity\tPrime`);
SecondCounter = 1;
ThirdCounter = 0;

for(let counter of inventory){

const browserResultJAVA = document.querySelector('#productResultHTML');
//let bodyElement = document.dody;
let divElement = document.createElement("div");
divElement.classList.add("mt-2", "h-2", "justify-center", "items-center");
//divElement.textContent = ` \tProduct Name\tPrice\t\tCurrency\tQuantity\tPrime`;  
divElement.textContent =  `\n ${ThirdCounter += 1}. ${counter['productNameJS']}\n ${counter['productModelJS']}\n ${counter['productCostJS']}\n${counter['productQuantityJS']}\n\n\n`;
//divElement.textContent = `Your content here ${amazonCatalog}`;

browserResultJAVA.appendChild(divElement)
    
  }
}

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