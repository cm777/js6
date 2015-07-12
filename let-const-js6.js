let a = 5;

function greet () {
    let b = 9;
}
//console.log(b); //undefined

if (a) {
    let c = 9;
}
//console.log(c); //undefined

const d = 3.14;
console.log(d);

//d = 5; //error - readonly
