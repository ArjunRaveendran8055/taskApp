import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const [textstatus, setTextstatus] = useState(true);
  const submitHandler = () => {
    if (input == "") {
      setTextstatus(false);
      alert("Please enter a task")
      return;
    }
    if (!tasklist) return;
    setTasklist([...tasklist, { task: input, complete: false }]);
    setInput("");
  };

  const deleteHandler = (ind) => {
    setTasklist(
      tasklist.filter((item, index) => {
        if (index != ind) {
          return item;
        }
      })
    );
    setInput("");
  };

  const onChangeHandler = (e) => {
    setTextstatus(true);
    setInput(e.target.value.toUpperCase());
  };

  const taskCompletionHandler = (ind) => {
    const newArray = tasklist.map((item, index) => {
      if (index == ind) {
        console.log("hitt");
        return { ...item, complete: !item.complete };
      }
      return item
    });
    setTasklist(newArray)
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <div className="heading">
          <h1>
            Let's Finish What You Have
            <i
              className="fa-solid fa-cart-arrow-down fa-shake"
              style={{ color: "#07065a" }}
            />
          </h1>
        </div>
        <div className="add">
          <input
            className="input"
            type="text"
            value={input}
            placeholder="Enter task you wish to add...."
            onChange={(e) => {
              onChangeHandler(e);
            }}
            style={{ background: textstatus ? "white" : "#FFCCCB" }}
          />
          <button className="btn" onClick={submitHandler}>
            Add
          </button>
        </div>
      </div>
      {tasklist.length == 0 ? (
        <div>
          <h1>No Pending Tasks ...</h1>
        </div>
      ) : (
        tasklist.map((item, index) => {
          return (
            <div className="list-row" key={index}>
              <p
                className="item"
                style={{
                  textDecoration: item.complete ? "line-through" : "none",
                }}
              >
                {item.task}
              </p>
              <div className="btn-div">
                <button
                  className="check-btn"
                  onClick={(e) => {
                    taskCompletionHandler(index);
                  }}
                >
                  <i
                    className="fa-solid fa-square-check fa-2xl"
                    style={{ color: "#076e0e" }}
                  ></i>
                </button>
                <button
                  value={index}
                  className="del-btn"
                  onClick={(e) => {
                    deleteHandler(index);
                  }}
                >
                  <i
                    className="fa-solid fa-trash-can fa-lg"
                    style={{ color: "#f20707" }}
                  />
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default App;
