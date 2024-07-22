import React, { useState } from "react";

const ToDoList = ({ todoList, onDelete, onEdit, onToggleComplete }) => {
  const [editText, setEditText] = useState(""); // State to manage editing text
  const [editId, setEditId] = useState(null); // State to manage editing id

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleEdit = (id, newText) => {
    onEdit(id, newText);
    setEditId(null); 
    setEditText(""); 
  };

  const handleToggleComplete = (id) => {
    const todo = todoList.find(todo => todo.id === id);
    onToggleComplete(todo);
  };

  const handleEditInputChange = (event) => {
    setEditText(event.target.value);
  };

  const handleSave = (id) => {
    if (editText.trim() !== "") {
      handleEdit(id, editText);
      console.log({handleSave})
    }
  };

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      marginTop: "10px",
    }}>
      <h1>My Todo List 📝</h1>
      <div className="to-do-list">
        {todoList.map((todo) => (
          <div className="to-do"
            key={todo.id}
            
          >
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
              />
              {editId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditInputChange}
                />
              ) : (
                  <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                  {todo.text}
                </span>
              )}
            </div>
            <div>
              {editId === todo.id ? (
                <button
                  style={{
                    backgroundColor: "#008000",
                    color: "#fff",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: 5,
                  }}
                  onClick={() => handleSave(todo.id)}
                >
                  Save
                </button>
              ) : (
                <>
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "#fff",
                      padding: "10px 10px",
                      border: "none",
                      borderRadius: "5px",
                      marginRight: 5,
                      cursor: "pointer",
                    }}
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                  <button
                    style={{
                      backgroundColor: "blue",
                      color: "#fff",
                      padding: "10px 10px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setEditId(todo.id);
                      setEditText(todo.text);
                    }}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;

