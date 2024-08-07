
import { useState, useEffect } from "react";
import axios from 'axios';
import ToDoList from "../components/ToDoList";
import ToDoListForm from "../components/ToDoListForm";

const LOCAL_API_URL = "http://localhost:3000/posts";

const ToDoList2 = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await axios.get(`${LOCAL_API_URL}`);
      return setTodoList(response.data);

    };
    fetchTodo();

  });

  const handleDelete = async (id) => {
    try {
    await axios.delete(`${LOCAL_API_URL}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error)
  }
  };

  const handleToggleComplete = async (todo) => {

    try {
      const response = await axios.put(`${LOCAL_API_URL}/${todo.id}`, { ...todo, completed: !todo.completed });

      console.log(response)

      const updatedTodo = {
        id: response.data.id,
        text: response.data.text,
        completed: response.data.completed
      };

      setTodoList((prevTodoList) =>
        prevTodoList.map((todo) =>
          todo.id === response.data.id ? { ...todo, updatedTodo } : todo,
        )
      );
      return response


    } catch (error) {
      console.log(error)
    }

  }




  const handleEdit = async (id, newText) => {
    const response = await axios.put(`${LOCAL_API_URL}/${id}`, { text: newText, completed: false });
    const updatedTodo = {
      id: response.data.id,
      text: response.data.newText,
      completed: response.data.completed
    };
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo.id : todo
      )
    );
  }
  return (
    <div className="App">      
      <ToDoListForm setTodoList={setTodoList} />
      <ToDoList todoList={todoList} onDelete={handleDelete} onToggleComplete={handleToggleComplete} onEdit={handleEdit}/>
    </div>
  );
}


export default ToDoList2;
