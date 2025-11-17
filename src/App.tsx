import { useState, useEffect } from 'react';
import { ChatInterface } from './components/ChatInterface';
import { Sidebar, Conversation } from './components/Sidebar';
import { Wrench } from 'lucide-react';

const MAX_CONVERSATIONS = 30;

export default function App() {
  const [conversations, setConversations] = useState<Conversation[]>([
    { 
      id: '1', 
      title: 'Brake pad replacement help', 
      timestamp: new Date(2025, 9, 30),
      isPinned: false 
    },
    { 
      id: '2', 
      title: 'Oil filter for Honda Civic', 
      timestamp: new Date(2025, 9, 29),
      isPinned: false 
    },
  ]);
  const [activeConversationId, setActiveConversationId] = useState<string>('1');

  // Auto-cleanup: Keep only 30 conversations, removing oldest unpinned ones
  useEffect(() => {
    if (conversations.length > MAX_CONVERSATIONS) {
      const pinnedConvs = conversations.filter(c => c.isPinned);
      const unpinnedConvs = conversations
        .filter(c => !c.isPinned)
        .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()); // Sort by newest first
      
      // Keep only the newest unpinned conversations
      const remainingSlots = MAX_CONVERSATIONS - pinnedConvs.length;
      const keptUnpinned = unpinnedConvs.slice(0, Math.max(0, remainingSlots));
      
      setConversations([...pinnedConvs, ...keptUnpinned]);
    }
  }, [conversations.length]);

  const handleNewConversation = () => {
    const newConv: Conversation = {
      id: Date.now().toString(),
      title: 'New conversation',
      timestamp: new Date(),
      isPinned: false,
    };
    setConversations([newConv, ...conversations]);
    setActiveConversationId(newConv.id);
  };

  const handleDeleteConversation = (id: string) => {
    setConversations(conversations.filter(c => c.id !== id));
    
    // If we deleted the active conversation, switch to another one
    if (activeConversationId === id) {
      const remaining = conversations.filter(c => c.id !== id);
      if (remaining.length > 0) {
        setActiveConversationId(remaining[0].id);
      } else {
        // Create a new conversation if none left
        handleNewConversation();
      }
    }
  };

  const handleTogglePin = (id: string) => {
    setConversations(conversations.map(c => 
      c.id === id ? { ...c, isPinned: !c.isPinned } : c
    ));
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar
        conversations={conversations}
        activeId={activeConversationId}
        onSelectConversation={setActiveConversationId}
        onNewConversation={handleNewConversation}
        onDeleteConversation={handleDeleteConversation}
        onTogglePin={handleTogglePin}
      />
      <div className="flex-1 flex flex-col min-h-0 min-w-0">
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