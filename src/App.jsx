import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [tasklist, setTasklist] = useState([]);

  const submitHandler = () => {
    if (input == "") return;
    if (!tasklist) return;
    
    setTasklist([...tasklist,input]);
    console.log(tasklist);
    setInput("");
  };

  const deleteHandler = (ind) => {
    console.log("array is",tasklist)
    setTasklist(
      tasklist.filter((item, index) => {
        if (index != ind) {
          return item;
        }
      }),
    );
    setInput("");
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <div className="heading">
          <h1>Let's Finish What You Have <i
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
              setInput(e.target.value.toUpperCase());
            }}
          />
          <button className="btn" onClick={submitHandler}>
            Add
          </button>
        </div>
      </div>
      {tasklist.length==0? (
        <div>
          <h1>No Pending Tasks ...</h1>
        </div>
      ) : (
        
          tasklist.map((item, index) => {
            return (
              <div className="list-row" key={index}>
                <p className="item">{item}</p>
                <button
                  value={index}
                  className="del-btn"
                  onClick={(e)=>{deleteHandler(index)}}
                >
                  delete{console.log(tasklist)}
                </button>
              </div>
            );
          })
        
      )}
    </div>
  );
};

export default App;
