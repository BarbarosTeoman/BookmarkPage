import { useState } from "react"

export default function Contact() {
	const [email, setEmail] = useState<string>("")
	const [message, setMessage] = useState<boolean>(false)
	const [error, setError] = useState<boolean>(false)

	const isValidEmail = (email: string): boolean => {
		return /\S+@\S+\.\S+/.test(email)
	}

	const handleSubmit = (_e: any): void => {
		if (isValidEmail(email)) {
			setError(false)
			setMessage(true)
		} else {
			setError(true)
			setMessage(true)
		}
	}

	return (
		<div className="contactMain">
			<div className="contact">
				<p>35.000+ ALREADY JOINED</p>
				<h2>Stay up-to-date with what we're doing</h2>
				<div className="inputGroup">
					<div className="inputAndButton">
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							placeholder="Enter your email address"
						/>
						{message && (
							<>
								{error && (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
									>
										<g fill="none" fill-rule="evenodd">
											<circle cx="10" cy="10" r="10" fill="#FA5959" />
											<g fill="#FFF" transform="translate(9 5)">
												<rect width="2" height="7" rx="1" />
												<rect width="2" height="2" y="8" rx="1" />
											</g>
										</g>
									</svg>
								)}
								<div
									style={
										error
											? {
													backgroundColor: "var(--softRed)",
											  }
											: {
													backgroundColor: "var(--veryDarkBlue)",
											  }
									}
									className="messageDiv"
								>
									<span>
										{error ? (
											<em>Whoops, make sure it's an email</em>
										) : (
											<em>You've successfully subscribed</em>
										)}
									</span>
								</div>
							</>
						)}
					</div>
					<button onClick={handleSubmit}>Contact Us</button>
				</div>
			</div>
		</div>
	)
}
