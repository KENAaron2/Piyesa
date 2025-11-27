import { ExternalLink, Star, CheckCircle, Package, ShoppingCart, TrendingDown } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { AutoPart } from './types';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PartCardProps {
  part: AutoPart;
}

export function PartCard({ part }: PartCardProps) {
  const lowestPrice = Math.min(...part.shopOptions.map(s => s.price));
  const hasInStock = part.shopOptions.some(s => s.inStock);

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
              <div className="flex items-center gap-1">
                <TrendingDown className="w-3 h-3 text-green-600" />
                <p className="text-gray-900">${lowestPrice.toFixed(2)}</p>
              </div>
              <p className="text-xs text-gray-500">Best price</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-700">{part.rating}</span>
            </div>
            {hasInStock && (
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

          <div className="space-y-2">
            <p className="text-xs text-gray-500">Available at {part.shopOptions.length} retailers:</p>
            <div className="grid grid-cols-2 gap-2">
              {part.shopOptions.slice(0, 4).map((shop) => (
                <a
                  key={shop.shopName}
                  href={shop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2 bg-white rounded border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors group"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 truncate">{shop.shopName}</p>
                    <p className="text-xs text-gray-500">{shop.shipping || 'Check shipping'}</p>
                  </div>
                  <div className="flex items-center gap-2 ml-2">
                    <span className="text-sm text-gray-900">${shop.price.toFixed(2)}</span>
                    <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-600" />
                  </div>
                </a>
              ))}
            </div>
            {part.shopOptions.length > 4 && (
              <p className="text-xs text-gray-500 text-center">
                +{part.shopOptions.length - 4} more option{part.shopOptions.length - 4 > 1 ? 's' : ''} available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
