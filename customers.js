class customers{
    constructor(customersStore){
      this.customersStore = customersStore;
    }
  
    addPerson(person = {}){
      let store = [];
  
      store.push(person);
  
      console.log(person)
      console.log(`**Added New Customer : ${person['customerName']}`);
    }
  }
  
  document.querySelector('#product-form-1').addEventListener('submit', evt => {
    evt.preventDefault();
  
    const newCustomer = {
      customerName: document.querySelector('#customer-name').value,
    };
  
      const customerFromObj = new customers('customer-form');
      customerFromObj.addPerson(newCustomer);
  });