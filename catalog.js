export class catalog {
    constructor(formName){
      this.formName = formName;
     }
      
    addProduct(product = {}) {
        let inventory = [];
        
        inventory.push(product);
    
        console.log(product);
        console.log(`**Added New Product :\n  Product Name: ${product['productName']}\n  Product Model: ${product['modelElement']}\n  Product Cost: ${product['costElement']}\n  Quantity Added: ${product['quantityElement']}  `);
      }
        
     } 
    
    document.querySelector('#product-form').addEventListener('submit', evt => {
      evt.preventDefault();
    
    const newProduct = {
      productName: document.querySelector('#product-name').value,
      modelElement: document.querySelector('#product-model').value,
      costElement: document.querySelector('#product-cost').value,
      quantityElement: document.querySelector('#product-quantity').value,
    
    };
    
      const productFromObj = new catalog('product-form');
    
      productFromObj.addProduct(newProduct);
    }); 