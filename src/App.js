import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Home from "./Component/Home";
function App() {
  let url = "https://www.bridgelabz.com";
  let initialValue = {
    name: "",
    nameError: "",
  };

  const [changeValue, setValue] = useState(initialValue);

  const clickEvent = () => {
    console.log("clicked");
    window.open(url, "_blank");
  };

  const changeInput = (event) => {
    console.log(event);
    const inputValue = event.target.value;
    const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
    setValue((previousValue) => ({
      ...previousValue,
      name: inputValue,
      nameError: nameRegex.test(inputValue) ? "" : "Name is invalid",
    }));
  };

  return (
  <div>
    <Home/>
    <h1>Hello From {changeValue.name}</h1>
    <h2>Test React Application</h2>
    <input type="text" onChange={changeInput} />
    <input type='checkbox' onChange={changeInput}/>
    <span>{changeValue.nameError}</span>
    <img src={logo} alt='' onClick={clickEvent} />
    </div>
    );
}

export default App;
