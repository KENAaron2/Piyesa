import { AutoPart } from './ChatInterface';

// Mock auto parts database with various parts
const partsDatabase: Omit<AutoPart, 'id' | 'confidence'>[] = [
  {
    name: 'Premium Ceramic Brake Pad Set',
    brand: 'Bosch',
    price: 89.99,
    compatibility: '2015-2020 Honda Civic',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
    shopUrl: 'https://www.rockauto.com',
    shopName: 'RockAuto',
    inStock: true,
  },
  {
    name: 'OEM Oil Filter',
    brand: 'Honda Genuine Parts',
    price: 12.99,
    compatibility: '2016-2023 Honda Civic',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400',
    shopUrl: 'https://www.autozone.com',
    shopName: 'AutoZone',
    inStock: true,
  },
  {
    name: 'Heavy Duty Air Filter',
    brand: 'K&N',
    price: 54.99,
    compatibility: '2012-2022 Honda Civic',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400',
    shopUrl: 'https://www.advanceautoparts.com',
    shopName: 'Advance Auto',
    inStock: true,
  },
  {
    name: 'Performance Spark Plugs (4-Pack)',
    brand: 'NGK',
    price: 34.99,
    compatibility: '2016-2021 Honda Civic',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400',
    shopUrl: 'https://www.oreillyauto.com',
    shopName: "O'Reilly Auto",
    inStock: true,
  },
  {
    name: 'Front Brake Rotor Set',
    brand: 'ACDelco',
    price: 129.99,
    compatibility: '2016-2020 Honda Civic',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400',
    shopUrl: 'https://www.rockauto.com',
    shopName: 'RockAuto',
    inStock: false,
  },
  {
    name: 'Synthetic Motor Oil 5W-30 (5qt)',
    brand: 'Mobil 1',
    price: 29.99,
    compatibility: 'Most Honda Models',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400',
    shopUrl: 'https://www.walmart.com/auto',
    shopName: 'Walmart',
    inStock: true,
  },
  {
    name: 'Cabin Air Filter',
    brand: 'FRAM',
    price: 19.99,
    compatibility: '2016-2023 Honda Civic',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400',
    shopUrl: 'https://www.autozone.com',
    shopName: 'AutoZone',
    inStock: true,
  },
  {
    name: 'Windshield Wiper Blade Set',
    brand: 'Rain-X',
    price: 24.99,
    compatibility: '2016-2023 Honda Civic',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400',
    shopUrl: 'https://www.advanceautoparts.com',
    shopName: 'Advance Auto',
    inStock: true,
  },
];

// ML-based recommendation algorithm (simulated)
function calculateConfidence(userQuery: string, part: Omit<AutoPart, 'id' | 'confidence'>): number {
  const query = userQuery.toLowerCase();
  let confidence = 70; // Base confidence

  // Check for part type mentions
  const partKeywords = part.name.toLowerCase().split(' ');
  partKeywords.forEach(keyword => {
    if (query.includes(keyword)) {
      confidence += 5;
    }
  });

  // Brand preference
  if (query.includes(part.brand.toLowerCase())) {
    confidence += 10;
  }

  // Compatibility matching
  const yearMatch = query.match(/\b(19|20)\d{2}\b/);
  if (yearMatch && part.compatibility.includes(yearMatch[0])) {
    confidence += 10;
  }

  // Stock availability bonus
  if (part.inStock) {
    confidence += 5;
  }

  // Rating bonus
  if (part.rating >= 4.7) {
    confidence += 5;
  }

  return Math.min(confidence, 98);
}

// Simulated image analysis using ML
function analyzeImage(imageData: string | null): string | null {
  if (!imageData) return null;

  // Simulate ML-based image recognition
  const imageTypes = [
    {
      keyword: 'brake',
      analysis: 'Detected: Brake pad/rotor system. Appears to show wear patterns typical of brake components. Estimated condition: moderate wear. Recommendation: replacement suggested within 3-6 months.',
      parts: ['brake']
    },
    {
      keyword: 'filter',
      analysis: 'Detected: Air or oil filter component. Cylindrical shape with filtration media visible. Condition: appears used/dirty. Recommendation: immediate replacement recommended.',
      parts: ['filter']
    },
    {
      keyword: 'spark',
      analysis: 'Detected: Spark plug. Metal body with ceramic insulator visible. Gap measurement appears standard. Condition: electrode wear detected. Recommendation: consider replacement.',
      parts: ['spark', 'plug']
    },
    {
      keyword: 'oil',
      analysis: 'Detected: Oil-related component (filter or container). Standard automotive oil part detected. Recommendation: follow manufacturer replacement intervals.',
      parts: ['oil']
    },
  ];

  // Randomly select one for demo purposes (in reality, this would be actual ML analysis)
  const randomType = imageTypes[Math.floor(Math.random() * imageTypes.length)];
  return randomType.analysis;
}

function extractPartTypeFromImage(imageData: string | null): string[] {
  if (!imageData) return [];
  
  // Simulate extracting part types from image
  const possibleTypes = ['brake', 'filter', 'spark', 'oil'];
  const detectedType = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
  return [detectedType];
}

export function generateAIResponse(
  userInput: string, 
  imageData?: string | null
): { message: string; parts?: AutoPart[]; imageAnalysis?: string } {
  const input = userInput.toLowerCase();
  const imageAnalysis = analyzeImage(imageData || null);
  const imagePartTypes = imageData ? extractPartTypeFromImage(imageData) : [];

  // Detect what kind of query this is (combine text and image analysis)
  const isBrakeQuery = input.includes('brake') || imagePartTypes.includes('brake');
  const isOilQuery = input.includes('oil') || imagePartTypes.includes('oil');
  const isFilterQuery = input.includes('filter') || imagePartTypes.includes('filter');
  const isSparkPlugQuery = input.includes('spark') || input.includes('plug') || imagePartTypes.includes('spark');
  const isWiperQuery = input.includes('wiper');
  const isGeneralQuery = input.includes('recommend') || input.includes('suggest') || input.includes('need');

  let message = '';
  let recommendedParts: AutoPart[] = [];

  if (isBrakeQuery) {
    const imagePrefix = imageData ? "Based on the uploaded image and your query, I've identified brake components. " : "";
    message = `${imagePrefix}I've found the best brake components for your vehicle using machine learning analysis:\n\n✓ Vehicle compatibility\n✓ Customer ratings and reviews\n✓ Price-performance ratio\n✓ Current availability\n\nHere are my top recommendations:`;
    
    const brakeParts = partsDatabase.filter(p => 
      p.name.toLowerCase().includes('brake')
    );
    recommendedParts = brakeParts.map((part, idx) => ({
      ...part,
      id: `part-${Date.now()}-${idx}`,
      confidence: calculateConfidence(userInput, part),
    })).sort((a, b) => b.confidence - a.confidence);

  } else if (isOilQuery) {
    const imagePrefix = imageData ? "Based on the uploaded image, I've detected an oil-related component. " : "";
    message = `${imagePrefix}I've analyzed the best oil options for your vehicle. My ML algorithm considers:\n\n✓ Manufacturer specifications\n✓ Climate conditions\n✓ Driving patterns\n✓ Cost efficiency\n\nTop picks:`;
    
    const oilParts = partsDatabase.filter(p => 
      p.name.toLowerCase().includes('oil')
    );
    recommendedParts = oilParts.map((part, idx) => ({
      ...part,
      id: `part-${Date.now()}-${idx}`,
      confidence: calculateConfidence(userInput, part),
    })).sort((a, b) => b.confidence - a.confidence);

  } else if (isFilterQuery) {
    const imagePrefix = imageData ? "From the image analysis, I've identified a filter component. " : "";
    message = `${imagePrefix}I've identified the optimal filters for your needs. My recommendations are based on:\n\n✓ Filtration efficiency\n✓ Longevity and durability\n✓ OEM compatibility\n✓ Value for money\n\nBest matches:`;
    
    const filterParts = partsDatabase.filter(p => 
      p.name.toLowerCase().includes('filter')
    );
    recommendedParts = filterParts.map((part, idx) => ({
      ...part,
      id: `part-${Date.now()}-${idx}`,
      confidence: calculateConfidence(userInput, part),
    })).sort((a, b) => b.confidence - a.confidence);

  } else if (isSparkPlugQuery) {
    const imagePrefix = imageData ? "The image shows what appears to be a spark plug. " : "";
    message = `${imagePrefix}Perfect! I've found the best spark plugs using advanced matching algorithms. Factors considered:\n\n✓ Engine compatibility\n✓ Performance characteristics\n✓ Heat range specifications\n✓ Brand reliability\n\nRecommended options:`;
    
    const sparkParts = partsDatabase.filter(p => 
      p.name.toLowerCase().includes('spark')
    );
    recommendedParts = sparkParts.map((part, idx) => ({
      ...part,
      id: `part-${Date.now()}-${idx}`,
      confidence: calculateConfidence(userInput, part),
    })).sort((a, b) => b.confidence - a.confidence);

  } else if (isWiperQuery) {
    message = `I've found the ideal wiper blades for your vehicle. Selection criteria:\n\n✓ Size compatibility\n✓ Weather performance\n✓ Durability ratings\n✓ Installation ease\n\nTop recommendation:`;
    
    const wiperParts = partsDatabase.filter(p => 
      p.name.toLowerCase().includes('wiper')
    );
    recommendedParts = wiperParts.map((part, idx) => ({
      ...part,
      id: `part-${Date.now()}-${idx}`,
      confidence: calculateConfidence(userInput, part),
    })).sort((a, b) => b.confidence - a.confidence);

  } else {
    if (imageData) {
      message = `I've received your image! However, I need more context to provide the best recommendations. Please tell me:\n\n• Your vehicle year, make, and model\n• What specific issue you're experiencing\n• Any brand preferences\n\nFor example: "This is from my 2018 Honda Civic, what part is this and where can I buy a replacement?"\n\nI'll use both the image analysis and your input to find the perfect match!`;
    } else {
      message = `I can help you find the perfect auto parts! To give you the most accurate ML-powered recommendations, please provide:\n\n• Your vehicle year, make, and model\n• The specific part you need (e.g., brake pads, oil filter, spark plugs)\n• Any brand preferences\n\nYou can also upload an image of the part!\n\nFor example: "I need brake pads for my 2018 Honda Civic"\n\nI'll analyze thousands of options and recommend the best matches based on compatibility, ratings, price, and availability!`;
    }
  }

  return {
    message,
    parts: recommendedParts.length > 0 ? recommendedParts : undefined,
    imageAnalysis: imageAnalysis || undefined,
  };
}
