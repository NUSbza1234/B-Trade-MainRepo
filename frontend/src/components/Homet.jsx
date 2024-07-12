import React, { useState } from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
//import Tradingviewwid from "./Tradingviewwidget/Tradingviewwid"
import Todo from './To Do/Todo'
import FSAchatbot from './FSAChatbot/FSAchatbot'

const Homet = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };  
  return (
    <div>

      <div className='header'>
        <h1>Welcome (name of user)</h1>
        <p>Created by me</p>
      </div>

      <div>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

              <ul className="navbar-nav gap-4">

                <li className="nav-item">
                  {/*<a class="nav-link active" aria-current="page" href="#">Home</a>*/}
                  <Link to="" className='btn btn-info'>Home</Link>
                </li>

                <li className="nav-item">
                  {/*<a class="nav-link" href="">About us</a>*/}
                  <Link to="/aboutus" className='btn btn-info'>About us</Link>
                </li>

                <li className="nav-item">
                  {/*<a class="nav-link" href="#">Stock Price Prediction</a>*/}
                  <Link to="" className='btn btn-info'>Stock Price Prediction</Link>
                </li>

                <li className="nav-item">
                  <Link to="/livenews" className='btn btn-info'>Live News Feed</Link>
                </li>

                <li className='nav-item'>
                  {/*<button onClick={toggleChatbot} className='btn btn-info'>
                    {showChatbot ? 'Close Chatbot' : 'Open Chatbot'}
                    {showChatbot && <FSAchatbot/>}
                  </button>*/}
                  <a className='btn btn-info' href='https://fsa-chatbot-py.onrender.com' target="_blank" rel="noopener noreferrer">Open Chatbot</a>
                </li>

                <li className='nav-item'>
                  <a className='btn btn-info' href='https://candlestickslpy.onrender.com' target="_blank" rel="noopener noreferrer">Open Technical Analysis</a>
                </li>

              </ul>

            </div>
          </div>
        </nav>

      </div>


      <div className="row">

        <div className="side">

          <h3>Reminders/To-Do</h3>
          <Todo className='todolist' />

        </div>

        <div className="main">

          <h3>Chart viewer</h3>
          <iframe
            src='https://candlestickslpy.onrender.com'
            title='Candlestick Chart'
            className='candlestick'
          ></iframe>

        </div>

      </div>

      <div>

        {/*<FSAchatbot/>*/}

      </div>

    </div>
  )
}

export default Homet