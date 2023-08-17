import React from 'react'
import icon1 from '../assets/icon1.jpg'

function MessageHist({lastMessage, room}) {
  return (
    <div>
        <div className="message-hist-container">
            <div className="message-hist-container--img">
                <img src={icon1} alt="icon" className="icon1-img" ></img>
            </div>
            <div className="message-hist-container--data">
                <span>{room}</span>
                <span className="message-hist-container--text">{lastMessage}</span>
            </div>
            <div className="message-hist-container--info">
            <span>Actif🟢</span>
            </div>
        </div>
    </div>
  )
}

export default MessageHist