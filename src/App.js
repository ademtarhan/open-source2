import './App.css';
import Buttons from './components/Buttons';
import React, { useState } from 'react';


function App() {
  const [numbers, setNumbers] = useState([0, ""]);
  const [operation, setOperation] = useState("");

  const reset = () => {
    setNumbers([0, ""]);
    setOperation("");
  }

  const handleClick = (e) => {
    let type = e.target.getAttribute("data-attr");
    if (type === "number") {
      if (operation === "") {
        if (numbers[0] === 0) {
          setNumbers([e.target.innerText, ""]);
        } else {
          setNumbers([numbers[0] + e.target.innerText, ""]);
        }
      } else {
        setNumbers([numbers[0], numbers[1] + e.target.innerText]);
      }
    }

    if (type === "opposite") {
      if (numbers[1] === "") {
        setNumbers([numbers[0] * -1, ""]);
      } else {
        setNumbers([numbers[0], numbers[1] * -1]);
      }
    }

    if (type === "percent") {
      setNumbers([numbers[0] / 100, ""]);
    }


    if (type === "operation") {
      setOperation(e.target.innerText);
    }

    if (type === "decimal") {
      if (numbers[1] === "") {
        if (!numbers[0].toString().includes("."))
          setNumbers([numbers[0] + ".", ""]);
      } else {
        if (!numbers[1].toString().includes("."))
          setNumbers([numbers[0], numbers[1] + "."]);
      }
    }

    if (type === "clear") {
      reset();
    }

    if (type === "equals") {
      if (operation !== "" && numbers[1] !== "") {
        switch (operation) {
          case "+":
            setNumbers([parseFloat(numbers[0]) + parseFloat(numbers[1]), ""]);
            break;
          case "-":
            setNumbers([parseFloat(numbers[0]) - parseFloat(numbers[1]), ""]);
            break;
          case "x":
            setNumbers([parseFloat(numbers[0]) * parseFloat(numbers[1]), ""]);
            break;
          case "/":
            setNumbers([parseFloat(numbers[0]) / parseFloat(numbers[1]), ""]);
            break;
          default:
            reset();
            break;
        }
        setOperation("");
      } else {
        setNumbers([numbers[0], ""]);
      }
    }


  }
  return (
    <div className="body">
    <h2>Version2</h2>
      <Buttons onClick={handleClick} numbers={numbers} operation={operation} />
    </div>
  );
}

export default App;
