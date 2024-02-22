class person {
    constructor(formName, eMail) {
      this.formName = formName;
      this.eMail = eMail;
  
    }
  
  
    addPerson(product = {}) {
      let inventory = [];
  
      inventory.push(product);
  
      console.log(product);
      console.log(`added new ${product['productName']}`);
    }
  
  } 
  
  document.querySelector('form').addEventListener('submit', evt => {
    evt.preventDefault();
  
    const newProduct = {
      fullNameEl: document.querySelector('#full-name').value,
      eMailElement: document.querySelector('#full-eMail').value,
      
  
    }
    
    const personFromObj = new catalog('product-form');
  
    personFromObj.addPerson(newProduct)
  });