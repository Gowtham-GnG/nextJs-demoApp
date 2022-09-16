import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from '/styles/First.module.css'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import axios from "axios";
import { useMovieData } from "../../hooks/useMoviesData";

function GetMovie(){

  const router = useRouter()

  const {id} = router.query
 
    const { isLoading, error, data, isFetching } = useMovieData(id)
   
     if (isLoading) return 'Loading...'
   
     if (error) return 'An error has occurred: ' + error
  
    return(      
      <div className={styles.movieList}>     
      <div className={styles.movieContainer}>
          <img src={data.poster} alt="" />
          <h4>{data.id}</h4>
          <h3 className={styles.movieImg}>{data.movie}</h3>
       </div>
      </div>
    )
}

export default GetMovie
