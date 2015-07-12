let name = 'jack';

let a = {
    name,
    greet (greeting) {
        console.log(greeting, this.name);
    }
};

a.greet('hello');
