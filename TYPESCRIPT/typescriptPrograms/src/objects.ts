//TypeScript automatically infers data types from values
const chai = {
    name: "Masala chai", // inferred as string
    price: 20, // inferred as number
    isHot: true // inferred as boolean
}


//Manual object type declaration
let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}


//Creating reusable custom types using type keyword
type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
}


//Extra properties are allowed when assigning bigger object to smaller type
type Cup = {
    size: string
}

let smallCup: Cup = {
    size: "200ml"
}

let bigCup = {
    size: "500ml",
    material: "steel"
}

smallCup = bigCup


//Object compatibility based on required properties
type Brew = {
    brewTime: number
}

const coffee = {
    brewTime: 5,
    beans: "Arabica"
}

const chaiBrew: Brew = coffee


//Basic custom object type
type User = {
    username: string;
    password: string
}

const u: User = {
    username: "chaicode",
    password: "123"
}


//Splitting large objects into smaller reusable types
type Item = {
    name: string,
    quantity: number
}

type Address = {
    street: string,
    pin: number
}

type Order = {
    id: string;
    items: Item[];
    address: Address;
}


//Partial<T> makes all properties optional
type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("updating chai with", updates);
}

//Only updating selected fields
updateChai({ price: 25 })

updateChai({ isHot: false })

//Empty object also valid because all fields are optional
updateChai({})


//Optional properties using ?
type ChaiOrder = {
    name?: string;
    quantity?: number
}


//Required<T> makes all optional properties mandatory
const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

placeOrder({
    name: "Masala Chai",
    quantity: 2
})


//Another custom object type
type CHAI = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}


//Pick<T, Keys> selects only specific properties from a type
type BasicChaiInfo = Pick<CHAI, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "lemon tea",
    price: 20
}


//Original type with private/internal field
type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
}


//Omit<T, Keys> removes selected properties from a type
type PublicChai = Omit<ChaiNew, "secretIngredients">;

const newChai: PublicChai = {
    name: "bobba tea",
    price: 20,
    isHot: true
}