import { useFormik } from "formik"

export function NewMovie(){

    const addMovie= (newMovie:any) => {
    fetch("https://61c412e3f1af4a0017d99283.mockapi.io/games",
    {method:'POST',
    body:JSON.stringify(newMovie),
    headers:{
      "Content-Type" : "application/json"
    },})
    .then(response => response.json())
    .then(data => console.log(data));
  }

    const formik = useFormik({
    initialValues:{ movie: '' , poster:'' },
     onSubmit :(newMovie) => {
         console.log("onSubmit")
         addMovie(newMovie)
     }})

    return(
    <div>
     <form onSubmit={formik.handleSubmit}>
        <div>

      Name:<input 
      value={formik.values.movie}
      id="movie"
      name="movie" 
      type="text"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder="Enter game name"/> <br />

      Poster:<input 
      value={formik.values.poster}
      id="poster"
      name="poster" 
      type="text"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder="Enter image URL"/> <br />

    <button type="submit">
      Add
    </button>

      </div>
      </form>
        </div>
    )
}

export default NewMovie