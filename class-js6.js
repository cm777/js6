class Person {
    static output() {
        console.log('static method');
    }
    
    constructor (name) {
        console.log('I am ', name);
//        this.name = name;
//        console.log('Person', this);
    }
    
    eat(){
        console.log(this.name, 'is eating');
    }
};


class Child extends Person {
    eat() {
        console.log(this.name, 'will not eat');

        super.eat();
    }
}


Person.output();

let jack = new Person('Jack');
jack.eat();

let jill = new Child('Jill');
jill.eat();
