// Chat.js
import React, { useState } from "react";

function Chat({ messages }) {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    // Handle sending the message, e.g., using a WebSocket or API call
    // Add the new message to the `messages` state
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <span className="username">{message.username}:</span> {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
