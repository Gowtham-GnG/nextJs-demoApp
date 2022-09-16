import { useQuery } from "react-query"

const getMovieById = (movieId:any) => {
    return  fetch(`https://61c412e3f1af4a0017d99283.mockapi.io/games/${movieId}`).then(response => response.json())
   }

  export const useMovieData = (movieId:any) => {
    return useQuery(['movie',movieId],() => getMovieById(movieId))
   }
