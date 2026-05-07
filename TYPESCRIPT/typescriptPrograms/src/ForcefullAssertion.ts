//Forcefull Type assertion..................

let response: any = "42";

//Here we have done forcefull type assertion , specifying that response is string  
//These are usually done with environment variable
let numbericLength:number = (response as string).length;

type Book = {
    name:string;
};

let bookString = '{"name":"who moved my cheese"}';

//After taking data from localStorage , we have to convert it to json....
let bookObject = JSON.parse(bookString) as Book;
//if we don't do this forcefull assertion here it's not a guerentee in which datatype bookString is in.....
console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement//specifying what im giving you place only in that datatype


let value:any

value = "chai"
value = [1, 2, 3]
value = 2.5
value.toUpperCase()

let newValue: unknown

newValue = "cahi"
newValue = [1, 2, 3]
newValue = 2.5
//can't do this have to specify the datatype first in unknown
//newValue.toUpperCase()

//this will work as we are first specifying it's data type
if(typeof newValue === "string"){
    newValue.toUpperCase();
}

try{
//something..............
}catch(err){//we don't know which type of error is it, (so we can either use any or use this case....)
    if(err instanceof Error){
        console.log(err.message)
    }
    console.log("Error", err);
}


const data:unknown = "chai aur code"
const strData: string = data as string

type Role = 'admin' | 'user'

function redirectingBasedOnRole(role:Role): void{
    if(role === 'admin'){
        console.log("Redirecting to admin dashboard");
        return;
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard");
        return;
    }
    role;//Role is never in this case, means this value should not be available here
}

function neverReturn(): never{
    while(true){
        //Never return anything
    }
}