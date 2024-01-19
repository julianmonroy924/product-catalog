


//1. I am defining a class to group all corresponding atributes.

// class InventoryItem {
//     constructor(ProductName, model, cost, quantity) {
        
//         this.ProductName = ProductName;
//         this.model = model;
//         this.cost = cost;
//         this.quantity = quantity;
// }
// }

//2. I am creaing an empty array to store the items.
let inventory = [];

//3. I am using a loop to promp users to inpute their data. 
while (true) {

let productName = prompt('Please enter the new product`s name. (or type `exit` to stop entering products)');

if (productName.toLowerCase() === 'exit') {
    break;
};

//4. I am gathering the next data points for the coresponding product. 
let modelName = prompt("Enter the Model Number for " + productName + ":");
let costAmount = prompt("Enter the Cost in dollars and cents (ex00.00) for " + productName + ": $");
let quantityAvailable = prompt("Enter in Kilograms the Quantity Available  for " + productName + ":");

//5. I am creating an occurence //dont really understand this part//
//  let inventoryItem = new InventoryItem(productName, modelName, costAmount, quantityAvailable);

//6. I am adding set of data objects to the inventory

    inventory.push([productName, modelName, costAmount, quantityAvailable]);
}
 //console.log(inventory);


 for (let counter = 0; counter < inventory.length; counter++ ) {
     
    console.log( inventory [counter]);

 }
  

//7. I am loging the result
// console.log(inventory [1][1]);

// //const bodyElement = document.dody;
// const arrayContainer = document.createElement("div");
// //newText.classList.add("h-screen", "flex", "justify-center", "items-center");
// inventory.forEach(item => {
//     const spanElement = document.createElement("span");

//     spanElement.className = "inline-block bg-blue-500 text-white px-2 py-1 rounded mr-2";

//     spanElement.textContent = item;

//     // Append the span element to the container
//     arrayContainer.appendChild(spanElement);
// });









// bodyElement.appendChild(newText);