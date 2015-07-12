function greetDefault(name='Jack') {
    console.log(name);
};
greetDefault();


function greetRest(name, ...other) {
    console.log(name, other.join(' '));
};
greetRest('Zoidberg', 'Fry', 'Leila');


function greetSpread(a, b) {
    console.log(a, b);
};
let names = ['Zoidberg', 'Fry', 'Leela'];
greetSpread(...names);
