import {useContext, useRef, useState} from "react";
import {authContext} from "../Auth/useAuth";
import {post_product} from "../Helper/Helpers";
import {toast, ToastContainer} from "react-toastify";
import TagSelectBox from "../Tag/TagSelectBox";
import PriceSelectBox from "../Price/PriceSelectBox";
import CreditSelectBox from "../Credit/CreditSelectBox";
import {productContext} from "./useProduct";
import ShowProducts from "./ShowProducts";


export default function AddProduct()
{
    //const {product,setProduct} = useContext(productContext)
    const [flag,setFlag]=useState(false)
    const p_name = useRef()
    const price =useRef()
    const tag_id= useRef()
    const price_id =useRef()
    const credit_id = useRef()
    const code = useRef()
    const {token} = useContext(authContext);
    const add_product = ()=>{
        let data = {
            code:code.current.value,
            credit_id:credit_id.current.value,
            p_name:p_name.current.value,
            price:price.current.value,
            tag_id:tag_id.current.value,
            price_id:price_id.current.value

        }
        if (token == null)
        {
            toast.info('شما باید لاگین کنید', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            post_product(data,token,setFlag,flag)
        }
    }

    return <>
        <div className="row g-3">
            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">نام محصول</label>
                <input ref={p_name} type="text" placeholder='نام محصول' className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputPassword4" className="form-label">قیمت محصول</label>
                <input ref={price} type="text" className="form-control" placeholder='قیمت محصول' id="inputPassword4"/>
            </div>
            <div className="col-2">
                <label htmlFor="inputState" className="form-label">دسته بندی</label>
                <select id="inputState" className="form-select" ref={tag_id}>
                    <option selected style={{fontSize:'small'}}>دسته بندی را انتخاب کنید</option>
                    <TagSelectBox/>
                </select>
            </div>
            <div className="col-2">
                <label htmlFor="inputState" className="form-label">برچسب قیمت</label>
                <select ref={price_id} id="inputState" className="form-select">
                    <option selected>برچسب قیمت را انتخاب کنید</option>
                    <PriceSelectBox/>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputState" className="form-label">برچسب اعتبار</label>
                <select ref={credit_id} id="inputState" className="form-select">
                    <option selected>برچسب اعتبار را انتخاب کنید</option>
                   <CreditSelectBox/>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputPassword4" className="form-label">کد محصول</label>
                <input ref={code} type="text" className="form-control" placeholder='کد محصول' id="inputPassword4"/>
            </div>


            <div className="col-2">
                <button type="button" onClick={add_product} className="btn btn-primary">ثبت</button>
            </div>
            <ShowProducts flag={flag}/>
            <ToastContainer/>
        </div>
    </>
}