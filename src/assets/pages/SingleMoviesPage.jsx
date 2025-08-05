import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Jumbotron from "../components/Jumbotron"

export default function SingleMovies() {


	const { id } = useParams()
	const api_server_url = `${import.meta.env.VITE_BACKEND_API_SERVER}/${id}`
	const [movie, setMovie] = useState({})
	console.log(id)

	useEffect(() => {

		fetch(api_server_url)
			.then(res => res.json())
			.then(data => {
				const MoviesArray = data.data
				console.log(data)
				setMovie(data)
			})

	}, [id])
	return (
		<>


			<section>
				<div className="container p-5">
					<h1 className="display-5 fw-bolder">Recensioni</h1>

					<div className="containerSingleMovie">
						<div className="d-flex justify-content-center align-items-center min-vh-100">

							<div className="flex-nowrap  " >
								<img className="cardtop-img " src={`${import.meta.env.VITE_BACKEND_URL}/images/${movie.image}`} alt={movie.title} />
								{movie.reviews && movie.reviews.length > 0 ? (
									movie.reviews.map(review => (
										<div key={review.id} className="card-review p-3 mb-3">

											<h5>Recensione di: {review.name}</h5>
											<div className="mb-2">
												<strong>Voto:</strong> {review.vote}/5 ⭐
											</div>
											<p>{review.text}</p>
										</div>
									))
								) : (
									<div className="alert alert-info">
										<h5>Nessuna recensione disponibile</h5>
										<p>Questo film non ha ancora recensioni.</p>
									</div>
								)}
							</div>

						</div>
					</div>
				</div>
			</section>
			<Jumbotron title={movie.title} text={movie?.plot} cta={`Guarda ${movie?.title}`} />



		</>
	)
}