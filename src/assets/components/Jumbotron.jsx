export default function Jumbotron({ title, text, cta, onCtaClick, className }) {
	return (
		<div className="container">

			<div className={`p-5 mt-3 mb-4  rounded-3 ${className || ''}`}>
				<div className="container-fluid py-5">
					<h1 className="display-5 fw-bold">{title}</h1>
					<p className="col-md-8 fs-4">
						{text}
					</p>
					{cta && (
						<button
							className="btn btn-primary"
							onClick={onCtaClick}
						>
							{cta}
						</button>
					)}

				</div>
			</div>
		</div>

	)
}