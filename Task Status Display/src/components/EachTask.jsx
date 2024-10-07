import Button from "./Button";
import "../style/EachTask.css";

function EachTask(props) {
  let dataArray = props.listData;
  return (
    <>
      {dataArray.map((item, index) => {
        const { task, taskStatus } = item;
        return (
          <div class="row semi-container" key={index}>
            <div class="col-5">{task}</div>
            <div class="col-4">{taskStatus}</div>
            <div class="col-2">
              <Button
                title="Delete"
                tags="danger"
                clickFunction={() => props.deleteList(index)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default EachTask;
