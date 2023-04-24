import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {get, get_tag_products} from '../Helper/Helpers'
import CartItem from "../Cart/CartItem";
import MenuList from "../Menu/MenuList";

export default function TagProducts()
{

    const {id} =useParams()
    const [data,setData]=useState()
    const [tag,setTag]=useState('')
    const getAllData = () => {
        get_tag_products("http://127.0.0.1:8000/api/view/tags_country/"+id,setData,setTag)
    };
    useEffect(() => {
        getAllData();
    }, []);
    let navigate = useNavigate()
    const more =(e,id)=>{
        navigate('/product/'+id)
    }
    const displayData = () => {

        return data ? (
            data.map((data) => {
                return (
                    <div  className="col-6 col-md-4 col-lg-4 my-2  " key={data.id}>
                        <div className="card rounded-2 bg-gradient shadow-sm border-3 border-opacity-25 border-danger rounded-3" >
                            <div className='mx-2 my-2'>
                                <img  src="https://giftstop.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplaystation.01df858f.png&w=1920&q=75" className="card-img-top" alt="..."/>

                            </div>


                            <div className="card-body ">
                                    <div className="d-flex flex-column">
                                        <div className='d-flex'>
                                            <div className="p-4"> نام محصول : {data.name} </div>
                                            <div className="p-4">  کشور :  <img
                                                src={"https://flagcdn.com/w80/"+data.tag.country.image+".png"}
                                                height="30"
                                                alt={data.tag.country.name}/>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-row'>
                                            <div className="p-3">اعتبار : -</div>
                                            <div className="p-3">قیمت دلاری : $</div>
                                        </div>



                                    </div>
                                <div className='row justify-content-between'>
                                    <div className='col-md-6 mx-auto'>   <CartItem id = {data.id}/>
                                    </div>
                                    <div className='col-md-6 mx-auto'>   <button className="rounded-pill text-white btn  btn-group-lg bg-primary bg-gradient shadow-lg me-5" onClick={event => more(event,data.id)} >نمایش بیشتر</button>
                                    </div>

                                </div>
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
        <MenuList/>
        <div className='container mt-5' dir='rtl'>
        <div className='d-flex justify-content-start my-4'>
            <div className='p-6' style={{fontFamily:'naz',fontSize:"xxx-large"}}>
                <button type="button" className="text-white btn bg-secondary bg-gradient rounded-3 shadow-sm bg-opacity-75"><h3><b>محصولات دسته بندی {tag} </b></h3></button>

            </div>
        </div>
        <div className=' row justify-content-between'>
            {displayData()}
        </div>
    </div>
    </>
}