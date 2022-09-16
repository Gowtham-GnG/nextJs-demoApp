import { useQuery } from "react-query"
import { MetadataAlreadyExistsError } from "typeorm"

 const deleteMovie = (movieId:any) => {
  return  fetch(`https://61c412e3f1af4a0017d99283.mockapi.io/games/${movieId}`,{method:'DELETE'})
          .then(data => data.json())
 }

 export const useDeleteMovie = (movieId:any) => {
    return useQuery(['movie',movieId],() => deleteMovie(movieId))
 }