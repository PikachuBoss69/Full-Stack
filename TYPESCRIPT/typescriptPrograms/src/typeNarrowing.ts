  function getchai(kind: string | number){
    if(typeof kind === "string"){
        return `Making ${kind} chai....`;
    }

    return `Chai order : ${kind}`;
  }

  //Exhaustive Checks...............

  function serveChai(msg?: string){
    if(msg){
        return `serving ${msg}`;
    }
    return `Serving default masola chai`;
  }

  function orderchai(size: "small" | "medium" | "larger" |number){
    if(size === "small"){
        return `small cutting chai`;
    }
    if(size === "medium" || size === "larger"){
        return `make extra chai`;
    }

    return ` chai order #${size}`;

  }
   
  class Kulhadchai{
    serve(){
        return `serving kulhad chai`;
    }
  }

  class Cuttingchai{
    server(){
        return `serving cutting chai`;
    }
  }

  function serve(chai: Kulhadchai | Cuttingchai) {
    if(chai instanceof Kulhadchai){
        return chai.serve();
    }
  }

  //Creating your Own Types..................

  type ChaiOrder = {
    type:string
    sugar:number
  }

  function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
  }

  function serveOrder(item:ChaiOrder |string){
    if(isChaiOrder(item)){
        return `serving ${item.type} chai with sugar ${item.sugar}`;
    }
    return `Serving chai ${item}`;
  }

  //Interesting way of defining types.............................

  type MasalaChai = {
    type: "masala";
    spicelevel: number
  }

  type GingerChai = {
    type: "ginger";
    amount: number
  }

  type ElaichiChai = {
    type: "elaichi";
    aroma: number
  }

  type Chai = MasalaChai | GingerChai | ElaichiChai;

  function MakeChai(order: Chai){
    switch(order.type){
        case "masala":
            return `Masala Chai`
            break;
        case "ginger":
            return `Ginger Chai`
            break;
        case "elaichi":
            return `Elaichi Chai`
            break;    
    }
  }

  function brew(order: MasalaChai | GingerChai){
    if("spicelevel" in order){
        // Operation
    }
  }

  //Unknown is better prefered then any 
//   function isStringArray(arr: unknown): arr is string{
//     if(arr === "string"){

//     }
//   }
