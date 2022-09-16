import { useEffect, useState } from "react";
import styles from '/styles/First.module.css'
import { useQuery } from 'react-query'

function App(){
  const [state,setState] = useState([])

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch("https://61c412e3f1af4a0017d99283.mockapi.io/games")
    .then(res => res.json())
   )
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error

  // useEffect(() => {
  //   fetch("https://61c412e3f1af4a0017d99283.mockapi.io/games")
  //   .then(data => data.json())
  //   .then(res => setState(res))
  // },[])
  // console.log(state)
  return(
  <div>
     {data != "" ? <Movie movies={data} /> : "" }
 </div>
  )
}

const Movie =({movies}:any) =>{
  console.log(movies)
  return(
    <div className={styles.movieList}>
      {movies.map(({id,movie,poster}:any) => 
      <div className={styles.movieContainer} key={id}>
          <img src={poster} alt="" />
          <h4>{id}</h4>
          <h3 className={styles.movieImg}>{movie}</h3>
       </div>
    )}
      </div>
    )
    }

  
    

export default App;


