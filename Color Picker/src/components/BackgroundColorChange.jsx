import { useState } from "react";
import Btn from "./Btn";

function BackgroundColorChange() {
  const [color, setColor] = useState("");
  const [clickBtn, setClickBtn] = useState(false);
  const [bgcolor, setBgcolor] = useState("");

  function handleEvent(event) {
    try {
      let color = event.target.value;
      let colorLowercase = color.toLowerCase();
      setColor(colorLowercase);
    } catch (error) {
      console.log(error);
    }
  }

  function changeBackground() {
    setClickBtn(true);
    setBgcolor(color);
  }

  let cssStyle = {
    height: "200px",
    width: "200px",
    margin: "20px 0px 20px 0px",
    border: "1px solid black",
    borderRadius: "50%",
    backgroundColor: clickBtn ? bgcolor : "white",
    position : "relative",
    left : "41%",
  };

  let unclickedCss = {
    height: "200px",
    width: "200px",
    margin: "20px 0px 20px 0px",
    border: "1px solid black",
    borderRadius: "50%",
    backgroundColor: "transparent",
    position : "relative",
    left : "41%",
  };

  return (
    <>
      <div
        className="main-container"
        style={clickBtn == true ? cssStyle : unclickedCss}
      ></div>

      <input
        type="email"
        className="form-control"
        id=""
        placeholder="Enter Color Name"
        value={color}
        onChange={handleEvent}
      />
      <br></br>

      <Btn
        title="Change"
        clickButton={changeBackground}
        clickValue={clickBtn}
      />
    </>
  );
}

export default BackgroundColorChange;
