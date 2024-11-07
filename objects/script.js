// object = a collection of related properties and/or methods
// can represent real world objects (people, products, places)
// object = {key:value, function()}

const person1 = {
    fistName: "Spongebob",
    lastName: "Squarepants",
    age: 20,
    isEmployed: true,
    sayHello: function(){console.log('Hi I am Spongebob')},
    eat: function(){console.log('I am eating a Krabby Patty')},
};

const person2 = {
    fistName: "Patrick",
    lastName: "Star",
    age: 22,
    isEmployed: false,
    sayHello: () => console.log('Hi I am Patrick...'),
    eat: () => console.log('I am eating a Roast beef, chicken'),
};

console.log(person1.fistName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.fistName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();