import { Link } from "react-router-dom"
export default function Footer() {
	return (
		<>
			<footer className="bg-dark text-white py-5">
				<div className="container-fluid">
					<div className="row ">
						<div className="col-2">
							<h3>Movies Reviews</h3>
							<div>
								Social:
								<a className="p-2" href=""><i class="bi bi-facebook"></i></a>
								<a className="p-2" href=""><i class="bi bi-instagram"></i></a>
								<a className="p-2" href=""><i class="bi bi-whatsapp"></i></a>

							</div>
						</div>
						<div className="col">
							<h3>Quick Links</h3>
							<ul className="list-unstyled">
								<li>
									<a href="/">Home</a>
								</li>
								<li>
									<a href="/movies">Movies</a>
								</li>
								<li>
									<a href="">Contacts</a>
								</li>
							</ul>
						</div>
						<div className="col">
							<h3>Legal</h3>
							<ul className="list-unstyled">
								<li>
									<a href="">Privacy policy</a>
								</li>
								<li>
									<a href="">Terms of service</a>
								</li>
								<li>
									<a href="">Cookies policy</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</footer>
		</>
	)
}