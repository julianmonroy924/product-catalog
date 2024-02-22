## Goal

 Develop the Minimum Viable Product (MVP) for a product catalog. This catalog allows a user to add a product's name, model, cost and quantity to the inventory. The maximum items they can add is 5.

    **Improve on your product catalog to allow users do the following:

    1. The products are stored with objects literals inside the arrays
    2. Instead of using the prompt, you will allow them input the product info directly from the browser (hint: use querySelector and form event listener)
    3. Show all the products they entered in the browser (hint: use a for..of loop) 

HTML Prompt

Write an HTML page with a form that has 4 inputs.
- The first input will be a Products Name of type text.
- The second input will be a Model Number of type text.
- The third input will be a Cost of type price text.
- The fourth input will be a Quantity of type text. 
- Include a submit button with the value "Add Employee"
    -The submit button must only work when all the form inputs have a value inside of them.
    -


I will style this page with tailwind, include relevant tailwind css with the form justified in the center. Bellow the form; a field should be created to display the list of the items inpute.

V3.0
Improve on your product catalog app to introduce classes/objects to break the code into smaller pieces. For a Product Catalog, the classes/objects involved are:

Product (representing an individual product)
properties: name, price, currency
methods: show the name of the products, show the price
Catalog (representing a store of several products)
properties: productStore
methods: add a product
Person (a person buying a product)
properties: firstName, lastName, email
methods: get a person’s full name, get a person’s email
Customers (all persons shopper)
properties: customersStore
methods: add a person as customer to the customerStore, show all customers
