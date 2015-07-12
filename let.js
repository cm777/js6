var a = 5;

function greet () {
    var b = 9;
}
//console.log(b); //undefined

if (a) {
    var c = 9;
}
console.log(c); //c above not scoped, so it prints
