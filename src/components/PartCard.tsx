import { ExternalLink, Star, CheckCircle, Package } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { AutoPart } from './ChatInterface';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PartCardProps {
  part: AutoPart;
}

export function PartCard({ part }: PartCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="flex gap-4">
        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
          <ImageWithFallback
            src={part.image}
            alt={part.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1">
              <h4 className="text-gray-900 line-clamp-1">{part.name}</h4>
              <p className="text-sm text-gray-600">{part.brand}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-900">${part.price.toFixed(2)}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-700">{part.rating}</span>
            </div>
            {part.inStock && (
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <CheckCircle className="w-3 h-3 mr-1" />
                In Stock
              </Badge>
            )}
            <Badge variant="outline" className="text-xs">
              <Package className="w-3 h-3 mr-1" />
              {part.confidence}% Match
            </Badge>
          </div>

          <p className="text-sm text-gray-600 mb-3">
            Compatible: {part.compatibility}
          </p>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <a href={part.shopUrl} target="_blank" rel="noopener noreferrer">
                View on {part.shopName}
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </Button>
            <span className="text-xs text-gray-500">from {part.shopName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
