class chai {
    flavour: string;
    price: number;

    constructor(flovour: string, price: number){
        this.flavour = flovour;
        this.price = price;
        console.log(this)//this refers to values of flavour and price
    }
}

const masalaChai = new chai("ginger", 20);
masalaChai.flavour = 'masala';
console.log(masalaChai.flavour)//masala

//ACCESS MODIFIERS....................

class Chai {
    public flavour: string = "masala"

    private secretIngredients = "cardimon"

    reveal(){//private modifiers can only be accessed by this method
        return this.secretIngredients
    }

    protected shopName = "Chai Corner";//Access extends to within class adn inhered class only
}

const c = new Chai();
console.log(c.reveal())//cardimon

class shopname extends Chai{
    getName(){
        return this.shopName;//As you can see we can access protected variable in another inhereted class
    }
}

class Wallet {
    #balance = 20;//JS way of assigning private variables

    getBalance(){
        return this.#balance
    }
}

const w = new Wallet
console.log(w.getBalance());//20

class Cup {
    readonly capacity: number = 340//can only be assigned once then can't be changed

    constructor(capacity: number){
        this.capacity = capacity
    }
}

//Getter and Setter..................
class ModernChai {
    private _sugar = 2;

    get sugar(){
        return this._sugar;
    }

    set sugar(value: number){
        if(value > 5) throw new Error("Too Sweet");
        this._sugar = value
    }
}

const s = new ModernChai();
s.sugar = 3;
console.log(s.sugar)

//static creates ONE shared property for the entire class.

class EkChai {
    static shopName = "Chaicode caffe"

    constructor(public flavour: string){}
}

console.log(EkChai.shopName);//we can access static variables and functions by class name no need to create objects for them

//Abstract classes................

abstract class Drink{
    abstract make():void;
}

class MyChai extends Drink{
    make(){
        console.log("Brewing chai");
    }
}

//Composition...............

class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}