// getter = special method that makes a property readable
// setter = special method that mkaes a property writeable

// validate and modify a valune when reading/writing a property



// class Rectangle {
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth >0){
//             this._width = newWidth; // _valami _>> azt mutatja, hogy ez egy fix és nem kellene átírni a kódban senkinek
//         }
//         else{
//             console.error("Width must be a positive number")
//         }
//     }
//     set height(newHeight){
//         if(newHeight >0){
//             this._height = newHeight; 
//         }
//         else{
//             console.error("Height must be a positive number")
//         }
//     }

//     get width(){
//         return `${this._width.toFixed(1)} cm`;
//     }

//     get height(){
//         return `${this._height.toFixed(1)} cm`;
//     }

//     get area(){
//         return `${(this._width * this._height).toFixed(1)} cm^2`;
//     }
// }

// const rectangle = new Rectangle(3, 4);


// console.log(rectangle.width, rectangle.height)
// console.log(rectangle.area)



class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // we need to validate the input, so we use set ang get

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error('First name must be a non-empty string');
        }
    }
    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error('Last name must be a non-empty string');
        }
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        }
        else{
            console.error('Age name must be a number');
        }
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }
    get fullName(){
        return this._firstName + " " + this._lastName;
    }

}

const person1 = new Person("Spongebob", "Squarepants", 20);

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.fullName)