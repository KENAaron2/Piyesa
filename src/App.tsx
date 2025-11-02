import { useState } from 'react';
import { ChatInterface } from './components/ChatInterface';
import { Sidebar } from './components/Sidebar';
import { Wrench } from 'lucide-react';

export default function App() {
  const [conversations, setConversations] = useState([
    { id: '1', title: 'Brake pad replacement help', timestamp: new Date(2025, 9, 30) },
    { id: '2', title: 'Oil filter for Honda Civic', timestamp: new Date(2025, 9, 29) },
  ]);
  const [activeConversationId, setActiveConversationId] = useState<string>('1');

  const handleNewConversation = () => {
    const newConv = {
      id: Date.now().toString(),
      title: 'New conversation',
      timestamp: new Date(),
    };
    setConversations([newConv, ...conversations]);
    setActiveConversationId(newConv.id);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        conversations={conversations}
        activeId={activeConversationId}
        onSelectConversation={setActiveConversationId}
        onNewConversation={handleNewConversation}
      />
      <div className="flex-1 flex flex-col min-h-0">
        <header className="bg-white border-b px-6 py-4 flex items-center gap-3 flex-shrink-0">
          <Wrench className="w-6 h-6 text-blue-600" />
          <div>
            <h1>AutoParts AI Assistant</h1>
            <p className="text-gray-500 text-sm">ML-Powered Auto Parts Recommendations</p>
          </div>
        </header>
        <ChatInterface conversationId={activeConversationId} />
      </div>
    </div>
  );
}
