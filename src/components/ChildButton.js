export default function ChildButton(props) {

  const {onButtonClick, btnName, ...rest} = props

  return <button onClick={props.onButtonClick} {...rest}> {btnName}  </button>
}