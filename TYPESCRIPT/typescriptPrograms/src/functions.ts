function makeChai(type: string, cups: number) {

    //Function parameters with predefined data types
    console.log(`making ${cups} of ${type}`)
}

makeChai("masala", 2);


//Function return type declaration
function getChaiPrice(): number {

    return 25;
}


//Union return type -> function can return string or null
function makeOrder(order: string): string | null {

    //If no order exists return null
    if(!order) return null

    return order
}


//When there is nothing to return
function logChai(): void{

    //void means function does not return anything
    console.log("chai is ready")
}


//Optional.........a
function orderChai(type?: string){

    //Optional parameters are marked using ?
    //these optional are written at last in parameters...

    //Something
}


//Default parameter value
function OderChai(type: string = "Masal chai"){

    //If no value is passed default value will be used

    //something
}


//For mltiple parameters can either pre-declare types or just write them in paramters section... 
function createchai(order: {

    //Object type directly inside parameter
    type: string,

    sugar: number,

    //Literal types restrict values to fixed options
    size: "samll" | "large",

}): number{

    return 4;
}


//Creating reusable custom type
type Order ={

    type: string,

    sugar: number,

    size: "samll" | "large",
}


//Using predefined custom type in function parameter
function Createchai(order: Order): number{

    return 4;
}