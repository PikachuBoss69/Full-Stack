//ARRAY.....................

//Two types of initializing an array
const  chaiFlavours: string[] = ["Masala", "Adrak"];

const chaiPrice: number[] = [10, 20, 30];

const rating: Array<number> = [4.5, 5.0];

//Array of objects..........
type chai ={
    name: string;
    price: number;
}
const menu: chai[] = [
    {name: "Masala", price: 15},
    {name: "Adrak", price: 25}
]

const cities: readonly string[] = ["delhi", "jaipur"]
// cities.push("pune"); can't do this as it's on readonly currently

//two dimentional....
const table: number[][] = [
    [1,2,3,4],
    [5,6,7,8]
]

//TUPLES..............................

let chaiTuple: [string, number];
// cahiTuple = [20, "masala"] cna't do that tuple follow sequence
chaiTuple = ["Masala", 20]

let userInfo: [string, number, boolean?]//means boolean is optional
userInfo = ["harsh", 100]
userInfo = ["ramesh", 200, true]

const location: readonly [number, number] = [28.6, 32.9];

const chaiitems: [name: string, price: number] = ["Masala", 30];

//ENUM....................................

enum cupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = cupSize.LARGE

//Automatic behaviour of enums if some values are passed
enum status{
    PENDING = 100,
    SERVED,//101
    CANCELLED//102
}

enum chaiType {
    MASALA = 'masala',
    GINGER = 'ginger'
}

function makeChai(type: chaiType){
    console.log(`Making :${type}`);

}
makeChai(chaiType.GINGER);
//makeChai("masala")this is wrong now as it required enum now

enum RandomEnum {
    ID = 1,
    NAME = 'chai'
}//this is valid but not standarized by community and industry , if possible only use ine data type

const enum Sugars {//can also use const , but const is predifiend in enum so it's optional
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

let t: [string, number] = ["chai", 10]
t.push("extra")//at the end of teh day it's array so we can push values but not standard practise to do so..