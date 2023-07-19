import { useState } from "react"
import Tab1 from "./Tab1"
import Tab2 from "./Tab2"
import Tab3 from "./Tab3"

export default function Features() {
	const [activeTab, setActiveTab] = useState("tab1")

	return (
		<div className="featuresMain">
			<div className="features">
				<h1>Features</h1>
				<p>
					Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
				<div className="tabHeadings">
					<div
						onClick={(_e) => setActiveTab("tab1")}
						className={activeTab == "tab1" ? "tabHeading active" : "tabHeading"}
						id="tab1"
					>
						Simple Bookmarking
					</div>
					<div
						onClick={(_e) => setActiveTab("tab2")}
						className={activeTab == "tab2" ? "tabHeading active" : "tabHeading"}
						id="tab2"
					>
						Speedy Searching
					</div>
					<div
						onClick={(_e) => setActiveTab("tab3")}
						className={activeTab == "tab3" ? "tabHeading active" : "tabHeading"}
						id="tab3"
					>
						Easy Sharing
					</div>
				</div>
			</div>
			{activeTab == "tab1" && <Tab1 />}
			{activeTab == "tab2" && <Tab2 />}
			{activeTab == "tab3" && <Tab3 />}
		</div>
	)
}
