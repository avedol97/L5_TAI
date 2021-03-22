class  Complex{
    private real: number;
    private imagine: number;

    constructor(theReal: number,theImagine: number) {
        this.real = theReal;
        this.imagine = theImagine;
    }

    addComplex (obj2: Complex): Complex{
        return new  Complex(this.real+obj2.real,this.imagine+obj2.imagine);
    }

    substractComplex (obj2: Complex): Complex {
        return new  Complex(this.real-obj2.real,this.imagine-obj2.imagine);

    }
    moduleComplex(): number{
        return(Math.sqrt((this.real*this.real)+(this.imagine*this.imagine)));
    }

    toString(): void{
        console.log(this.real,'+',this.imagine+'i')
    }
}


let complex= new Complex(6,3);
let complex2= new Complex(2,1);


complex.toString()
let complex3 = complex.addComplex(complex2);
complex3.toString();
let complex4 = complex3.substractComplex(complex);
complex4.toString();
console.log(complex4.moduleComplex());

