import React, {useEffect} from "react";
import { get_products} from "../Helper/Helpers";
import {logDOM} from "@testing-library/react";
export const productContext = React.createContext();

export function useProduct()
{
    console.log('at context product')
    const [product, setProduct] = React.useState();
    useEffect(()=>{
        get_products(setProduct)
    },[])
   console.log('context',product)
    return {
        product,
        setProduct
    };




}
export function ProductProvider({ children }) {
    const data = useProduct();
    console.log('at tag provider',data)
    return <productContext.Provider value={data}>{children}</productContext.Provider>;
}
export default function ProductConsumer() {
    return React.useContext(productContext);
}