import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const [display,setDisplay]=useState(false)

  const submitHandler = () => {
    if (input == "") return;
    if (tasklist == []) return;
    
    setTasklist([...tasklist,input]);
    setDisplay(true)
    console.log(tasklist);
    setInput("");
  };

  const deleteHandler = (ind) => {
    console.log("event")
    if(!tasklist){
      setTasklist([])
      console.log("hit")
      setDisplay(false)
      console.log("display",display)
      return;
    }
    setTasklist([
      tasklist.filter((item, index) => {
        if (index != ind) {
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
      {!display? (
        <div>
          <h1>No items...</h1>
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
