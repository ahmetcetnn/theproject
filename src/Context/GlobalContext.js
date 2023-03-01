import { createContext,useContext } from "react";


export const GlobalContext =createContext()
export const GlobalProvider  = (props) => {
    return (
        <GlobalContext.Provider
        value={{emin:"ahmet"}}
        >{props.children}</GlobalContext.Provider>
    )
}

