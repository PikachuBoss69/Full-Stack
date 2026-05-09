"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class chai {
    flavour;
    price;
    constructor(flovour, price) {
        this.flavour = flovour;
        this.price = price;
        console.log(this); //this refers to values of flavour and price
    }
}
const masalaChai = new chai("ginger", 20);
masalaChai.flavour = 'masala';
console.log(masalaChai.flavour); //masala
//ACCESS MODIFIERS....................
class Chai {
    flavour = "masala";
    secretIngredients = "cardimon";
    reveal() {
        return this.secretIngredients;
    }
}
const c = new Chai();
console.log(c.reveal());
//# sourceMappingURL=oop.js.map