import {useEffect, useMemo, useState} from "react";
import {post,get} from "../Helper/Helpers";


export default function ShowReviews(props)
{
    const flag = props.flag
    const [review, setReview] = useState();
    const [status2, setStatus2] = useState();
    const meme = useMemo(()=>{
        return flag
    },[flag])

    const getAllData = () => {
        get("http://127.0.0.1:8000/api/review",setReview,setStatus2,false)
    };
    useEffect(() => {
        console.log('get reviews')
        getAllData();
    }, [meme]);
    const displayData = () => {


        return review ? (
            review.map((review) => {
                return (
                    <div  className="col-6 col-md-4 col-lg-3 my-2" key={review.id}>
                        <div className="card" style={{width: '18rem'}}>
                            <img src="https://giftstop.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplaystation.01df858f.png&w=1920&q=75" className="card-img-top" alt="..."/>
                            <a href={'google.com'}>
                                <div className="data position-absolute top-0 text-white w-100 h-100 d-flex flex-column justify-content-between"></div>
                            </a>

                            <div className="card-body ">
                                <div className="d-flex justify-content-center">{review.body}</div>
                            </div>
                        </div>
                    </div>
                );
            })
        ) : (
            <div  className="col-6 col-md-4 col-lg-3 " > داده ای برای نمایش نیست</div>
        );


    }
    return (
        <div className="container">
            <div className='d-flex justify-content-center my-3'>
            <div className='p-6' style={{fontFamily:'naz',fontSize:"xxx-large"}}>
                <button type="button" className="text-white shadow-sm btn-lg bg-dark bg-gradient rounded-2"><h3><b>نظرات</b></h3></button>

            </div>
        </div>
            <div className='container mt-5 border border-dark border-3 rounded-2'>


                <div className=' row justify-content-between'>
                    {displayData()}
                </div>
                {/*<Test setUs = {test} />*/}
            </div>
        </div>


    );
}