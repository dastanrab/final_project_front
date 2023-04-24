import {useContext} from "react";
import {authContext} from "./useAuth";
import {useLocation,Navigate} from "react-router-dom";


export default function NoAuth({children}) {
    console.log('at no auth')
    const {token} = useContext(authContext);
    console.log(token)
    const location = useLocation();

    return token==null ? (
        children
    ) : (
        <Navigate to="/login" replace state={{path: location.pathname}}/>
    );
}