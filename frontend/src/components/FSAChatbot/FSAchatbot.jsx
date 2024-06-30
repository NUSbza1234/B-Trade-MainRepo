import React, { useRef, useState } from 'react'
import './fsachatbot.css'
import Draggable from 'react-draggable'


const FSAchatbot = () => {
  const [minimized, setMinimized] = useState(false);
  const chatbotRef = useRef(null); // Ref to hold the Draggable component instance
  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  return (
    <Draggable nodeRef={chatbotRef}>
      <div ref={chatbotRef} className={`chatbot-wrapper ${minimized ? 'minimized' : ''}`}>
        <div className="chatbot-header">
          <button onClick={toggleMinimize}>
            {minimized ? 'Open Chatbot' : 'Minimize'}
          </button>
        </div>
        {!minimized && (
          <iframe
            src="https://fsa-chatbot-py.onrender.com/" // Replace with your Streamlit app URL
            title="FSAChatbot"
            className="chatbot-iframe"
            //frameBorder="0" frameBorder is deprecated in HTML5
          ></iframe>
        )}
        {minimized && <div className="minimized-bar">FSAChatbot</div>}

        {/*<div className="handle border-handle top-handle"></div>
        <div className="handle border-handle bottom-handle"></div>
        <div className="handle border-handle left-handle"></div>
        <div className="handle border-handle right-handle"></div>*/}

      </div>
    </Draggable>
  )
}

export default FSAchatbot

