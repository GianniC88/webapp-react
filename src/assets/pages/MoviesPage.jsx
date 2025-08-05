import Jumbotron from "../components/Jumbotron"
import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

export default function MoviesPage() {
	const api_server_url = import.meta.env.VITE_BACKEND_API_SERVER
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(true)


	useEffect(() => {

		fetch(api_server_url)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				const moviesArray = data.data
				setMovies(moviesArray)
				setLoading(false)
			})
			.catch(err => {
				console.log('error;', err)
				setLoading(false)
			})
	}, [])
	return (

		<>
			<Jumbotron title='Lista Film' text='scegli il tuo Film' cta='Guarda ora' />

			<section>

				<MovieCard movies={movies} />


			</section>
		</>
	)
}