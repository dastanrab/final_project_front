import {useContext, useRef} from "react";
import {creditContext} from "./useCredit";
import {authContext} from "../Auth/useAuth";
import {toast, ToastContainer} from "react-toastify";
import {post_credit} from "../Helper/Helpers";
import ShowCredits from "./ShowCredits";


export default function AddCredit()
{
    const date = useRef(null)
    const type = useRef(null)
    const data=useContext(creditContext)
    const {setCredit} = data
    const {token} = useContext(authContext);
    const add_country = ()=>{
        let data = {
            date:date.current.value,
            type:type.current.value
        }
        if (token == null)
        {
            toast.info('شما باید لاگین کنید', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            post_credit(data,token,setCredit)
        }
    }
    return <>
        <div className='container my-5 ' dir='rtl'>
            <div className='row justify-content-center'>
                <div className='col-md-8 bg-light bg-gradient shadow-sm justify-content-center'>
                    <form  >
                        <div className=" col-md-4 mx-auto">
                            <label htmlFor="exampleInputEmail1" className="form-label">مقدار</label>
                            <input ref={date} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="col-md-4 mx-auto ">
                            <label htmlFor="exampleInputPassword1" className="form-label">نوع مدت</label>
                            <select  ref={type} className="form-select form-select mb-3" >
                                <option selected>مدت زمان</option>
                                <option value='روز'>روز</option>
                                <option value='هفته'>هفته</option>
                                <option value='ماه'>ماه</option>
                                <option value='سال'>سال</option>
                            </select>
                        </div>
                        <div className="col-md-4 mx-auto my-2">
                            <button type="button" className="btn btn-primary" onClick={add_country}>ثبت برچسب اعتبار</button>
                        </div>


                    </form>
                </div>
                <ShowCredits />
            </div>

            <ToastContainer/>
        </div>

    </>
}