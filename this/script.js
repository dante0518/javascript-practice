// this = reference to the object where THIS is used
// (the object depends on the immidate context)
// person.name = this.name
// DOESNT WORK WITH ARROW FUNCTIONS


const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
};

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
};

person1.eat();
person2.eat();