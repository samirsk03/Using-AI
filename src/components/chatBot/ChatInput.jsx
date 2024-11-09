import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function ChatInput({ onSendMessage }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSendMessage(input);
    setInput('');
  };

  return (
    <div className="border-t border-gray-800 p-4">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message..."
            className="w-full bg-gray-800 rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-700 rounded-lg transition-colors"
            disabled={!input.trim()}
          >
            <Send
              size={20}
              className={input.trim() ? 'text-blue-500' : 'text-gray-600'}
            />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          AI Assistant is in demo mode. Responses are simulated.
        </p>
      </form>
    </div>
  );
}