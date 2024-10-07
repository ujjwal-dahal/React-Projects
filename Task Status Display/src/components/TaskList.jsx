import Button from "./Button";
import "../style/TaskList.css";
import EachTask from "./EachTask";
import { useState } from "react";

function TaskList() {
  const [task, setTask] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [list, setList] = useState([]);

  function addData() {
    if (task && taskStatus) {
      let newList = [...list, { task, taskStatus }];
      setList(newList);
      setTask("");
      setTaskStatus("");
    }
  }

  function deleteList(index) {
    let newList = list.filter((_, i) => {
      return index != i;
    });
    setList(newList);
  }

  return (
    <>
      <div class="row main-container">
        <div class="col-5">
          {" "}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div class="col-4">
          {" "}
          <input
            type="text"
            className="form-control"
            placeholder="Status"
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
          />
        </div>
        <div class="col-2">
          <Button title="Add" tags="success" clickFunction={addData} />
        </div>
      </div>

      <EachTask listData={list} deleteList={deleteList} />
    </>
  );
}

export default TaskList;
