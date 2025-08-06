import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Jumbotron from "../components/Jumbotron"
import NotFound from "../components/NotFound"

export default function SingleMovies() {


	const { id } = useParams()
	const api_server_url = `${import.meta.env.VITE_BACKEND_API_SERVER}/${id}`
	const [movie, setMovie] = useState({})
	const [formData, setFormData] = useState({
		nickname: "",
		name: "",
		vote: 1,
		content: ""
	})
	const navigate = useNavigate
	console.log(id)

	useEffect(() => {

		fetch(api_server_url)
			.then(res => res.json())
			.then(data => {
				const MoviesArray = data.data
				console.log(data)
				if (data.error) {
					if (data.messagge === 'Not Found') {
						return navigate(<NotFound />)
					}
				}
				setMovie(data)
			})

	}, [id])
	return (
		<>

			<Jumbotron title={movie.title} text={movie?.plot} cta={`Guarda ${movie?.title}`} />

			<section>
				<div className="container p-5">
					<h1 className="display-5 fw-bolder mb-5">Review</h1>
					<h4 className="text-muted">add review</h4>
					<div className="row ">
						<div className="col-3 ">
							<form action="card p-4">
								<div className="mb-3 ">

									<label htmlFor="nickname" className="form-label">nickname</label>
									<input
										className="form-control"
										type="text"
										name="nickname"
										id="nickname"
										placeholder="Type Your nickname for your review"
										aria-describedby="helpId"
										value={formData.nickname}
										onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
									/>
									<small id="helpId" className="text-muted">Help text</small>
								</div>

								<div className="mb-3">

									<label htmlFor="name" className="form-label">Name</label>
									<input
										className="form-control"
										type="text"
										name="name"
										id="name"
										placeholder="Type Your Name"
										aria-describedby="helpId"
										value={formData.name}
										onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									/>

									<small id="helpId" className="text-muted">Help text</small>
								</div>

								<div className="mb-3">

									<label htmlFor="vote" className="form-label">Vote</label>
									<input
										className="form-control"
										type="number"
										step="1"
										min="1"
										max="5"
										name="vote"
										id="vote"
										placeholder="Type Your Vote"
										aria-describedby="helpId"
										value={formData.vote}
										onChange={(e) => setFormData
											({ ...formData, vote: e.target.value })
										}
									/>
									<small id="helpId" className="text-muted">Help text</small>
								</div>


								<div className="mb-3">


									<label htmlFor="content" className="form-label">content</label>
									<textarea
										className="form-control"
										name="content"
										id="content"
										rows="4"
										value={formData.content}
										onChange={(e) => setFormData({ ...formData, content: e.target.value })}
									></textarea>
								</div>

								<button
									type="submit"
									className="btn btn-primary"
								>
									<i className="bi bi-floppy">Save</i>
								</button>

							</form>
						</div>
						<div className="col-6 d-flex align-items-center justify-content-center">
							<img className="cardtop-img img-fluid" src={`${import.meta.env.VITE_BACKEND_URL}/images/${movie.image}`} alt={movie.title} />
						</div>

					</div>

					<div className="containerSingleMovie">
						<div className="d-flex justify-content-center align-items-center ">

							<div className="flex-nowrap  " >
								{movie.reviews && movie.reviews.length > 0 ? (
									movie.reviews.map(review => (

										<div key={review.id} className="card-review p-3 mb-3">

											<div className="card-body">
												<h5>Recensione di: {review.name}</h5>
												<div className="mb-2">
													<strong>Voto:</strong> {review.vote}/5 ⭐
												</div>
												<p>{review.text}</p>
											</div>

											{review.nickname && (
												<div className="card-footer ">
													<span>Author: {review.nickname}</span>
												</div>

											)}
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



		</>
	)
}