import './style.css';
import React from 'react'
import ChildButton from "./components/ChildButton";
import ChildList from "./components/ChildList";

function App() {

  const [inputName, setInputName] = React.useState('')
  const [names, setNames] = React.useState([])


  function handleResetButtonClick() {
    setNames([])
  }

  function handleInputChange(event) {
    setInputName(event.target.value)
  }

  function handleInputSubmit(event) {
    event.preventDefault();
    setNames([...names, inputName])
    setInputName('')
  }

  return (
    <div>
      <ChildButton btnName="reset" onButtonClick={handleResetButtonClick}/>
      <h2>Hello {inputName}</h2>
      <NameForm asd={inputName} onInputChange={handleInputChange} onInputSubmit={handleInputSubmit}/>
      <ChildList listItems={names}/>
    </div>
  );
}




export default App;

function NameForm(props) {

  return (
    <form onSubmit={props.onInputSubmit}>  
     <input type="text" value={props.asd} onChange={props.onInputChange}/>
     <input type="submit" value="add"/>
    </form>
  )
}
