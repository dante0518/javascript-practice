// super = keyword is used in classes to call the constructor or acces the propertioes and methods of a parent (superclass)
// this = this object
// super = the parent

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}kmph`)
    }

}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runsSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runsSpeed);
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`)
        super.move(12);
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;  
    }
    fly(){
        console.log(`This ${this.name} can fly`)
        super.move(50);
    }
}

const rabbit = new Rabbit("Bugs Bunny", 1, 25);
const fish = new Fish("fishy", 2, 12);
const hawk = new Hawk("hawky", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runsSpeed);
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

rabbit.run();
fish.swim();
hawk.fly();
