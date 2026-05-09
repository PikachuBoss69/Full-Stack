"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TypeScript automatically infers data types from values
const chai = {
    name: "Masala chai", // inferred as string
    price: 20, // inferred as number
    isHot: true // inferred as boolean
};
//Manual object type declaration
let tea;
tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
};
const adrakChai = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
};
let smallCup = {
    size: "200ml"
};
let bigCup = {
    size: "500ml",
    material: "steel"
};
smallCup = bigCup;
const coffee = {
    brewTime: 5,
    beans: "Arabica"
};
const chaiBrew = coffee;
const u = {
    username: "chaicode",
    password: "123"
};
const updateChai = (updates) => {
    console.log("updating chai with", updates);
};
//Only updating selected fields
updateChai({ price: 25 });
updateChai({ isHot: false });
//Empty object also valid because all fields are optional
updateChai({});
//Required<T> makes all optional properties mandatory
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "Masala Chai",
    quantity: 2
});
const chaiInfo = {
    name: "lemon tea",
    price: 20
};
const newChai = {
    name: "bobba tea",
    price: 20,
    isHot: true
};
//# sourceMappingURL=objects.js.map