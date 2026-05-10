function wrapInArray<T>(item:T):T[]{
    return [item]
}

wrapInArray("masala")
wrapInArray(42)
wrapInArray({flavour:"ginger"})

function getData<T>(value: T): T {
  return value
}

let result = getData("hello")
result.toUpperCase() // correct

// result.toFixed() ❌ error, Now TypeScript knows result is a string.

function pair<A, B>(a:A, b:B): [A, B]{
    return [a,b];
//    return [b,a] ...can't do these as already specified the order or return
//    return [A,B] ..wrong

}
pair("masala", 20)
pair("masala", {flavour: "ginger"})

//Generic Interface.................
interface Box<T>{
    content: T
}

const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "10"}
 
interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{flavour: string}> = {
    status: 200,
    data: {flavour: "masala"}
}
