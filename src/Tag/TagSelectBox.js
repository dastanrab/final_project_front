import {useContext} from "react";
import {tagContext} from "./useTag";

export default function TagSelectBox()
{

    const data=useContext(tagContext)
    const {tag} = data
    console.log('at show tag select box')
    console.log(data)
    let result=<></>
    if (typeof tag != 'undefined')
    {
        result = tag.map((tag) => {

            return (
                <option key={tag.id} value={tag.id}>{tag.name + tag.country_id}</option>
            );
        })
    }
    return <>
        {result}
    </>
}