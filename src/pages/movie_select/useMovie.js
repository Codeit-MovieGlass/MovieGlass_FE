import { useState,useEffect } from "react";
import MovieData from "./Select_moviedata.js"

export const useMovies = () =>{

    const [displayMovies, setDisplayMovies]=useState([])
    const [selectedMovies, setSelectedMovies]=useState([])

    useEffect(()=>{
        const fetchInitialMovies = async ()=>{
            try{
                setDisplayMovies(MovieData);
            }catch(error){
                console.error("영화 데이터를 불러오는 중 오류 발생",error)
            }  
        };
        fetchInitialMovies();
    },[])

    const selectMovie=(id) => {
    
    }

    return {displayMovies,selectedMovies,selectMovie};
}