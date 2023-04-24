import { useState, useEffect } from "react";
import {get} from '../Helper/Helpers'
import ReactCardSlider from "react-card-slider-component";
import {useNavigate} from "react-router-dom";
export default function Favs() {
    const [data, setData] = useState("");
    const [status, setStatus] = useState(false);
    let navigate = useNavigate();
    const sliderClick = ()=>{
        navigate('/about',{ state: { id: 7} });
    }
    const getAllData = () => {
        get("http://127.0.0.1:8000/api/view/tags",setData,setStatus,false)

    };
    useEffect(() => {
        getAllData();
    }, []);
    const displayData = () => {
        const slides = [
    ]
        if (status && status === true){


            data ? (
                data.map((data) => {

                        slides.push({image:"https://picsum.photos/200/300",title:data.name,clickEvent:sliderClick})
                })
            ) :
                slides.push({image:"https://picsum.photos/200/300",title:"nothing",clickEvent:sliderClick})
            ;
        }
        else {
            slides.push({image:"https://picsum.photos/200/300",title:"nothing again",clickEvent:sliderClick});
        }
        return slides

    }
    return (<>  <div className='d-flex justify-content-center my-3'>
        <div className='p-6' style={{fontFamily:'naz',fontSize:"xxx-large"}}>
            <button type="button" className=" btn bg-transparent border-success border-5 border-opacity-25 bg-gradient rounded-2 "><h2><b>محصولات پرفروش</b></h2></button>

        </div>
    </div>
        <br/>
        <div className='row  justify-content-center '>
            <ReactCardSlider slides={displayData()}  />
        </div>
    </>)






    ;
}

