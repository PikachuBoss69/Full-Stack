"use strict";
//ARRAY.....................
Object.defineProperty(exports, "__esModule", { value: true });
//Two types of initializing an array
const chaiFlavours = ["Masala", "Adrak"];
const chaiPrice = [10, 20, 30];
const rating = [4.5, 5.0];
const menu = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 25 }
];
const cities = ["delhi", "jaipur"];
// cities.push("pune"); can't do this as it's on readonly currently
//two dimentional....
const table = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
];
//TUPLES..............................
let chaiTuple;
// cahiTuple = [20, "masala"] cna't do that tuple follow sequence
chaiTuple = ["Masala", 20];
let userInfo; //means boolean is optional
userInfo = ["harsh", 100];
userInfo = ["ramesh", 200, true];
const location = [28.6, 32.9];
const chaiitems = ["Masala", 30];
//ENUM....................................
var cupSize;
(function (cupSize) {
    cupSize[cupSize["SMALL"] = 0] = "SMALL";
    cupSize[cupSize["MEDIUM"] = 1] = "MEDIUM";
    cupSize[cupSize["LARGE"] = 2] = "LARGE";
})(cupSize || (cupSize = {}));
const size = cupSize.LARGE;
//Automatic behaviour of enums if some values are passed
var status;
(function (status) {
    status[status["PENDING"] = 100] = "PENDING";
    status[status["SERVED"] = 101] = "SERVED";
    status[status["CANCELLED"] = 102] = "CANCELLED"; //102
})(status || (status = {}));
var chaiType;
(function (chaiType) {
    chaiType["MASALA"] = "masala";
    chaiType["GINGER"] = "ginger";
})(chaiType || (chaiType = {}));
function makeChai(type) {
    console.log(`Making :${type}`);
}
makeChai(chaiType.GINGER);
//makeChai("masala")this is wrong now as it required enum now
var RandomEnum;
(function (RandomEnum) {
    RandomEnum[RandomEnum["ID"] = 1] = "ID";
    RandomEnum["NAME"] = "chai";
})(RandomEnum || (RandomEnum = {})); //this is valid but not standarized by community and industry , if possible only use ine data type
var Sugars;
(function (Sugars) {
    Sugars[Sugars["LOW"] = 1] = "LOW";
    Sugars[Sugars["MEDIUM"] = 2] = "MEDIUM";
    Sugars[Sugars["HIGH"] = 3] = "HIGH";
})(Sugars || (Sugars = {}));
let t = ["chai", 10];
t.push("extra"); //at the end of teh day it's array so we can push values but not standard practise to do so..
//# sourceMappingURL=Array_Tuples_enum.js.map