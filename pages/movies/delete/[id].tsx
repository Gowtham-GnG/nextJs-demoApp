import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDeleteMovie } from "../../../hooks/useMovieDelete";

function DeleteMovie(){
   const router = useRouter()
   const {id} = router.query

const { isLoading, error, data, isFetching } = useDeleteMovie(id)
   
if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error

   return(
    <div>
          Deleted
    </div>
   )
}

export default DeleteMovie