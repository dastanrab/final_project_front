import {priceContext} from "./usePrice";
import {useContext} from "react";
import {BsFillTrashFill} from "react-icons/bs"

export default function ShowPrices()
{
    const data=useContext(priceContext)
    const {price,setPrice} = data
    console.log('at show prices')

    const remove_price=(e,id)=>{
        console.log(id)
        // del_country(id,setPrice)
    }

    let result=<></>
    if (typeof price != 'undefined')
    {
        result = price.map((price) => {
            return (
                <tr key={price.id}>
                    <th scope="row">{price.id}</th>
                    <td>{price.doller}</td>

                    <td>
                        <div className="p-1">
                            <button type="button" className="btn btn-danger" onClick={event => remove_price(event,price.id)}  ><BsFillTrashFill/></button>
                        </div>
                    </td>
                </tr>
            );
        })
    }
    return <>
        <div className='d-flex justify-content-center' dir='rtl'>
            <div className='p-3'><h2>لیست برچسب های قیمت</h2></div>
        </div>
        <table className="table table-striped bg-light table-sm">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">عنوان برچسب قیمت</th>
                <th scope="col">حذف</th>

            </tr>
            </thead>
            <tbody>
            {result}
            </tbody>
        </table>
    </>
}