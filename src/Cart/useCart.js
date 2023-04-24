import React, {useEffect} from "react";
import axios from "axios";
export const cartContext = React.createContext();

export function useCart()
{
    console.log('at context')
    const [cart, setCart] = React.useState();
    const [cartTotal,setCartTotal]=React.useState(0);
    useEffect(()=>{
        axios
            .get('http://127.0.0.1:8000/api/cart/show')
            .then((response) => {
                console.log(response.data.data)
                setCart(response.data.data);


            })
            .catch((error) => {
                console.log(error);
            });
    },[])
    console.log(cart)
    return {
        cart,
        setCart,
        cartTotal,
        setCartTotal
    };




}
export function CartProvider({ children }) {
    const cart_data = useCart();
    console.log('at provider')
    return <cartContext.Provider value={cart_data}>{children}</cartContext.Provider>;
}
export default function CartConsumer() {
    return React.useContext(cartContext);
}