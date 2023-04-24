import React, {useEffect} from "react";
import { get_credit} from "../Helper/Helpers";
export const creditContext = React.createContext();

export function useCredit()
{
    console.log('at context')
    const [credit, setCredit] = React.useState();
    useEffect(()=>{
        get_credit(setCredit)
    },[])

    return {
        credit,
        setCredit
    };




}
export function CreditProvider({ children }) {
    const data = useCredit();
    console.log('at credit provider',data)
    return <creditContext.Provider value={data}>{children}</creditContext.Provider>;
}
export default function CreditConsumer() {
    return React.useContext(creditContext);
}