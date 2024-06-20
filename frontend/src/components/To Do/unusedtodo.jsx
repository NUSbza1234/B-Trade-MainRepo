import React, { useState } from 'react'

import { TfiRulerPencil } from "react-icons/tfi"


const Todo = () => {

    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    function addTask() {
        if (inputBox.value === '') {
            alert("You must write something!!!");
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        inputBox.value = "";
        saveData();
    }
    
    listContainer.addEventListener("click", function(e){
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
        listContainer.innerHTML = localStorage.getItem("data");
    }

    showTask();

  return (
    <div>
        <div className='app-container'>
            <div className='todo-app'>
                <h2>To-Do List <TfiRulerPencil className='todo-icon'/></h2>
                <div className="row-inpbut">
                    <input className='input-area' type='text' id='input-box' placeholder='Add your reminder/to-do'/>
                    <button className='add-button' onClick={addTask}>Add to list...</button>
                </div>

                <ul id='list-container' className='my-list'>
                    {/*<li className='checked'>Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li>*/}
                </ul>

            </div>
        </div>
    </div>
  )
}

