import {useContext} from "react";
import {cartContext} from "./useCart";
import CartItem from "./CartItem";
import {ToastContainer} from "react-toastify";


export default function CartItems()
{

    const cart_data = useContext(cartContext);
    console.log('CartItems')
    let data = <>موردی یافت نشد</>
    const {cart,setCart} = cart_data
    if (typeof cart !== 'undefined')
    {
        if( !cart.hasOwnProperty('basket')) {

        }
        else {
            const myObject =cart.basket
          data =myObject.map((item, index) => (

              <div className="row rounded-3 my-5 border border-primary shadow-sm bg-secondary bg-gradient align-items-center col-md-8 mx-auto" key={item.id}>

                      <div className="col-md-2  mx-1 align-self-center" style={{fontSize:'small'}}>نام محصول : {item.name}</div>
                      <div className="col-md-2  mx-1" style={{fontSize:'small'}}>قیمت محصول : {item.price}</div>
                      <div className="col-md-1  mx-1" style={{fontSize:'small'}}>تعداد محصول :{item.quantity}</div>
                      <div className="col-md-2 mx-1" style={{fontSize:'small'}}> قیمت با تخفیف :{item.price_with_off}</div>
                      <div className="col-md-2  mx-1" style={{fontSize:'small'}}> مجموع قیمت :{item.total}</div>
                      <div className="col-md-2  me-auto" style={{fontSize:'small'}} ><CartItem id = {item.id}/></div>


              </div>
          ))
        }
        console.log('itemssss',data)
    }

    return <>
        <div className="container justify-content-center"  style={{height:'100vh'}} dir="rtl">

                {data}

   <div className='row justify-content-center' >
    <div className='col-md-2 mx-auto'>
        <button className='btn btn-lg btn-success rounded-pill'>ثبت سبد</button>
    </div>
    </div>
            <ToastContainer />
        </div>


    </>

}