import {createContext,useState} from 'react'

export const MovieContext=createContext();

export const MovieProvider = ({children}) =>{
    const [movieRatings,setMovieRatings]=useState([])
    return(
        <MovieContext.Provider value={{movieRatings,setMovieRatings}}>
            {children}
        </MovieContext.Provider>
    )
}
