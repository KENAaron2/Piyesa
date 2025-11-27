export interface ShopOption {
  shopName: string;
  price: number;
  url: string;
  inStock: boolean;
  shipping?: string;
}

export interface AutoPart {
  id: string;
  name: string;
  brand: string;
  compatibility: string;
  rating: number;
  image: string;
  confidence: number;
  shopOptions: ShopOption[];
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  parts?: AutoPart[];
  image?: string;
  imageAnalysis?: string;
  timestamp: Date;
}
