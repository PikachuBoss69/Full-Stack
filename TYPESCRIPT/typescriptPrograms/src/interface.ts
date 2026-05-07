type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean
};

function makeChai(order: ChaiOrder){
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}

type TeaRecipe = {
    water:number;
    milk:number
}

class masalaChai implements TeaRecipe {
    water =  100;
    milk = 50;
}

interface CupSize {
    size: "small" | "large"
}
//can't do modefied typesin class , so we have to create interference for it...
class Chai implements CupSize{
    size: "small" | "large" = "small";
}

// type Response = {ok:true} | {ok: false}

// class myRes implements Response{
//..............A class can only implement an object type or intersection of object types with statically known members...............
//     ok:boolean = true;
// }


interface Response {
    res:{ ok:true} | {ok: false}

} 

class myRes implements Response{
    res: { ok: true } | { ok: false } = { ok: true };

}
//Using Types in different ways.....................

type TeaType = "masala" | "ginger" | "lemon"//Literal Types.....

function orderChai(t: TeaType){
    console.log(t);

}


type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra //& refers to that values should belong from both the types

const cup: MasalaChai = {
    teaLeaves: 2,
    masala : 1
}

type User = {
    username: string;
    bio?: string//means bio can be undefined , that's also a posibility..
}

const u1: User = {username: "Hitesh"}
const u2: User = {username: "Hitesh", bio: "hitesh.ai"}

//readOnly....................
type config = {
    readonly appName: string//can't change the value after assigning
    version: number

}

const cfg: config = {
    appName : "Masterji",
    version: 1
}

//cfg.appName = "chaicode"   ERROR