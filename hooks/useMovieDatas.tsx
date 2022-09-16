import { useQuery } from "react-query"
import axios from "axios";

const getMovies = () =>{
    return axios.get("https://61c412e3f1af4a0017d99283.mockapi.io/games")  
   }
   

export const useMovieDatas = () => {
    return useQuery('movies',getMovies)
}