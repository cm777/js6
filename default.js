'use strict';

function greet() {
    var name = arguments.length <= 0 || arguments[0] === undefined ? 'Jack' : arguments[0];

    console.log(name);
};

greet();
