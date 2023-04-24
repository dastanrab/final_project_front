import {useContext, useRef, useState} from "react";
import {authContext} from "../Auth/useAuth";
import {toast, ToastContainer} from "react-toastify";
import {post_country} from "../Helper/Helpers";
import CountrySelectBox from "./CountrySelectBox";
import ShowCountries from "./ShowCountries";
import {countryContext} from "./useCountry";

export default function AddCountry()
{
  const country_name = useRef(null)
  const country_code = useRef(null)
  // const [flag, setFlag] = useState(false)
  const data=useContext(countryContext)
  const {setCountry} = data
  const {token} = useContext(authContext);
  const add_country = ()=>{
    let data = {
      name:country_name.current.value,
      image:country_code.current.value
    }
    if (token == null)
    {
      toast.info('شما باید لاگین کنید', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    else {
      post_country(data,token,setCountry)
    }
  }
  return <>
    <div className='container my-5 ' dir='rtl'>
      <div className='row justify-content-center'>
        <div className='col-md-8 bg-light bg-gradient shadow-sm justify-content-center'>
          <form  >
            <div className=" col-md-4 mx-auto">
              <label htmlFor="exampleInputEmail1" className="form-label">نام کشور</label>
              <input ref={country_name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="col-md-4 mx-auto ">
              <label htmlFor="exampleInputPassword1" className="form-label">عکس کشور</label>
              <select  ref={country_code} className="form-select form-select mb-3" >
                <option selected>کشور را انتخاب کنید</option>
                <CountrySelectBox/>
              </select>
            </div>
            <div className="col-md-4 mx-auto my-2">
              <button type="button" className="btn btn-primary" onClick={add_country}>ثبت کشور</button>
            </div>


          </form>
        </div>
        <ShowCountries />
      </div>

<ToastContainer/>
    </div>

  </>
}