import React, { useState } from 'react'

function Chat({socket, username, room}) {

    const [currentMessage, setCurrentMessage] = useState("");

    const sendMessage = async () => {
        if (currentMessage !== ""){
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time:
                new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            }

            await socket.emit("send_message",messageData);
        }
    }

  return (
    <div>
        <div className="text-input">
            <input 
            type='text' placeholder='Envoyer un message' onChange={(event) =>{
                setCurrentMessage(event.target.value);
                }}/>
            
            <button onClick={sendMessage}>Envoyer</button>
        </div>
    </div>
  )
}

export default Chat