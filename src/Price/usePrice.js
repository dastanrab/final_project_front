import React, {useEffect} from "react";
import {get_countries, get_prices} from "../Helper/Helpers";
export const priceContext = React.createContext();

export function usePrice()
{
    console.log('at context')
    const [price, setPrice] = React.useState();
    useEffect(()=>{
        get_prices(setPrice)
    },[])

    return {
        price,
        setPrice
    };




}
export function PriceProvider({ children }) {
    const data = usePrice();
    console.log('at price provider')
    return <priceContext.Provider value={data}>{children}</priceContext.Provider>;
}
export default function PriceConsumer() {
    return React.useContext(priceContext);
}