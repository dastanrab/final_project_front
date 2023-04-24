import {useEffect, useState} from "react";
import {get_products} from "../Helper/Helpers";

export default function ShowProducts(props)
{
    const [product, setProduct] =useState();
    const flag =props.flag;
    useEffect(()=>{
        get_products(setProduct)
    },[flag])
    console.log('product contexttt')
   // const [product,setProducte] = data
    console.log('at show prices')

    const remove_price=(e,id)=>{
        console.log(id)
        // del_country(id,setPrice)
    }

    let result=<></>
    if (typeof product != 'undefined')
    {
        result = product.map((product) => {
            return (
                <tr key={product.id}>
                    <th scope="row">{product.id}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.tag.name}</td>
                    <td>{product.tag.country.name}</td>
                    <td>{product.credit.type + product.credit.time}</td>
                    <td>{product.doller.doller}</td>
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
                <th scope="col">نام محصول</th>
                <th scope="col">قیمت</th>
                <th scope="col">نام دسته بندی</th>
                <th scope="col">کشور</th>
                <th scope="col">برچسب اعتبار</th>
                <th scope="col">برچسب قیمت</th>

            </tr>
            </thead>
            <tbody>
            {result}
            </tbody>
        </table>
    </>
}