import UserData from "./UserData";
import UserInput from "./UserInput";
import { useState } from "react";

function MainScreen() {
  let [foodItem, setFoodItem] = useState([]);
  let [item, setItem] = useState("");

  function userData(event) {
    setItem(event.target.value);
  }

  function addButton(item) {
    if (item) {
      let newArray = [...foodItem, item];
      setFoodItem(newArray);
      setItem("");
    }
  }

  function enterBtnClicked(event) {
      if (item && event.key == "Enter") {
        let newArray = [...foodItem, item];
        setFoodItem(newArray);
        setItem("");
      
    }
  }

  function deleteItem(index){

    let newArray = foodItem.filter((_ , i)=>{
      return index!=i
    })

    setFoodItem(newArray)

  }

  return (
    <>
      <div className="main-screen">
        <center>
          <h1>Healthy Food Shop</h1>
          <UserInput
            userData={userData}
            inputValue={item}
            clickBtn={() => addButton(item)}
            keyClicked={enterBtnClicked}
          />
          {foodItem.map((element, index) => {
            return <UserData element={element} index={index} deleteItem = {()=>deleteItem(index)} />;
          })}
        </center>
      </div>
    </>
  );
}

export default MainScreen;
