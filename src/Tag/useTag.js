import React, {useEffect} from "react";
import { get_tag} from "../Helper/Helpers";
export const tagContext = React.createContext();

export function useTag()
{
    console.log('at context')
    const [tag, setTag] = React.useState();
    useEffect(()=>{
        get_tag(setTag)
    },[])

    return {
        tag,
        setTag
    };




}
export function TagProvider({ children }) {
    const data = useTag();
    console.log('at tag provider',data)
    return <tagContext.Provider value={data}>{children}</tagContext.Provider>;
}
export default function TagConsumer() {
    return React.useContext(tagContext);
}