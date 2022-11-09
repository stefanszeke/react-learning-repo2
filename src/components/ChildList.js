export default function ChildList(props) {
  const {listItems, ...rest} = props
  return (
    <ul>
      {listItems.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  )
}
