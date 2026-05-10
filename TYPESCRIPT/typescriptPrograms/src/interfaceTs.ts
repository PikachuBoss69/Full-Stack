//Interface is mainly used in Api/classes/oop architecture ,where type is more broader than interface as we can do union , tuples and all the other things in types


interface Chai{
    flavour:string;
    price: number;
    milk?: boolean;
}

const masalaChai:Chai = {
    flavour: "masala",
    price: 30
}

interface Shop {
    readonly id: number;
    name: string;
}

const s: Shop = {id: 1, name: "Chocolate caffe"}
//s.id = 2 ...wrong as id is readonly

interface discountCalculate{
    (price: number):number
}

const apply50: discountCalculate = (p)=> p*0.5

interface teaMachine {
    start():void;
    stop():void
}

const machine: teaMachine = {
    start(){
        console.log("start")
    },
    stop() {
        console.log("stop")
    },
}

//Index signature......................

//Used when you don't know property names beforehand but know their value types.
interface ChaiRating {
    [flavour: string]: number
}

const rating: ChaiRating = {
    masala: 4.5,
    ginger: 4.5,
    //cardimon:"4.5" ..wrong as we have previously gave it 
}

//Interface Merging....................
//ex-1 ------------
interface User {
    name: string
}

interface User {
    age: number
}

const u: User = {
    name:"subodh",
    age:21
}

//ex-2 ------------
interface A {a:string}
interface B {b:string}

interface C extends A,B{}

