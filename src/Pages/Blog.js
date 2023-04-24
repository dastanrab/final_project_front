import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {get} from "../Helper/Helpers";
import MenuList from "../Menu/MenuList";


export default function Blog()
{
    console.log('at blog');
    const {id} =useParams()
    const [data, setData] = useState("");
    const [status, setStatus] = useState(false);
    const getAllData = () => {
        get('http://127.0.0.1:8000/api/blog/show/'+id,setData,setStatus,false)
    };
    const show_data=()=>
    {
        return  data ? (
            <div className="container" dir='rtl'>
                <div className="row rounded-2 shadow-sm p-3 mb-2 bg-transparent text-white  my-5 justify-content-center" >
                    <div className="col-md-8 ">
                        <img className="my-3" src={'http://127.0.0.1:8000/api/BImage/'+data.id}  height="200" width="800" alt="..."/>
                    </div>
                </div>
                <div className='d-flex  justify-content-center my-3'>
                    <div className='bg-secondary  bg-gradient fw-bold rounded-3 p-2'><h3> {data.name}</h3></div>
                </div>
                <div className='container mb-2 bg-gradient text-white rounded-2 shadow-sm my-2'>
                    <br/>
                    <div className="row justify-content-center text-dark m-3">
                        <div className="col-8 my-1 fw-bold " style={{fontSize:'x-large'}}>
                            {data.body}
                        </div>
                    </div>
                </div>

            </div>

        ) : (
            <div  className="col-6 col-md-4 col-lg-3 " key={data.id}> داده ای برای نمایش نیست</div>
        );
    }

    useEffect(()=>{
        console.log('at product effect')
        getAllData()
    },[])
    return <>
        <MenuList/>
        {show_data()}
    </>
}