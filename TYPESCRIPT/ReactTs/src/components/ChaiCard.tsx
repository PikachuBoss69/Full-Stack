
interface ChaiCardProp{
    name: string;
    price: number;
    isSpecial?: boolean;
}

function ChaiCard({name, price, isSpecial = false}: ChaiCardProp){
    return(
        <article>
            <h2>
                {name} {isSpecial && <span>kiss</span>}
            </h2>
            <p>{price}</p>
        </article>
    );
}

export default ChaiCard;