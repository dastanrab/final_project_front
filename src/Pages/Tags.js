import {useContext, useEffect, useState} from "react";
import {cartContext} from "../Cart/useCart";
import {useNavigate} from "react-router-dom";
import {get} from '../Helper/Helpers'

export default function Tags()
{
    const [data,setData]=useState()
    const [status,setStatus]=useState()
    const getAllData = () => {
        get("http://127.0.0.1:8000/api/view/tags",setData,setStatus,false)
    };
    console.log('here tags')
    const cart_data = useContext(cartContext);
    useEffect(() => {
        getAllData();
    }, []);
    let navigate = useNavigate();
    const sliderClick = ()=>{
        navigate('/about',{ state: { id: 7} });

    }
    const displayData = () => {

            return data ? (
                data.map((data) => {
                    return (
                        <div  className="col-4 col-md-3 col-lg-3 my-2 shadow-sm rounded-" key={data.id}>
                            <div className="card" style={{width: '18rem'}}>
                                <img src="https://giftstop.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplaystation.01df858f.png&w=1920&q=75" className="card-img-top" alt="..."/>           <a href={'tag_products/'+data.id}>
                                    <div className="data position-absolute top-0 text-white w-100 h-100 d-flex flex-column justify-content-between"></div>
                                </a>

                                <div className="card-body ">
                                    <div className="d-flex justify-content-center">
                                        <div className='p-3 mx-2'>{data.name}</div>
                                        <div className='p-3 mx-2'>   <img
                                            src={"https://flagcdn.com/w80/"+data.country.image+".png"}
                                            height="30"
                                            alt={data.country.name}/></div>


                                    </div>
                                    <div className="d-flex justify-content-center"> <button className="rounded-pill text-white btn bg-primary bg-gradient shadow-lg" onClick={sliderClick}>نمایش بیشتر</button></div>

                                </div>
                            </div>

                        </div>
                    );
                })
            ) : (
                <div  className="col-6 col-md-4 col-lg-3 " > داده ای برای نمایش نیست</div>
            );

    }
    return <>
        <div className='container mt-5'>
            <div className='d-flex justify-content-center my-4'>
                <div className='p-6' style={{fontFamily:'naz',fontSize:"xxx-large"}}>
                    <button type="button" className="text-dark btn bg-transparent bg-gradient rounded-3 shadow-sm "><h1><b>دسته بندی ها</b></h1></button>

                </div>
            </div>
        <div className=' row justify-content-between'>
            {displayData()}
        </div>
    </div>
    </>
}