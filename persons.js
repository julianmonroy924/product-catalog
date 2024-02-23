class persons {
    constructor(customersStore, ) {
      this.customersStore = customersStore;
    }
  
    addPerson(person = {}) {
      let store = [];
  
      store.push(person);
  
      console.log(person)
      console.log(`**Added New Customer :\n  Full Name: ${person['fullNameEl']}\n  Email: ${person['emailElement']}`);
    
    }
  }
  
  
  document.querySelector('#product-form-1').addEventListener('submit', evt => {
    evt.preventDefault();
  
    const newPerson = {
      fullNameEl: document.querySelector('#customer-name-full').value,
      emailElement: document.querySelector('#customer-email').value,
  
  
    }
  
    const personFromObj = new persons();
  
    personFromObj.addPerson(newPerson)
  });