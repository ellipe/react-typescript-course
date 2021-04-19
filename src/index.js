"use strict";
function log(str) {
    console.log(str);
}
log('some log here');
class A {
    constructor() {
        this.greetings = 'hello world';
    }
}
console.log(new A().greetings);
