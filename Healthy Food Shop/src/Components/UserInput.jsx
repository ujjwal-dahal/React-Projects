import ClickButton from "./ClickButton";
import styles from "../Style/UserInput.module.css";

const UserInput = (props) => {
  return (
    <>
      <div className={`row  ${styles["input-container"]}`}>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            id=""
            value={props.inputValue}
            placeholder="Enter Product Name"
            onChange={props.userData}
            onKeyDown={props.keyClicked}
          />
        </div>
        <div className="col-6">
          <ClickButton buttonName="Add Item" tag="success" clickBtn = {props.clickBtn} />
        </div>
      </div>
    </>
  );
};

export default UserInput;
