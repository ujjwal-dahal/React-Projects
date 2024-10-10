import { useRef, useState } from "react";
import styles from "../Styles/PasswordShowHide.module.css"

function PasswordShowHide() {
  let [btnName, setBtnName] = useState("Show");
  let [btnControl, setBtnControl] = useState(false);
  let refInputBox = useRef();

  function changePasswordType() {
    if (btnControl == false) {
      refInputBox.current.type = "text";
      setBtnName("Hide");
      setBtnControl(true);
    } else {
      refInputBox.current.type = "password";
      setBtnName("Show");
      setBtnControl(false);
    }
  }

  return (
    <>
    <h1>Password Show Hide</h1>
      <div className={styles["main-container"]}>
        <input className={styles["input-box"]} type="password" ref={refInputBox} placeholder="Enter Password" />
        <button className={styles["btn"]} onClick={changePasswordType}>{btnName}</button>
      </div>
    </>
  );
}

export default PasswordShowHide;
