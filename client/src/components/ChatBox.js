import React, { useState } from 'react';

function ChatBox() {
    const [messages, setMessages] = useState([{ user: "a", text: "enter city" }, { user: "a", text: "sq ?" }]);
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newMessage = {
            text: inputValue,
            user: 'current-user', // replace with actual user data
            timestamp: Date.now()
        };
        setMessages([...messages, newMessage]);
        setInputValue('');
    }

    return (
        <div>
            {messages.map((message, index) => (
                <div key={index}>
                    <strong>{message.user}: </strong>
                    {message.text}
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={inputValue} onChange={handleInputChange} />
                        <button type="submit">Send</button>
                    </form>
                </div>
            ))}
        </div>
    );
}

export default ChatBox;