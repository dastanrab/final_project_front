import {useContext, useRef} from "react";
import {authContext} from "../Auth/useAuth";
import {priceContext} from "./usePrice";
import {toast, ToastContainer} from "react-toastify";
import {post_country, post_price} from "../Helper/Helpers";
import ShowPrices from "./ShowPrices";


export default function AddPrice()
{
    const price = useRef(null)
    const data=useContext(priceContext)
    const {setPrice} = data
    const {token} = useContext(authContext);
    const add_country = ()=>{
        let data = {
            doller:price.current.value,
        }
        if (token == null)
        {
            toast.info('شما باید لاگین کنید', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            post_price(data,token,setPrice)
        }
    }
    return <>
        <div className='container my-5 ' dir='rtl'>
            <div className='row justify-content-center'>
                <div className='col-md-8 bg-light bg-gradient shadow-sm justify-content-center'>
                    <form  >
                        <div className=" col-md-4 mx-auto">
                            <label htmlFor="exampleInputEmail1" className="form-label">عنوان  برچسب قیمت</label>
                            <input ref={price} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="col-md-4 mx-auto my-2">
                            <button type="button" className="btn btn-primary" onClick={add_country}>ثبت برچسب قیمت</button>
                        </div>


                    </form>
                </div>
                <ShowPrices />
            </div>

            <ToastContainer/>
        </div>

    </>
}