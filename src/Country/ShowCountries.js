import {useContext, useEffect, useMemo, useState} from "react";
import {del_country, get} from "../Helper/Helpers";
import {BsFillTrashFill} from "react-icons/bs";
import {countryContext} from "./useCountry";

export default function ShowCountries(props)
{
    const flag = props.flag
    const data=useContext(countryContext)
    const {country,setCountry} = data
    console.log('at show countries')
    console.log(data)
    // const meme = useMemo(()=>{
    //     return flag
    // },[flag])
    const remove_country=(e,id)=>{
     console.log(id)
        del_country(id,setCountry)
    }
    // const getAllData = () => {
    //     get("http://127.0.0.1:8000/api/country",setCountry,setStatus2,false)
    // };
    // useEffect(() => {
    //     console.log('get reviews')
    //     getAllData();
    // }, [meme,status2]);
    let result=<></>
    if (typeof country != 'undefined')
    {
      result = country.map((country) => {
            return (
                <tr key={country.id}>
                    <th scope="row">{country.id}</th>
                    <td>{country.name}</td>
                    <td> <img
                        src={"https://flagcdn.com/w80/"+country.image+".png"}
                        height="30"
                        alt={country.name}/></td>
                    <td>
                        <div className="p-1">
                            <button type="button" className="btn btn-danger" onClick={event => remove_country(event,country.id)}  ><BsFillTrashFill/></button>
                        </div>
                    </td>
                </tr>
            );
        })
    }
    return <>
        <div className='d-flex justify-content-center' dir='rtl'>
            <div className='p-3'><h2>لیست کشور ها</h2></div>
        </div>
        <table className="table table-striped bg-light table-sm">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">نام کشور</th>
                <th scope="col">پرچم</th>
                <th scope="col">حذف</th>

            </tr>
            </thead>
            <tbody>
            {result}
            </tbody>
        </table>
    </>
}