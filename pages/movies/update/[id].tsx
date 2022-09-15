import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as yup from 'yup';

function UpdateMovie(){
   const router = useRouter()
   const {id} = router.query

   const[movieinfo,setMovie]:any = useState()
   const getinfo =() =>{
     fetch(`https://61c412e3f1af4a0017d99283.mockapi.io/games/${id}`,{method : "GET"})
     .then((response) => response.json())
     .then((data) => setMovie(data));}
   
     useEffect(getinfo)
    //  console.log(movieinfo)

   return(
    <div>
        {movieinfo ? <MovieEdit id={movieinfo.id} name={movieinfo.movie} image={movieinfo.poster}/> : ""}
    </div>
   )
}

function MovieEdit({id,name,image}:any){
    console.log(id,name,image)
    const editMovie= (updatedMovie:any) => {
    useEffect(() => {
        fetch(`https://61c412e3f1af4a0017d99283.mockapi.io/games/${id}`,
        {method:'PUT',
        body:JSON.stringify(updatedMovie),
        headers:{
          "Content-Type" : "application/json"
        },})
        .then(response => response.json())
        .then((data) => console.log(data));
    }),[]
      }

      const formik = useFormik({
        initialValues:{ movie:name , poster:image },
        onSubmit :(upadatedMovie) => {
          console.log("onSubmit",upadatedMovie)
          editMovie(upadatedMovie)
        }})
     return(
        <div>
          <h1>Edit Movies</h1>
        <form onSubmit={formik.handleSubmit}>
      <input 
        value={formik.values.movie}
        id="movie"
        name="movie" 
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter game name"
         /><br /><br />

      <input
        value={formik.values.poster}
        id="poster"
        name="poster" 
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter image URL"

         /><br /><br />

      <button type="submit">
       save
      </button>
      </form>
    </div>
     )
}

export default UpdateMovie