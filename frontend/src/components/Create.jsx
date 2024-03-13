import React, { useState, useRef } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState([]);
  const inputRef = useRef(null);

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => {
        setTask("");
        inputRef.current.focus();

        // location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="create_form">
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handleAdd}>Add todo</button>
    </div>
  );
};

export default Create;
