import React from 'react';
import { Sparkles } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="hidden md:flex md:w-[260px] bg-gray-800 flex-col p-4">
      <button className="flex items-center gap-2 w-full px-4 py-3 rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors">
        <Sparkles size={16} />
        <span>New Chat</span>
      </button>
      
      <div className="mt-4 flex-1 overflow-y-auto">
        {/* Chat history would go here */}
      </div>
    </div>
  );
}