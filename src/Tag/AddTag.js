import CountrySelectBox from "../Country/CountrySelectBox";
import ShowCountries from "../Country/ShowCountries";
import {ToastContainer} from "react-toastify";
import {useRef, useState} from "react";
import {addTag} from "../Helper/Helpers";
import GetTagCountry from "./GetTagCountry";

export default function AddTag()
{
        console.log('start')
    const input_value = useRef(null)
    const file_input = useRef(null)
    const selectRef = useRef(null)
    const get_value = async () => {
        let form_data = new FormData();
        form_data.set('name', input_value.current.value)
        form_data.set('image', file_input.current.files[0])
        form_data.set('country_id', selectRef.current.value)
        //todo add tag context for update
        await addTag(form_data)
        input_value.current.value=null
        file_input.current.value=null

    }
  return <>
      <div className='container my-5 ' dir='rtl'>
          <div className='row justify-content-center '>
              <div className='col-md-8 bg-light bg-gradient shadow-sm justify-content-center'>
                  <form  >
                      <div className=" col-md-4 mx-auto">
                          <label htmlFor="exampleInputEmail1" className="form-label">نام دسته بندی</label>
                          <input ref={input_value} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      </div>
                      <div className="col-md-4 mx-auto ">
                          <label htmlFor="exampleInputPassword1" className="form-label">شناسه کشور</label>
                          <select  ref={selectRef} className="form-select  mb-3" aria-label=".form-select-lg example">
                              <option selected>کشور را انتخاب کنید</option>
                              <GetTagCountry/>
                          </select>
                      </div>
                      <div className="col-md-4 mx-auto my-2">
                          <label htmlFor="exampleInputPassword1" className="form-label">عکس دسته بندی</label>

                          <input type={"file"} ref={file_input} />
                      </div>
                      <div className="col-md-4 mx-auto my-2">
                          <button type="button" className="btn btn-primary" onClick={get_value}>ثبت کشور</button>
                      </div>


                  </form>
              </div>
          </div>

          <ToastContainer/>
      </div></>
}