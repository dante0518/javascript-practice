// inheritance = allows a new class to inherit properties and methtods from an existing class (parent->child)
// helps with code reusability


// "main classunk ez lesz"
class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating.`);
    };
    sleeping(){
        console.log(`This ${this.name} is sleeping.`)
    }
};

// children classes, nem kell újra, minden classba bele írni a sleeping, eating methodot

class Rabbit extends Animal {
    name = "rabbit";
    
    run(){
        console.log(`This ${this.name} is running.`)
    }
}

class Fish extends Animal {
    name = "fish"

    swim(){
        console.log(`This ${this.name} is swimming.`)
    }
}

class Hawk extends Animal {
    name = "hawk"

    fly(){
        console.log(`This ${this.name} is flying.`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleeping();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleeping();
fish.swim();

console.log(hawk.alive);
hawk.eat();
hawk.sleeping();
hawk.fly();



