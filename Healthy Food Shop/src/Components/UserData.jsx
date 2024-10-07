import ClickButton from "./ClickButton";
import styles from "../Style/UserData.module.css";
import { useState } from "react";

function UserData({element , index, deleteItem}) {

  let [btnClicked , setBtnClicked] = useState(false)

  function changeTitle(){
    setBtnClicked(true)
  }

  return (
    <>
      <div className="row" key={index} >
        <div className="col-6">
          <h5 className={styles["item-name"]}>{ element }</h5>
        </div>
        <div className="col-6">
          <ClickButton  buttonName={ btnClicked? "Bought" : "Buy" } tag={btnClicked? "warning":"primary"} clickBtn = {changeTitle} />

          <ClickButton  buttonName="Delete" tag="danger" clickBtn = {deleteItem} />
        </div>
      </div>
    </>
  );
}

export default UserData;
