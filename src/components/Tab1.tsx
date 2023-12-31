import tab1 from "../assets/illustration-features-tab-1.svg"

export default function Tab1() {
  return (
    <div className="tabs tab1" style={{ marginTop: "min(8%, 80px)" }}>
      <div className="tabsLeft">
        <h1>Bookmark in one click</h1>
        <p>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <div className="tabsLeftButtons">
          <button>More Info</button>
        </div>
      </div>
      <div className="tabsRight">
        <img src={tab1} alt="" />
        <div className="elipse" />
      </div>
    </div>
  )
}
