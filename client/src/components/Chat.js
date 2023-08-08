import React, { useState } from 'react'
import '../App.css'
import MessageHist from './MessageHist'
import Send from '../assets/send.svg'

function Chat({ socket, username, room }) {

    const [currentMessage, setCurrentMessage] = useState("");

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            }

            await socket.emit("send_message", messageData);
        }
    }

    return (
        <div>
            <div className="fp-container">
                <div className="side-container">
                    <div className="search-bar-container">
                        <input type="text" id="search-input" placeholder="Rechercher" className="search-bar"></input>
                    </div>
                    <div className="message-components-container">
                    <MessageHist />
                    <MessageHist />
                    <MessageHist />
                    </div>
                </div>
                <div className="chat-container">
                        <div className="chat-header">
                            <span className="chat-header--name">John Doe</span>
                            <span className="chat-header--activity">Connecté il y'a 4 min</span>
                        </div>
                        <div className="message-input--container">
                    <input
                        type='text' placeholder='Envoyer un message' className ="message-input" onChange={(event) => {
                            setCurrentMessage(event.target.value);
                        }} ></input>
                        <button onClick={sendMessage} className="send-message--btn"><img src={Send} alt="send" className="send-icon"></img></button>
                    </div>
                </div>
                <div className="chat-details">
                    <div className="chat-details-header">
                        <span className="chat-details-text">Détails du chat</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat