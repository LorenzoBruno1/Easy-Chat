import React, { useRef, useState, useMemo, useEffect } from 'react'
import '../App.css'
import MessageHist from './MessageHist'
import Send from '../assets/send.svg'
import ScrollToBottom from "react-scroll-to-bottom"

function Chat({ socket, username, room }) {

    const chatBodyRef = useRef(null);
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
  
    const sendMessage = async () => {
      if (currentMessage !== "") {
        const messageData = {
          room: room,
          author: username,
          message: currentMessage,
          time:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
        };
  
        await socket.emit("send_message", messageData);
        setMessageList((list) => [...list, messageData]);
        setCurrentMessage("");
      }
    };
  
    useMemo(() => {
      socket.on("receive_message", (data) => {
        setMessageList((list) => [...list, data]);
      });
    }, [socket]);

    useEffect(() => {
        // Scroll vers le bas chaque fois que le messageList est mis à jour
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
      }, [messageList]);
  
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
                        <MessageHist />
                        <MessageHist />
                        <MessageHist />
                        <MessageHist />
                    </div>
                </div>
                <div className="chat-container">
                    <div className="chat-header">
                        <span className="chat-header--name">John Doe</span>
                        <span className="chat-header--activity">Connecté il y'a 4 min</span>
                        <div className="chat-body" ref={chatBodyRef}>  
                            {messageList.map((messageContent) => {
                                return (
                                    <div className="message" key={messageContent.id} id={username === messageContent.author ? "you" : "other"}>
                                        <div className="message-content">
                                            <div className="message-content-text">{messageContent.message}</div>
                                        </div>  
                                        <div className="message-meta">
                                            <p className='message-meta-author'>{messageContent.author}</p>
                                            <p className='message-meta-time'>{messageContent.time}</p>
                                        </div>
                                    </div>
                            
                                    );
                            })} 
                        </div>
                    </div>
                    <div className="message-input--container">
                        <input
                            type='text' value={currentMessage} placeholder='Envoyer un message' className="message-input" onChange={(event) => {
                                setCurrentMessage(event.target.value);
                            }} 
                            onKeyDown={(event) => {        
                                if (event.key === "Enter") {
                                sendMessage();}
                            }}></input>
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