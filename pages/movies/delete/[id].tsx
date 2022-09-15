import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function DeleteMovie(){
   const router = useRouter()
   const [state,setState]:any = useState([]);
   const {id} = router.query

 useEffect(() => {
   fetch(`https://61c412e3f1af4a0017d99283.mockapi.io/games/${id}`,{method:'DELETE'})
   .then(data => data.json())
   .then(res => setState(res))
 })
 console.log(state)
   return(
    <div>
          Deleted
    </div>
   )
}

export default DeleteMovie