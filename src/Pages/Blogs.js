import {useEffect, useState} from "react";
import {get_blogs} from "../Helper/Helpers";


export default function Blogs()
{
    const [data,setData]=useState()
    const getAllData = () => {
        get_blogs(setData)
    };
    useEffect(() => {
        getAllData();
    }, []);
    const show=()=>{
        console.log('at blogsss')
        console.log(data)
        return data?(data.map((data)=>{
            return  <div  className="col-4 col-md-3 col-lg-4 my-3  rounded-3 " key={data.id} dir='rtl'>
                <div className="card m-1" >
                    <div className='m-2'><img src={"http://127.0.0.1:8000/api/BImage/"+data.id} className="card-img-top"  height={200} alt="..."/>  </div>
                             <a href={'blog/'+data.id}>
                    <div className="data position-absolute top-0 text-white w-100 h-100 d-flex flex-column justify-content-between"></div>
                </a>

                    <div className="card-body ">
                       <div className='row justify-content-center my-3 align-self-center'>عنوان</div>
                        <div className='row  justify-content-center my-3 align-self-center'>
                            {data.name}
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
                    <button type="button" className="text-dark btn bg-transparent bg-gradient rounded-3 shadow-sm "><h1><b> جدیدترین مقالات</b></h1></button>

                </div>
            </div>
            <div className=' row justify-content-center'>
                {show()}
            </div>
        </div>
    </>
}