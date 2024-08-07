import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
  return (
    <div className='home-page'>
        <h1>My Todo List</h1>
        <button style={{
            fontSize: "2rem",
            padding: "5px",
            border: "2px solid hsla(0, 0%, 80%, 0.5)",
            borderRadius: "5px",
            backgroundColor: "green",
            color: "white",
            alignSelf: "center",
            cursor: "pointer"
        }} onClick={()=> navigate('/ToDoListForm')}>
            Click me
        </button>
    </div>

  )
}

export default HomePage;



