"use strict";
//UNIONS
Object.defineProperty(exports, "__esModule", { value: true });
let num = 1;
let apiRequestApi = 'pending';
let airlineseat = 'aisle';
airlineseat = 'middle';
//ANY
const orders = ['12', '20', '30', '98'];
let currentOrder; //data type any
for (let order of orders) {
    if (order === "20") {
        currentOrder = order;
        break;
    }
    currentOrder = "11";
}
console.log(currentOrder);
// --------------------------------------------------------
let myOrder; //used undefined to handle problem at line 39 , read that comment...
for (let order of orders) {
    if (order === "20") {
        myOrder = order;
        break;
    }
    myOrder = "11";
}
console.log(myOrder);
// it's not a guerantee that myOrder will be assigned or not it could not be assigned that's also an edge case
//# sourceMappingURL=unionAndAny.js.map