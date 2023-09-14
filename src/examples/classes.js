
//ES5 -> Class
var Person = function() {

}


//ES6 -> Class


class Animal{
    constructor(name,year){
        this.name = name;
        this.year = year;
        console.log('Const Çalıştı.');

    }

    calculateAge(){
        return new Date().getFullYear() - this.year;
    }

    greeting(text){
        return `${text} , My name is ${this.name}`;
    }
}


// Object

const a = new Animal('Ozan',1995);
console.log(a.calculateAge());
console.log(a.greeting('SA '));
