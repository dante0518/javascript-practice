//  class = ES6 feature provides a more structured and cleaner way to work with objects, compared to constructior functions
//  static keywords, encapsulation, inheritance


class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
};

const salesTax = 0.27

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.99);
const product3 = new Product("Jacket", 100.50);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product3.calculateTotal(salesTax);
console.log(`Total price incl tax: $${total.toFixed(2)}`)