import React, {useState}from "react";
import axios from "axios";

const LOCAL_API_URL = "http://localhost:3000/posts";

const ToDoListForm = ({ setTodoList }) => {
  const [inputState, setInputState] = useState("");

  const handleInput = (event) => {
    setInputState(event.target.value); 
  };

  const handleSubmit = async () => {
    if (inputState.trim() === "") {
      return; 
    } 
    const response = await axios.post(`${LOCAL_API_URL}`, {text: inputState, completed: false});     
    const newTodo = {
      id: response.data.id,      
      text: response.data.text,
      completed: response.data.completed   
    };
    setTodoList((prev) => [...prev, newTodo]);
    setInputState("");
  };
  
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      marginTop: "100px"}}>
      
      <input style={{
              fontSize: "1rem",
              padding: "5px",
              border: "2px solid hsla(0, 0%, 80%, 0.5)",
              borderRadius: "3px",
              color: "hsla(0, 20%, 0%, 0.5)",}} 
              placeholder= "Enter To Do" type="text" id="text" name="text" onChange={handleInput} />
      <button style={{
        fontSize: "1rem",
        padding: "5px",
        border: "2px solid hsla(0, 0%, 80%, 0.5)",
        borderRadius: "3px",
        backgroundColor: "green",
        color: "#fff",
      }} onClick={handleSubmit}>Submit</button>
    </div>
  ); 
};

export default ToDoListForm;
