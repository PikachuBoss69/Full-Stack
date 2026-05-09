"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeChai(order) {
    console.log(order);
}
function serveChai(order) {
    console.log(order);
}
class masalaChai {
    water = 100;
    milk = 50;
}
//can't do modefied typesin class , so we have to create interference for it...
class Chai {
    size = "small";
}
class myRes {
    res = { ok: true };
}
function orderChai(t) {
    console.log(t);
}
const cup = {
    teaLeaves: 2,
    masala: 1
};
const u1 = { username: "Hitesh" };
const u2 = { username: "Hitesh", bio: "hitesh.ai" };
const cfg = {
    appName: "Masterji",
    version: 1
};
//cfg.appName = "chaicode"   ERROR
//# sourceMappingURL=interface.js.map