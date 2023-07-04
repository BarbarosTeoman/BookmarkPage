import ExtensionCard from './ExtensionCard';

export default function Extensions() {
  return (
    <div className='extensionMain'>
      <div className="extension">
        <h1>Download the extension</h1>
        <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
      </div>
      <div className="cards">
        <ExtensionCard id="card1" browser="chrome" version="62"/>
        <ExtensionCard id="card2" browser="firefox" version="55"/>
        <ExtensionCard id="card3" browser="opera" version="46"/>
      </div>
    </div>
  )
}