import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsTrashFill,
} from "react-icons/bs";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/alltask")
      .then((result) => setTodos(result.data))
      .catch((error) => console.log(error));
  });
  const handleEdit = (id) => {
    // alert("hello");
    axios
      .put(`http://localhost:3001/edittask/${id}`)
      .then((result) => {
        // location.reload();
      })
      .catch((error) => console.log(error));
  };
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => {
        // location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="home">
      <h1>Todo App</h1>
      <Create />
      {todos.length === 0 ? (
        <h2>No Recored</h2>
      ) : (
        todos.map((todo) => (
          <div key={todo._id} className="task">
            <div className="checbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? (
                <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
              ) : (
                <BsCircleFill className="icon" />
              )}
              <p className={todo.done ? "line-through" : ""}>{todo.task}</p>
            </div>
            <div>
              <span className="delete">
                <BsTrashFill onClick={() => handleDelete(todo._id)} />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
