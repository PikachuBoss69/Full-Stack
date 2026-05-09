"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getchai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai....`;
    }
    return `Chai order : ${kind}`;
}
//Exhaustive Checks...............
function serveChai(msg) {
    if (msg) {
        return `serving ${msg}`;
    }
    return `Serving default masola chai`;
}
function orderchai(size) {
    if (size === "small") {
        return `small cutting chai`;
    }
    if (size === "medium" || size === "larger") {
        return `make extra chai`;
    }
    return ` chai order #${size}`;
}
class Kulhadchai {
    serve() {
        return `serving kulhad chai`;
    }
}
class Cuttingchai {
    server() {
        return `serving cutting chai`;
    }
}
function serve(chai) {
    if (chai instanceof Kulhadchai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `serving ${item.type} chai with sugar ${item.sugar}`;
    }
    return `Serving chai ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`;
            break;
        case "ginger":
            return `Ginger Chai`;
            break;
        case "elaichi":
            return `Elaichi Chai`;
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        // Operation
    }
}
//Unknown is better prefered then any 
//   function isStringArray(arr: unknown): arr is string{
//     if(arr === "string"){
//     }
//   }
//# sourceMappingURL=typeNarrowing.js.map