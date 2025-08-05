import { Link } from "react-router-dom"
export default function MovieCard({ movies }) {

	return (
		<>
			<div className="container">
				<div className="row row-cols-1 row-cols-md-3 g-3">

					{movies.map(movie => (
						<div key={movie.id} className="col">
							<div className="card h-100">

								<img
									className="card-img-top"
									src={`${import.meta.env.VITE_BACKEND_URL}/images/${movie.image}`}
									alt={movie.title}
									onError={(e) => {
										e.target.src = 'https://via.placeholder.com/300x400'
									}}
									style={{ height: '400px', objectFit: 'cover' }}
								/>
								<div className="card-body">
									<h3 className="card-title">{movie.title}</h3>
									<ul className="list-unstyled">
										<li><strong>Director:</strong> {movie.director}</li>
										<li><strong>Genre:</strong> {movie.genre}</li>
										<li><strong>Year:</strong> {movie.release_year}</li>
										<li className="card-text"><strong>The plot of the movie</strong>{movie.abstract}</li>
									</ul>
									<Link to={`/movies/${movie.id}`} className="btn btn-primary">
										Guarda
									</Link>
								</div>
							</div>
						</div>
					))
					}


				</div>
			</div>
		</>
	)
}