import {useEffect, useState} from "react";
import Countdown from "react-countdown";
import {get} from "../Helper/Helpers";

export default function Offs()
{

    const [data,setData]=useState()
    const [status,setStatus]=useState()
    const getAllData = () => {
        get("http://127.0.0.1:8000/api/view/offs/6",setData,setStatus,false)
    };
    useEffect(() => {
        getAllData();
    }, []);
    const show=()=>{
        return data?(data.map((data)=>{
            return  <div  className="col-4 col-md-3 col-lg-4 my-2 shadow-sm rounded-" key={data.id} dir='rtl'>
                <div className="card" >
                    <img src="https://giftstop.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplaystation.01df858f.png&w=1920&q=75" className="card-img-top" alt="..."/>           <a href={'product/'+data.product.id}>
                    <div className="data position-absolute top-0 text-white w-100 h-100 d-flex flex-column justify-content-between"></div>
                </a>

                    <div className="card-body ">

                        <div className='row  justify-content-center my-3 align-self-center'>
                            <div className='col bg-success bg-gradient rounded-3 shadow-sm text-white mx-1 align-self-center py-3' align="center" style={{fontSize:'small'}}>{data.product.name}</div>
                            <div className='col bg-danger bg-gradient  rounded-3 shadow-sm text-white mx-1 align-self-center py-3' align="center">{ data.off+"  تخفیف"} </div>
                            <div className='col rounded-3 bg-gradient shadow-sm bg-transparent align-self-center py-2' style={{fontSize:'small'}} align="center">{ "زمان باقیمانده "}<Countdown date={data.finish} /></div>
                        </div>
                    </div>
                </div>

            </div>
        })):( <div  className="col-4 col-md-3 col-lg-4 " > داده ای برای نمایش نیست</div>)
    }


    return <>
        <div className='container mt-5'>
            <div className='d-flex justify-content-center my-4'>
                <div className='p-6' style={{fontFamily:'naz',fontSize:"xxx-large"}}>
                    <button type="button" className="text-dark btn bg-transparent bg-gradient rounded-3 shadow-sm "><h1><b>پیشنهاد های ویژه</b></h1></button>

                </div>
            </div>
            <div className=' row justify-content-center'>
                {show()}
            </div>
        </div>
    </>
}