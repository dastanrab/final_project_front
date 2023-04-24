import {useContext} from "react";
import {authContext} from "./useAuth";
import {useLocation,Navigate} from "react-router-dom";

export default function RequireAuth({children}) {
    const {token} = useContext(authContext);
    console.log('at auth required')

    const location = useLocation();

    return token != null ? (
        children
    ) : (
        <Navigate to="/login" replace state={{path: location.pathname}}/>
    );
}