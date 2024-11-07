// nested object = objects inside of other objects
// Person{Address{}, ContactInfo{}} 
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// child obj is enclosed by a parent obj


// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address: {
//         street: "123 Conch St.",
//         city: "Bikini Bottom",
//         country: "International Waters"
//     }
// }

// console.log(person.fullName, person.age, person.isStudent, person.hobbies[1]);
// console.log(person.address.city, person.address.street, person.address.country);

// for(const property in person.address){
//     console.log(person.address[property]);
// }



class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "123 Conch st", "Bikini bottom", "Int waters");
const person2 = new Person("Patrick", 32, "121 Conch St", "Int Waters");
const person3 = new Person("SQuidwards", 36, "122 Conch St", "Int Waters");

console.log(person1.address.city);