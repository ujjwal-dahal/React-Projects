import Button from "./Button";
import "../style/InputBox.css";
import { useState } from "react";

function InputBox({ itemList }) {
  const [data, setData] = useState("");
  const [message, setMessage] = useState(null);

  function displayResult() {
    let found = false;
    itemList.forEach((item)=>{
      let objectKey = Object.keys(item)[0]
      
      let lowerObjectKey = objectKey.toLowerCase()
      let searchData = data.toLowerCase()

      if(lowerObjectKey == searchData){
        found = true;
        let availability = item[objectKey]

        setMessage(
          availability === 1? <h3>Product Available</h3> : <h3> Out of Stock</h3>
        )
      }

      !found && setMessage(<h3> Product is not in our list </h3>)

    })
  }
  return (
    <>
      <div className="semi-container">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <Button clickButton={displayResult} />
      </div>
      {message}
    </>
  );
}

export default InputBox;
