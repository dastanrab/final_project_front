import {useContext, useEffect} from "react";
import {priceContext} from "./usePrice";

export default function PriceSelectBox()
{


    const {price} = useContext(priceContext);
    console.log('at show tag select box')

    let result=<></>
    if (typeof price != 'undefined')
    {
        result = price.map((price) => {

            return (
                <option key={price.id} value={price.id}>{price.doller}</option>
            );
        })
    }
    return <>
        {result}
    </>
}