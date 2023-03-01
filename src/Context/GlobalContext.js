import { createContext,useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";



const initialState={
    watchlist:[]
}


export const GlobalContext =createContext(initialState)

export const GlobalProvider  = (props) => {

    const [state,dispatch] = useReducer(AppReducer,initialState)
    //Actions
    const addMovieToWatchList= movie  => {
        dispatch({type:"ADD_MOVIE_TO_WATCHLIST",payload:movie})
    }
    
console.log(state)

    return (
        <GlobalContext.Provider
        value={{watchlist:state.watchlist,addMovieToWatchList}}
        
        >{props.children}</GlobalContext.Provider>
    )
}

