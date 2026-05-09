"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeChai(type, cups) {
    //Function parameters with predefined data types
    console.log(`making ${cups} of ${type}`);
}
makeChai("masala", 2);
//Function return type declaration
function getChaiPrice() {
    return 25;
}
//Union return type -> function can return string or null
function makeOrder(order) {
    //If no order exists return null
    if (!order)
        return null;
    return order;
}
//When there is nothing to return
function logChai() {
    //void means function does not return anything
    console.log("chai is ready");
}
//Optional.........a
function orderChai(type) {
    //Optional parameters are marked using ?
    //these optional are written at last in parameters...
    //Something
}
//Default parameter value
function OderChai(type = "Masal chai") {
    //If no value is passed default value will be used
    //something
}
//For mltiple parameters can either pre-declare types or just write them in paramters section... 
function createchai(order) {
    return 4;
}
//Using predefined custom type in function parameter
function Createchai(order) {
    return 4;
}
//# sourceMappingURL=functions.js.map