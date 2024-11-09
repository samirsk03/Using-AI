import React, { useState, useRef, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { ChatMessage } from './ChatMessege';
import { ChatInput } from './ChatInput';

function ChatBotLayout() {
  const [messages, setMessages] = useState([
    {
      content: "Hello! I'm your AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content) => {
    const userMessage = {
      content,
      isBot: false,
      timestamp: new Date(),
    };

    const botMessage = {
      content: "I'm a frontend demo, but in a real app, I would process your message and respond intelligently!",
      isBot: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);

    console.log(messages);
    
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-3xl mx-auto">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                content={message.content}
                isBot={message.isBot}
                timestamp={message.timestamp}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default ChatBotLayout;