import { useState } from "react"

export default function FAQ() {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({
    "1": false,
    "2": false,
    "3": false,
    "4": false,
  })

  function handleToggle(id: string) {
    setIsOpen({ ...isOpen, [id]: !isOpen[id] })
  }

  return (
		<div className="faqMain">
			<div className="faq">
				<h1>Frequently Asked Questions</h1>
				<p>
					Here are some of our FAQs. If you have any other question you'd like
					answered please feel free to mail us.
				</p>
			</div>
			<div className="questions">
				<details>
					<summary onClick={() => handleToggle("1")}>
						<span>What is Bookmark</span>
						<svg
							className={isOpen["1"] ? "rotate" : ""}
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="12"
						>
							<path
								fill="none"
								stroke="#5267DF"
								stroke-width="3"
								d="M1 1l8 8 8-8"
							/>
						</svg>
						<img
							src="src/assets/icon-arrow.svg"
							alt=""
							className={isOpen["1"] ? "rotate" : ""}
						/>
					</summary>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</details>
				<details>
					<summary onClick={() => handleToggle("2")}>
						<span>How can I request a new browser?</span>
						<img
							src="src/assets/icon-arrow.svg"
							alt=""
							className={isOpen["2"] ? "rotate" : ""}
						/>
					</summary>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</details>
				<details>
					<summary onClick={() => handleToggle("3")}>
						<span>Is there a mobile app?</span>
						<img
							src="src/assets/icon-arrow.svg"
							alt=""
							className={isOpen["3"] ? "rotate" : ""}
						/>
					</summary>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</details>
				<details>
					<summary onClick={() => handleToggle("4")}>
						<span>What about other Chromium browsers?</span>
						<img
							src="src/assets/icon-arrow.svg"
							alt=""
							className={isOpen["4"] ? "rotate" : ""}
						/>
					</summary>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</details>
			</div>
			<div className="faqButton">
				<button>More Info</button>
			</div>
		</div>
	)
}
