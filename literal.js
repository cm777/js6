'use strict';

var name = 'jack';

var a = {
    name: name,
    greet: function (greeting) {
        console.log(greeting, this.name);
    }
};

a.greet('hello');