"use strict";
class Complex {
    constructor(theReal, theImagine) {
        this.real = theReal;
        this.imagine = theImagine;
    }
    addComplex(obj2) {
        return new Complex(this.real + obj2.real, this.imagine + obj2.imagine);
    }
    substractComplex(obj2) {
        return new Complex(this.real - obj2.real, this.imagine - obj2.imagine);
    }
    moduleComplex() {
        return (Math.sqrt((this.real * this.real) + (this.imagine * this.imagine)));
    }
    toString() {
        console.log(this.real, '+', this.imagine + 'i');
    }
}
let complex = new Complex(6, 3);
let complex2 = new Complex(2, 1);
complex.toString();
let complex3 = complex.addComplex(complex2);
complex3.toString();
let complex4 = complex3.substractComplex(complex);
complex4.toString();
console.log(complex4.moduleComplex());
