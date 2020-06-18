/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
var wizard = {name: "Gandalf the Grey", age: 2000}

function sorceror(name, age){
        this.name = name
        this.age = age
}

let flamel = new sorceror('Nicholas Flamel', 1500)

class witch{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

let gelinda = new witch('Gelinda the Good', 200)

console.log(typeof(flamel))
console.log(flamel)
console.log(typeof(wizard))
console.log(wizard)
console.log(typeof(gelinda))
console.log(gelinda)