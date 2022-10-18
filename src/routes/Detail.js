import { useEffect } from "react";
import { useState } from "react";
import {useParams} from "react-router-dom";
function Detail(){
    const {id} = useParams();
    const [movie, setMovie] =useState([]);

    const getMovie = async() =>{
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`);
        const json = await response.json();
        console.log(json);
        setMovie(() => json.data.movie);
    };

    useEffect(() => { 
      getMovie(); 
    },[])
    return <h1>Detail</h1>;
}
export default Detail;