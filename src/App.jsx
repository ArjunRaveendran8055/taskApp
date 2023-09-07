import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [tasklist, setTasklist] = useState([]);

  const submitHandler = () => {
    if (input == "") return;
    if (tasklist == []) return;
    setTasklist([...tasklist, input]);
    console.log(tasklist);
    setInput("");
  };

  const deleteHandler = (e) => {
    setTasklist([
      tasklist.filter((item, index) => {
        if (index != e.target.value) {
          return item;
        }
      }),
    ]);
    setInput("");
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <div className="heading">
          <h1>Let's Finish What You Have!</h1>
        </div>
        <div className="add">
          <input
            className="input"
            type="text"
            value={input}
            placeholder="Enter task you wish to add...."
            onChange={(e) => {
              setInput(e.target.value.toUpperCase());
            }}
          />
          <button className="btn" onClick={submitHandler}>
            Add
          </button>
        </div>
      </div>
      {tasklist == "" ? (
        <div>
          <h1>No items...</h1>
        </div>
      ) : (
        <div className="list-main">
          {tasklist.map((item, index) => {
            return (
              <div className="list-row" key={index}>
                <p>{item}</p>
                <button
                  value={index}
                  className="del-btn"
                  onClick={deleteHandler}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
