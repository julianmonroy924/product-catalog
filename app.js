//1. I am creaing an empty array to store the items.
let inventory = [];

//2. I am using a loop to promp users to inpute their data and give the option to exit input. 
while (true) {

    let productName = prompt('Please enter the new product`s name. (or type `exit` to stop entering products)');

    if (productName.toLowerCase() === 'exit') {
        break;
    };

//3. I am gathering the next data points for the coresponding product. 
    let modelName = prompt("Enter the Model Number for " + productName + ":");
    let costAmount = prompt("Enter the Cost in dollars and cents (ex00.00) for " + productName + ": $");
    let quantityAvailable = prompt("Enter in Kilograms the Quantity Available  for " + productName + ":");



//4. I am adding the set of data objects to the inventory

    inventory.push([productName, modelName, costAmount, quantityAvailable]);
}


//5. I am displaying the array in the console utilizing a counter to go through the array. 
for (let counter = 0; counter < inventory.length; counter++) {

    console.log(inventory[counter]);
}
//6. I am displaying the array through an alert utilizing a loop and counter to go through the array.
for (let counter = 0; counter < inventory.length; counter++ ) {
    
    alert(`The catalog contains product # ${counter + 1} `);
    alert(`ProductName: ${inventory[counter][0]} Model #: ${inventory[counter][1]} Cost: ${inventory[counter][2]} Quantity Added:', ${inventory[counter][3]}`);
    // alert('Model #:', inventory[counter][1]);
    // alert('Cost:', inventory[counter][2]);
    // alert('Quantity:', inventory[counter][3]);


//5. I am adding an alert with the final answer
// alert(`The catalog contains the following item: `);
// alert(`Product Number 1: ${inventory[counter][0]}, Model #: ${inventory[0][1]}, Cost: ${inventory[0][2]}, Quantity Available: ${inventory[0][3]} `);
// alert(`Product Number 2: ${inventory[counter][1]}, Model #: ${inventory[1][1]}, Cost: ${inventory[1][2]}, Quantity Available: ${inventory[1][3]} `);
// alert(`Product Number 3: ${inventory[counter][2]}, Model #: ${inventory[2][1]}, Cost: ${inventory[2][2]}, Quantity Available: ${inventory[2][3]} `);
// alert(`Product Number 3: ${inventory[counter][3]}, Model #: ${inventory[2][1]}, Cost: ${inventory[2][2]}, Quantity Available: ${inventory[2][3]} `);

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