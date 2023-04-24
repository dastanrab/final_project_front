import React, {useEffect} from "react";
import axios from "axios";
import {get_countries} from "../Helper/Helpers";
export const countryContext = React.createContext();

export function useCountry()
{
    console.log('at context')
    const [country, setCountry] = React.useState();
    useEffect(()=>{
      get_countries(setCountry)
    },[])

    return {
        country,
        setCountry
    };




}
export function CountryProvider({ children }) {
    const data = useCountry();
    console.log('at country provider',data)
    return <countryContext.Provider value={data}>{children}</countryContext.Provider>;
}
export default function CountryConsumer() {
    return React.useContext(countryContext);
}