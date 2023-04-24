import {useContext} from "react";
import {cartContext} from "./useCart";
import CartItem from "./CartItem";


export default function CheckCart(props){
   console.log('at check cart')
     const cart_data = useContext(cartContext);
    return cart_data?(<><CartItem id = {props.id} cart_data ={cart_data}/>
    </>):(<>not ok</>)
}