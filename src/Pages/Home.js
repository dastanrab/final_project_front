import Favs from "../Pages/Favs";
import {useContext} from "react";
import {cartContext} from "../Cart/useCart";
import SlideShows from "../SlideShows/SlideShows";
import Tags from "./Tags";
import MenuList from "../Menu/MenuList";
import Offs from "./Offs";
import Blogs from "./Blogs";


export default function Home()
{
    console.log('here')
    const cart_data = useContext(cartContext);
    console.log(cart_data)
    console.log('at home')
    return <>
        <MenuList/>
        <br/>
        <SlideShows/>
        <br/>
        <Tags/>
        <br/>
        <Favs/>
        <br/>
        <Offs/>
        <br/>
        <Blogs/>
            </>

}