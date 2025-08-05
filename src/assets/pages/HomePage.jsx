import { useNavigate } from "react-router-dom"
import Jumbotron from "../components/Jumbotron"
export default function HomePage() {
	const navigate = useNavigate()
	const MovieSelection = () => {
		navigate('/movies')
	}
	return (
		<>

			<div className="container">
				<Jumbotron
					className="HomePage"
					title='Movies & GO '
					text='Scegli il tuo Film e Buona Visione'
					cta='Scegli il tuo Film'
					onCtaClick={MovieSelection} />


				<div className="card">

					<div className="card-body bg-secondary h-100">
						<h4 className="card-title display-5 fw-bolder ">Benvenuti nella nostra community</h4>
						<h4 className="card-text mt-5">Siamo lieti di offrirvi una vasta scelta Film dai Cult alle Nuove uscite
						</h4>
						<h4>Mettetevi comodi e Buona Visione</h4>
					</div>
				</div>

			</div>




		</>
	)
}