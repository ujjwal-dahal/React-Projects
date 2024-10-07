import Button from "./components/Button";
import "./App.css";
import { useState } from "react";

function App() {
  let calculatorCharacters0 = ["C", "(", ")", "B"];
  let calculatorCharacters1 = [7, 8, 9, "x"];
  let calculatorCharacters2 = [4, 5, 6, "-"];
  let calculatorCharacters3 = [1, 2, 3, "+"];
  let calculatorCharacters4 = ["/", 0, ".", "="];

  const [enterValue, setEnterValue] = useState([]);
  const [result, setResult] = useState("");
  const [resultClick, setResultClick] = useState(false);

  function clickNumber(number) {
    let newArray = [...enterValue, number];
    setEnterValue(newArray);
  }

  function evaluateData() {
    try {
      let expression = enterValue.join("").replace("x", "*");
      let calculatedResult = eval(expression);
      setResult(calculatedResult);
      setResultClick(true);
    } catch (error) {
      setResult("Error");
    }
  }

  function removeLastElement() {
    let newArray = [...enterValue];
    newArray.pop();
    setEnterValue(newArray);
  }

  function clearAllData() {
    setEnterValue([]);
    setResult("");
    setResultClick(false);
  }

  function handleClick(item) {
    if (item === "=") {
      evaluateData();
    } else if (item == "C") {
      clearAllData();
    } else if (item == "B") {
      removeLastElement();
    } else {
      setResultClick(false);
      clickNumber(item);
    }
  }

  function finalResult() {
    if (resultClick) {
      return result;
    } else {
      return enterValue.join("");
    }
  }

  // console.log(finalResult());

  return (
    <>
    
    <center><h1 className="title-name">ujjwal calculator</h1></center>
      <div className="main-container">
        <input type="text" value={finalResult()} readOnly />

        <div className="semi-container">

          {calculatorCharacters0.map((item, index) => (
            <Button
              title={item}
              clickNumber={() => handleClick(item)}
              key={index}
              className = { item =="B" ? "greenButton" : null }
              id = { item =="C" ? "redButton" : null }
            />
          ))}
        </div>

        <div className="semi-container">
          {calculatorCharacters1.map((item, index) => (
            <Button
              title={item}
              clickNumber={() => handleClick(item)}
              key={index}
            />
          ))}
        </div>

        <div className="semi-container">
          {calculatorCharacters2.map((item, index) => (
            <Button
              title={item}
              clickNumber={() => handleClick(item)}
              key={index}
            />
          ))}
        </div>
        <div className="semi-container">
          {calculatorCharacters3.map((item, index) => (
            <Button
              title={item}
              clickNumber={() => handleClick(item)}
              key={index}
            />
          ))}
        </div>
        <div className="semi-container">
          {calculatorCharacters4.map((item, index) => (
            <Button
              title={item}
              clickNumber={() => handleClick(item)}
              key={index}
              className={ item=="=" ? "greenButton" : null }
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
