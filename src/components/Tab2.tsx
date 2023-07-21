import tab2 from "../assets/illustration-features-tab-2.svg"

export default function Tab2() {
	return (
		<div className="tabs tab2" style={{ marginTop: "min(5%, 30px)" }}>
			<div className="tabsLeft">
				<h1>Intelligent search</h1>
				<p>
					Our powerful search feature will help you find saved sites in no time
					at all. No need to trawl through all of your bookmarks.
				</p>
				<div className="tabsLeftButtons">
					<button>More Info</button>
				</div>
			</div>
			<div className="tabsRight">
				<img src={tab2} alt="" />
				<div className="elipse" />
			</div>
		</div>
	)
}
