import React from 'react';
import { Bot, User } from 'lucide-react';

export function ChatMessage({ content, isBot, timestamp }) {
  return (
    <div className={`flex items-start gap-4 mb-6 ${
      isBot ? 'bg-gray-800' : ''
    } p-4 rounded-lg`}>
      <div className={`p-2 rounded-lg ${
        isBot ? 'bg-green-600' : 'bg-blue-600'
      }`}>
        {isBot ? <Bot size={20} /> : <User size={20} />}
      </div>
      <div className="flex-1">
        <div className="prose prose-invert">
          <p className="text-gray-100">{content}</p>
        </div>
        <span className="text-xs text-gray-500 mt-2 block">
          {timestamp.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}