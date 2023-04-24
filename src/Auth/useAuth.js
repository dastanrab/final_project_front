import * as React from "react";

export const authContext = React.createContext();

export function useAuth() {
    const [authed, setAuthed] = React.useState(false);
    const [token, setToken] = React.useState(localStorage.getItem('token'));
    console.log('token ')
    console.log(token)

    return {
        token,
        authed,
        login() {
            return new Promise((res) => {
                setToken(localStorage.getItem('token'))

                // setAuthed(true);
                res();
            });
        },
        logout() {
            return new Promise((res) => {
                localStorage.removeItem('token')
                setToken(null)
                // setAuthed(false);
                res();
            });
        },
    };
}

export function AuthProvider({ children }) {
    const auth = useAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}