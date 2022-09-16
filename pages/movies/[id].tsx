import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from '/styles/First.module.css'
import { useQuery } from 'react-query'

function GetMovie(){
    const router = useRouter()
    const [state,setState]:any = useState([]);
    const {id} = router.query
    // console.log(id)
  // useEffect(() => {
  //   fetch(`https://61c412e3f1af4a0017d99283.mockapi.io/games/${id}`,{method:'GET'})
  //   .then(data => data.json())
  //   .then(res => setState(res))
  // })

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`https://61c412e3f1af4a0017d99283.mockapi.io/games/${id}?format=json`,{method:'GET'})
    .then(res => res.json())
   )
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error
  console.log(data)
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