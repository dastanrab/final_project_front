
import {BsFillTrashFill} from "react-icons/bs";
import {creditContext} from "./useCredit";
import {useContext} from "react";

export default function ShowCredits(props)
{
    const flag = props.flag
    const data=useContext(creditContext)
    const {credit,setCredit} = data
    console.log('at show credits')
    console.log(data)
    const remove_country=(e,id)=>{
        console.log(id)

    }

    let result=<></>
    if (typeof credit != 'undefined')
    {
        result = credit.map((credit) => {
            console.log(credit.id)
            return (
                <tr key={credit.id}>
                    <th scope="row">{credit.id}</th>
                <td>{credit.type||'_'}</td>
                    <td>{credit.time||'_'}</td>
                    <td>
                        <div className="p-1">
                            <button type="button" className="btn btn-danger" onClick={event => remove_country(event,credit.id)}  ><BsFillTrashFill/></button>
                        </div>
                    </td>
                </tr>
            );
        })
    }
    return <>
        <div className='d-flex justify-content-center' dir='rtl'>
            <div className='p-3'><h2>لیست برچسب های اعتبار</h2></div>
        </div>
        <table className="table table-striped bg-light table-sm">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">نوع دوره</th>
                <th scope="col">زمان</th>
                <th scope="col">حذف</th>

            </tr>
            </thead>
            <tbody>
            {result}
            </tbody>
        </table>
    </>
}