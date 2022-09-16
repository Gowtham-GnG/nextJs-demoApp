import { useEffect, useState } from "react";
import styles from '/styles/First.module.css'
import { useQuery } from 'react-query'
import { ApiExtraModels } from "@nestjs/swagger";
import axios from "axios";
import { useMovieDatas } from "../../hooks/useMovieDatas";

const getMovies = () =>{
 return axios.get("https://61c412e3f1af4a0017d99283.mockapi.io/games")  
}

function App(){

  const { isLoading, error, data, isFetching } = useMovieDatas()
  
  if (isLoading) return 'Loading...'
  
  if (error) return 'An error has occurred: ' + error
  
  console.log({isLoading,isFetching})
  return(
  <div>
     <div className={styles.movieList}>
      {data?.data.map(({id,movie,poster}:any) => 
      <div className={styles.movieContainer} key={id}>
          <img src={poster} alt="" />
          <h4>{id}</h4>
          <h3 className={styles.movieImg}>{movie}</h3>
       </div>
    )}
      </div>
 </div>
  )
}


export default App;


