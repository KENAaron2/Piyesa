import { useState, useEffect } from 'react';
import { ChatInterface } from './components/ChatInterface';
import { Sidebar, Conversation } from './components/Sidebar';
import { Wrench } from 'lucide-react';
import { generateAIResponse } from './components/ai-logic';
import { DEFAULT_WELCOME_MESSAGE } from './components/DefaultMessage';
import { Message } from './components/types';

const MAX_CONVERSATIONS = 30;

export default function App() {
  // Initialize conversations
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
  
  // Store messages for all conversations
  const [messagesStore, setMessagesStore] = useState<Record<string, Message[]>>({
    '1': [
      {
        id: 'init-1',
        role: 'assistant',
        content: DEFAULT_WELCOME_MESSAGE,
        timestamp: new Date(2025, 9, 30)
      }
    ]
  });

  const [typingConversationId, setTypingConversationId] = useState<string | null>(null);

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
      
      const newConversations = [...pinnedConvs, ...keptUnpinned];
      setConversations(newConversations);

      // Cleanup message store
      const keptIds = new Set(newConversations.map(c => c.id));
      setMessagesStore(prev => {
        const newStore = { ...prev };
        Object.keys(newStore).forEach(key => {
          if (!keptIds.has(key)) {
            delete newStore[key];
          }
        });
        return newStore;
      });
    }
  }, [conversations.length]);

  const handleNewConversation = () => {
    const newId = Date.now().toString();
    const newConv: Conversation = {
      id: newId,
      title: 'New conversation',
      timestamp: new Date(),
      isPinned: false,
    };
    
    setConversations([newConv, ...conversations]);
    setMessagesStore(prev => ({
      ...prev,
      [newId]: [{
        id: Date.now().toString(),
        role: 'assistant',
        content: DEFAULT_WELCOME_MESSAGE,
        timestamp: new Date()
      }]
    }));
    setActiveConversationId(newConv.id);
  };

  const handleDeleteConversation = (id: string) => {
    setConversations(conversations.filter(c => c.id !== id));
    
    // Remove messages for this conversation
    setMessagesStore(prev => {
      const newStore = { ...prev };
      delete newStore[id];
      return newStore;
    });
    
    // If we deleted the active conversation, switch to another one
    if (activeConversationId === id) {
      const remaining = conversations.filter(c => c.id !== id);
      if (remaining.length > 0) {
        setActiveConversationId(remaining[0].id);
      } else {
        // Create a new conversation if none left - but be careful not to recurse infinitely
        // Instead of calling handleNewConversation directly which depends on state, 
        // we'll just create the object here
        const newId = Date.now().toString();
        const newConv: Conversation = {
          id: newId,
          title: 'New conversation',
          timestamp: new Date(),
          isPinned: false,
        };
        setConversations([newConv]);
        setMessagesStore({
          [newId]: [{
            id: Date.now().toString(),
            role: 'assistant',
            content: DEFAULT_WELCOME_MESSAGE,
            timestamp: new Date()
          }]
        });
        setActiveConversationId(newId);
      }
    }
  };

  const handleTogglePin = (id: string) => {
    setConversations(conversations.map(c => 
      c.id === id ? { ...c, isPinned: !c.isPinned } : c
    ));
  };

  const handleSendMessage = (content: string, image: string | null) => {
    const currentId = activeConversationId;
    const timestamp = new Date();
    
    // User message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content || 'What part is this?',
      image: image || undefined,
      timestamp,
    };

    // Update store immediately
    setMessagesStore(prev => ({
      ...prev,
      [currentId]: [...(prev[currentId] || []), userMessage]
    }));

    // Update conversation timestamp/title (optional: could update title based on first message)
    setConversations(prev => prev.map(c => 
      c.id === currentId 
        ? { ...c, timestamp: new Date(), title: c.title === 'New conversation' ? (content.slice(0, 30) || 'New conversation') : c.title } 
        : c
    ));

    setTypingConversationId(currentId);

    // Simulate AI processing
    setTimeout(() => {
      const aiResponse = generateAIResponse(content, image);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse.message,
        parts: aiResponse.parts,
        imageAnalysis: aiResponse.imageAnalysis,
        timestamp: new Date(),
      };

      setMessagesStore(prev => ({
        ...prev,
        [currentId]: [...(prev[currentId] || []), assistantMessage]
      }));
      setTypingConversationId(null);
    }, 2000);
  };

  // Get messages for active conversation, fallback to welcome if something goes wrong
  const activeMessages = messagesStore[activeConversationId] || [];

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
            <h1>PIYESA</h1>
            <p className="text-gray-500 text-sm">Parts Identification and Yield-based Engine Search Assistant</p>
          </div>
        </header>
        <ChatInterface 
          messages={activeMessages} 
          onSendMessage={handleSendMessage}
          isTyping={typingConversationId === activeConversationId}
        />
      </div>
    </div>
  );
}
