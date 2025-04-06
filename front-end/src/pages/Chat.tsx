import React from 'react';
import { Send } from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = React.useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hello! I'm your insurance assistant. How can I help you understand your coverage options?", isUser: false }
  ]);
  const [input, setInput] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 h-[calc(100vh-4rem)]">
      <div className="bg-white rounded-lg shadow-lg h-full flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-secondary-900">Insurance Assistant</h2>
          <p className="text-secondary-500">Ask me anything about insurance terms or plans</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-sm rounded-lg p-3 ${
                  message.isUser
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-secondary-900'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="bg-primary-600 text-white rounded-lg px-4 py-2 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;