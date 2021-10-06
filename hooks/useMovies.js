import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";



export const useMovies = () => {

    const [isLoading, setIsLoading]= useState(true);

    const [moviesState, setMoviesState] = useState({
        nowPlaying: [],
    })
    


    const getMovies=async()=>{

        const nowPlayingPromise = movieDB.get('/now_playing');
        

        const resp= await Promise.all([
            nowPlayingPromise,
        ])
        
        setMoviesState({
            nowPlaying: resp[0].data.results,
            
        })

        setIsLoading(false);

    }

    
    useEffect(() => {        
            
               getMovies(); 
    
    }, [])
        
    return{
        ...moviesState,
        isLoading
    }

}
