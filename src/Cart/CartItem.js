import {dec_cart, del_cart, inc_cart, useInc} from "../Helper/Helpers";
import {cartContext, useCart} from "./useCart";
import {useContext, useEffect} from "react";
import {toast, ToastContainer} from "react-toastify";
import {BsFillTrashFill} from "react-icons/bs";
import {BsFillPatchPlusFill} from  "react-icons/bs";
import {BsPatchMinusFill} from  "react-icons/bs";


export default  function CartItem(props)
{

    const cart_data = useContext(cartContext);
    console.log('fuccckkkkkk')
    console.log(cart_data)
    const {cart,setCart} = cart_data
    let find = false
    let count = 0
    const id=props.id
    const inc =(e)=>{  e.preventDefault();
        inc_cart('http://127.0.0.1:8000/api/cart/increase/'+id,setCart)
        toast.success('به سبد اضافه شد', {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    const dec =(e)=>{  e.preventDefault();
        dec_cart('http://127.0.0.1:8000/api/cart/decrement/'+id,setCart)
        toast.error('از سبد کم شد', {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    const del =(e)=>{  e.preventDefault();
        del_cart('http://127.0.0.1:8000/api/cart/delete/'+id,setCart)
        toast.error('از سبد حذف شد', {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    if (typeof cart !== 'undefined')
    {
        if( !cart.hasOwnProperty('basket')) {

        }
        else {
            const myObject =cart.basket
            Object.keys(myObject).forEach(function(key, index) {
                const inside = myObject[key]
                if (inside.id == id)
                {
                    find =true
                    count = inside.quantity
                }
            });
        }
    }


   console.log(['find status',find])

    return <>{!find ? (<button type="button" className="btn btn-success btn-group-lg btn-lg bg-gradient shadow-sm rounded-2 opacity-75" onClick={inc} >ثبت</button>) : (

        <div className="d-flex flex-row justify-content-center">
         <div className="p-1"><button type="button" className="btn btn-success" onClick={inc} ><BsFillPatchPlusFill/></button></div>
            <div className="p-1"><b>{count}</b></div>
         <div className="p-1"><button type="button" className="btn btn-success" onClick={dec} ><BsPatchMinusFill/></button></div>
            <div className="p-1">
                <button type="button" className="btn btn-danger" onClick={del}  ><BsFillTrashFill/></button>
            </div>
         </div>
     )}
        <ToastContainer /></>
}