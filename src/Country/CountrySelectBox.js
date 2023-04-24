import {useEffect, useState} from "react";
import {get_countries_cdn} from "../Helper/Helpers";

export default function CountrySelectBox()
{
    const [data,setData]=useState()
    useEffect(()=>{
        get_countries_cdn(setData)
    },[])
    const displayData = () => {
        const indents=[]
        if (data){
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    indents.push( <option key={key} value={key}>{data[key]}</option>);
                }
            }
            return (indents)
        }

        else {
            return (<></>)
        }


    }
    return <>{displayData()}</>
}