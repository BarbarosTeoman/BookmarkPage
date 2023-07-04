export default function ExtensionCard(props: any) {
  return (
    <div className='extensionCard' id={props.id}>
      <div className="img"><img className="logo" src={`src/assets/logo-${props.browser}.svg`} alt="" /></div>
      <h4>Add to {props.browser.charAt(0).toUpperCase()+ props.browser.slice(1)}</h4>
      <p>Minimum version {props.version}</p>
      <img className="hr" src="src/assets/bg-dots.svg" alt="" />
      <button>Add & Install Extension</button>
    </div>
  )
}