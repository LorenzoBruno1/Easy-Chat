import './App.css';
import io from 'socket.io-client'
import React, { useState } from 'react'
import Chat from './components/Chat'

const socket = io.connect("http://localhost:3001")

function App() {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [showForm, setShowForm] = useState(true); // Nouvel état pour contrôler l'affichage du formulaire

  const joinRoom = () => {
    if(username !== "" && room !== ""){
      socket.emit("join_room", room);
      setIsFormFilled(true);
      setShowForm(false); // Cacher le formulaire lorsque le composant Chat est affiché
    }
  }

  return (
    <div className="App">
      {showForm && ( // Utiliser showForm pour conditionnellement rendre le formulaire
        <div>
          <h3>Join a chat !</h3>
          <input type="text" placeholder="John" onChange={(event) =>{
            setUsername(event.target.value)}}>
          </input>
          <input type="text" placeholder="Room 1" onChange={(event) =>{
            setRoom(event.target.value)}}>
          </input>
          <button onClick={joinRoom}>Join a room</button>
        </div>
      )}

      {isFormFilled && <Chat socket={socket} username={username} room={room}/>}

    </div>
  );
}

export default App;