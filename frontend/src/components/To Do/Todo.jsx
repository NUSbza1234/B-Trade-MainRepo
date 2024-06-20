import React, { useState, useEffect } from 'react';
import './Todo.css';
import { TfiRulerPencil } from "react-icons/tfi";

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim() === '') {
      alert("You must write something!!!");
      return;
    }
    setTasks([...tasks, { text: inputValue, checked: false }]);
    setInputValue("");
  };

  const toggleCheck = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className='app-container'>
      <div className='todo-app'>
        <h2>To-Do List <TfiRulerPencil className='todo-icon' /></h2>
        <div className="row-inpbut">
          <input
            className='input-area'
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Add your reminder/to-do'
          />
          <button className='add-button' onClick={addTask}>Add to list...</button>
        </div>
        <ul className='my-list'>
          {tasks.map((task, index) => (
            <li key={index} className={task.checked ? 'checked' : ''}>
              {task.text}
              <span onClick={() => deleteTask(index)}>&times;</span>
              <div onClick={() => toggleCheck(index)} className="check-task"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;


