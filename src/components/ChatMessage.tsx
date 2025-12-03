import { User, ScanSearch } from 'lucide-react';
import { Message } from './types';
import { PartCard } from './PartCard';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'justify-end' : ''}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
          AI
        </div>
      )}
      <div className={`flex-1 max-w-2xl ${isUser ? 'flex justify-end' : ''}`}>
        <div className={`rounded-lg px-4 py-3 ${
          isUser 
            ? 'bg-blue-600 text-white' 
            : 'bg-white shadow-sm'
        }`}>
          {message.image && (
            <div className="mb-3">
              <img
                src={message.image}
                alt="Uploaded part"
                className="max-w-full max-h-64 rounded-lg"
              />
            </div>
          )}
          {message.imageAnalysis && (
            <div className="mb-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-2">
                <ScanSearch className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-900 mb-1">Image Analysis:</p>
                  <p className="text-sm text-gray-700">{message.imageAnalysis}</p>
                </div>
              </div>
            </div>
          )}
          <div className="whitespace-pre-wrap text-sm leading-relaxed">
            {message.content.split(/(\*\*.*?\*\*)/g).map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i}>{part.slice(2, -2)}</strong>;
              }
              return <span key={i}>{part}</span>;
            })}
          </div>
          {message.parts && message.parts.length > 0 && (
            <div className="mt-4 space-y-3">
              {message.parts.map((part) => (
                <PartCard key={part.id} part={part} />
              ))}
            </div>
          )}
        </div>
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white flex-shrink-0">
          <User className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}
