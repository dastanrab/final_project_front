
import {countryContext} from "../Country/useCountry";
import {useContext} from "react";

export default function GetTagCountry()
{
    const data=useContext(countryContext)
    const {country} = data

    let result=<></>
    if (typeof country != 'undefined')
    {
        result = country.map((country) => {
            return (<option key={country.id} value={country.id}>{country.name}</option>

            );
        })
    }

    return <>{result}</>
}