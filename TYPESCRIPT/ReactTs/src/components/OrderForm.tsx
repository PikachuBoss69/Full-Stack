import { useState } from "react";


interface OrderFormPage{
    onSubmit(order:{name:string, cups:number}):void
}

export function OrderForm({onSubmit}: OrderFormPage){
    const [name, setName] = useState<string>("Masala");
    const [cups, setCups] = useState<number>(1);

    function handleSubmit(e:React.FormEvent<HTMLFormElement>): void{
        e.preventDefault();
        onSubmit({name, cups});
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Chai Name</label>
            <input
                value = {name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value)
                }}
            />
            <label>Cups</label>
            <input
                type="number"
                value={cups}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                    setCups(Number(e.target.value) || 0)
                }}
            />
            <button type="submit">place order</button>
        </form>
    )
}