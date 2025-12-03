import { Plus, MessageSquare, Trash2, Pin, PinOff, Wrench } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

export interface Conversation {
  id: string;
  title: string;
  timestamp: Date;
  isPinned?: boolean;
}

interface SidebarProps {
  conversations: Conversation[];
  activeId: string;
  onSelectConversation: (id: string) => void;
  onNewConversation: () => void;
  onDeleteConversation: (id: string) => void;
  onTogglePin: (id: string) => void;
}

export function Sidebar({ 
  conversations, 
  activeId, 
  onSelectConversation, 
  onNewConversation,
  onDeleteConversation,
  onTogglePin 
}: SidebarProps) {
  // Separate pinned and unpinned conversations
  const pinnedConversations = conversations.filter(c => c.isPinned);
  const unpinnedConversations = conversations.filter(c => !c.isPinned);

  const ConversationItem = ({ conv }: { conv: Conversation }) => (
    <div
      className={`group relative rounded-lg transition-colors ${
        activeId === conv.id
          ? 'bg-gray-800'
          : 'hover:bg-gray-800'
      }`}
    >
      <button
        onClick={() => onSelectConversation(conv.id)}
        className="w-full text-left px-3 py-2 rounded-lg"
      >
        <div className="flex items-start gap-2">
          <MessageSquare className="w-4 h-4 mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0 pr-12">
            <p className="text-sm truncate">{conv.title}</p>
            <p className="text-xs text-gray-400">
              {conv.timestamp.toLocaleDateString()}
            </p>
          </div>
        </div>
      </button>
      
      {/* Action buttons - appear on hover */}
      <div className="absolute right-2 top-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onTogglePin(conv.id);
          }}
          className="p-1 hover:bg-gray-700 rounded"
          title={conv.isPinned ? 'Unpin' : 'Pin'}
        >
          {conv.isPinned ? (
            <PinOff className="w-3.5 h-3.5 text-yellow-400" />
          ) : (
            <Pin className="w-3.5 h-3.5 text-gray-400" />
          )}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (confirm('Delete this conversation?')) {
              onDeleteConversation(conv.id);
            }
          }}
          className="p-1 hover:bg-red-600 rounded"
          title="Delete"
        >
          <Trash2 className="w-3.5 h-3.5 text-gray-400 hover:text-white" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col h-full flex-shrink-0">
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-800 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
            <Wrench className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-sm tracking-wide font-bold">PIYESA</h2>
            <p className="text-xs text-gray-400">Parts Identification AI</p>
          </div>
        </div>
      </div>

      {/* New Chat Button */}
      <div className="p-4 border-b border-gray-800 flex-shrink-0">
        <Button
          onClick={onNewConversation}
          className="w-full bg-white text-gray-900 hover:bg-gray-100"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Chat
        </Button>
      </div>

      {/* Conversations List with ScrollArea */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <ScrollArea className="h-full px-2">
          <div className="space-y-4 py-4">
            {/* Pinned Conversations */}
            {pinnedConversations.length > 0 && (
              <div>
                <div className="px-3 mb-2">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Pinned</p>
                </div>
                <div className="space-y-1">
                  {pinnedConversations.map((conv) => (
                    <ConversationItem key={conv.id} conv={conv} />
                  ))}
                </div>
              </div>
            )}

            {/* Regular Conversations */}
            {unpinnedConversations.length > 0 && (
              <div>
                {pinnedConversations.length > 0 && (
                  <div className="px-3 mb-2">
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Recent</p>
                  </div>
                )}
                <div className="space-y-1">
                  {unpinnedConversations.map((conv) => (
                    <ConversationItem key={conv.id} conv={conv} />
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {conversations.length === 0 && (
              <div className="px-3 py-8 text-center text-gray-500 text-sm">
                <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No conversations yet.</p>
                <p className="text-xs mt-1">Start a new chat to begin!</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Footer Info */}
      <div className="p-4 border-t border-gray-800 flex-shrink-0">
        <p className="text-xs text-gray-500 text-center">
          {conversations.length} / 30 conversations
        </p>
      </div>
    </div>
  );
}