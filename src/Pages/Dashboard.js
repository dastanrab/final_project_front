import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import Home from "./Home";
import {useAuth} from "../Auth/useAuth";
import Products from "../AdminProjects/Products";

export default function Dashboard()
{
    const { authed, logout,token } = useAuth();
    let navigate = useNavigate();
    console.log('at dashh')
    console.log(token!=null)

    const handleLogout = () => {
        console.log(token);
        logout();
        navigate("/");
    };
    return (<><Products/></>)

}