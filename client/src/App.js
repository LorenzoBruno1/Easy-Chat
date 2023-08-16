import './App.css';
import io from 'socket.io-client'
import React, { useState } from 'react'
import Chat from './components/Chat'

const socket = io.connect("http://localhost:3001")

function App() {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [showForm, setShowForm] = useState(true); 

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setIsFormFilled(true);
      setShowForm(false); 
    }
  }

  return (
    <div className="App">
      {showForm && ( 
        <div className='login-page-container'>
          <h3 className='login-page-title'>EASY CHAT <span className="registered-trademark">®️</span></h3>
          <div className='form-container'>
            <div className='input-container'>
              <input type="text" placeholder="John" className='login-input' onChange={(event) => {
                setUsername(event.target.value)
              }} />
            </div>
            <div className='input-container'>
              <input type="text" placeholder="Room 1" className='login-input' onChange={(event) => {
                setRoom(event.target.value)
              }} />
            </div>
            <div className='login-btn-container'>
              <button className='login-btn' onClick={joinRoom}>Join room 🥏</button>
            </div>
          </div>
        </div>
      )}

      {isFormFilled && <Chat socket={socket} username={username} room={room} />}

    </div>
  );
}

export default App;