import {useParams} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import {get} from "../Helper/Helpers";
import CartItem from "../Cart/CartItem";
import SendReview from "../Reviews/SendReview";
import MenuList from "../Menu/MenuList";


export default function Product()
{
  console.log('at product');
  const {id} =useParams()
  const [data, setData] = useState("");
  const [status, setStatus] = useState(false);
  const getAllData = () => {
    get('http://127.0.0.1:8000/api/product/'+id,setData,setStatus,false)
  };
  const show_data=()=>
  {
   return  data ? (
           <div className="container" dir='rtl'>
               <div className="row rounded-2 shadow-sm p-3 mb-2 bg-dark text-white  my-5" >
                   <div className="col-md-6 ">
                       <img className="my-3" src="https://giftstop.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplaystation.01df858f.png&w=1920&q=75"  height="200" width="500" alt="..."/>
                   </div>
                   <div className="col-md-6 ">
                       <div className="d-flex">
                           <div className="p-4 flex-column my-3 justify-content-center" >
                               <div className="p-2">  نام  </div>
                               <div className="p-2">{data.name}</div>
                               <div className="p-2"></div>
                           </div>
                           <div className="p-4 flex-column my-3">
                               <div className="p-2">  قیمت  </div>
                               <div className="p-2">{data.price}</div>
                               <div className="p-2"></div>
                           </div>
                           <div className="p-4 flex-column my-3">
                               <div className="p-2"> امتیاز </div>
                               <div className="p-2">{data.total_avg}</div>
                           </div>
                           <div className="p-3 flex-column my-3">
                               <div className="p-2"><div className="d-flex justify-content-center"><div className="p-4"> <CartItem id = {38}/></div></div> </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className='container mb-2 bg-dark text-white rounded-2 shadow-sm my-2'>
                   <div className="d-flex">
                       <div className="p-4">توضیحات</div>
                   </div>
                   <div className="row ">
                       <div className="col-8 my-1">
                           <div className="d-flex justify-content-center">{data.describe}</div>
                       </div>
                   </div>
               </div>
               <SendReview id = {data.id}/>

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