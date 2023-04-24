import {creditContext} from "./useCredit";
import {useContext} from "react";


export default function CreditSelectBox()
{


    const {credit} = useContext(creditContext);
    console.log('at show tag select box')

    let result=<></>
    if (typeof credit != 'undefined')
    {
        result = credit.map((credit) => {

            return (
                <option key={credit.id} value={credit.id}>{credit.type + credit.time}</option>
            );
        })
    }
    return <>
        {result}
    </>
}