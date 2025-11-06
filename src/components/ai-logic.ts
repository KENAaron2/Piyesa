import { AutoPart, ShopOption } from './ChatInterface';

// Helper function to generate shop options with price variations
function generateShopOptions(basePrice: number, inStock: boolean = true): ShopOption[] {
  return [
    {
      shopName: 'Amazon',
      price: Number((basePrice * (0.95 + Math.random() * 0.1)).toFixed(2)),
      url: 'https://www.amazon.com/s?k=auto+parts',
      inStock: inStock,
      shipping: 'Free shipping',
    },
    {
      shopName: 'Walmart',
      price: Number((basePrice * (0.92 + Math.random() * 0.12)).toFixed(2)),
      url: 'https://www.walmart.com/browse/auto-parts',
      inStock: inStock,
      shipping: 'Free 2-day',
    },
    {
      shopName: 'eBay',
      price: Number((basePrice * (0.88 + Math.random() * 0.15)).toFixed(2)),
      url: 'https://www.ebay.com/b/Car-Parts/6028/bn_1865334',
      inStock: true,
      shipping: 'Varies',
    },
    {
      shopName: 'Lazada',
      price: Number((basePrice * (0.90 + Math.random() * 0.14)).toFixed(2)),
      url: 'https://www.lazada.com/auto-parts/',
      inStock: inStock,
      shipping: 'Free shipping',
    },
    {
      shopName: 'Shopee',
      price: Number((basePrice * (0.87 + Math.random() * 0.16)).toFixed(2)),
      url: 'https://shopee.com/Automotive-cat.11042501',
      inStock: inStock,
      shipping: 'Free shipping',
    },
  ].sort((a, b) => a.price - b.price); // Sort by price, lowest first
}

// Mock auto parts database with various parts
const partsDatabase: Omit<AutoPart, 'id' | 'confidence' | 'shopOptions'>[] = [
  {
    name: 'Premium Ceramic Brake Pad Set',
    brand: 'Bosch',
    compatibility: '2015-2020 Honda Civic',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
  },
  {
    name: 'OEM Oil Filter',
    brand: 'Honda Genuine Parts',
    compatibility: '2016-2023 Honda Civic',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400',
  },
  {
    name: 'Heavy Duty Air Filter',
    brand: 'K&N',
    compatibility: '2012-2022 Honda Civic',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400',
  },
  {
    name: 'Performance Spark Plugs (4-Pack)',
    brand: 'NGK',
    compatibility: '2016-2021 Honda Civic',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400',
  },
  {
    name: 'Front Brake Rotor Set',
    brand: 'ACDelco',
    compatibility: '2016-2020 Honda Civic',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400',
  },
  {
    name: 'Synthetic Motor Oil 5W-30 (5qt)',
    brand: 'Mobil 1',
    compatibility: 'Most Honda Models',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400',
  },
  {
    name: 'Cabin Air Filter',
    brand: 'FRAM',
    compatibility: '2016-2023 Honda Civic',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400',
  },
  {
    name: 'Windshield Wiper Blade Set',
    brand: 'Rain-X',
    compatibility: '2016-2023 Honda Civic',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400',
  },
  {
    name: 'Battery 12V 600CCA',
    brand: 'Interstate',
    compatibility: 'Most Vehicles',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400',
  },
  {
    name: 'Transmission Fluid ATF+4 (1qt)',
    brand: 'Valvoline',
    compatibility: 'Various Models',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400',
  },
];

// Price mapping for parts (base prices)
const partPrices: { [key: string]: number } = {
  'Premium Ceramic Brake Pad Set': 89.99,
  'OEM Oil Filter': 12.99,
  'Heavy Duty Air Filter': 54.99,
  'Performance Spark Plugs (4-Pack)': 34.99,
  'Front Brake Rotor Set': 129.99,
  'Synthetic Motor Oil 5W-30 (5qt)': 29.99,
  'Cabin Air Filter': 19.99,
  'Windshield Wiper Blade Set': 24.99,
  'Battery 12V 600CCA': 149.99,
  'Transmission Fluid ATF+4 (1qt)': 24.99,
};

// Knowledge base for vehicle-related questions
const vehicleKnowledge = {
  // Troubleshooting symptoms
  symptoms: {
    'grinding noise': {
      causes: ['Worn brake pads', 'Damaged wheel bearings', 'Transmission issues'],
      diagnosis: 'A grinding noise typically indicates metal-on-metal contact, often from worn brake pads where the backing plate is grinding against the rotor. If it occurs when turning, it could be a wheel bearing issue.',
      urgency: 'High - should be inspected immediately',
      relatedParts: ['brake'],
    },
    'squealing noise': {
      causes: ['Worn brake pads (wear indicator)', 'Loose serpentine belt', 'Bad tensioner pulley'],
      diagnosis: 'Squealing during braking usually means your brake pads have reached the wear indicator. A continuous squeal from the engine bay often indicates a belt issue.',
      urgency: 'Medium - inspect within a week',
      relatedParts: ['brake'],
    },
    'engine overheating': {
      causes: ['Low coolant', 'Faulty thermostat', 'Water pump failure', 'Radiator blockage'],
      diagnosis: 'Check coolant level first. If it\'s low, look for leaks. A faulty thermostat can prevent coolant circulation, while a bad water pump can\'t circulate coolant effectively.',
      urgency: 'High - stop driving if temperature is critical',
      relatedParts: [],
    },
    'hard to start': {
      causes: ['Weak battery', 'Faulty starter', 'Bad spark plugs', 'Fuel system issues'],
      diagnosis: 'If the engine cranks slowly, it\'s likely the battery. If you hear clicking, it could be the starter. If it cranks normally but won\'t start, check spark plugs and fuel delivery.',
      urgency: 'Medium - get it checked soon',
      relatedParts: ['spark', 'battery'],
    },
    'poor fuel economy': {
      causes: ['Dirty air filter', 'Worn spark plugs', 'Low tire pressure', 'Oxygen sensor failure'],
      diagnosis: 'Start with simple fixes: check tire pressure and replace air filter. If the problem persists, check spark plugs and have the oxygen sensors tested.',
      urgency: 'Low - but address to save money',
      relatedParts: ['filter', 'spark'],
    },
    'vibration': {
      causes: ['Unbalanced wheels', 'Worn suspension components', 'Brake rotor warping', 'Tire issues'],
      diagnosis: 'Vibration at highway speeds often indicates unbalanced wheels or tire issues. Vibration when braking points to warped rotors. Constant vibration suggests suspension problems.',
      urgency: 'Medium - can affect safety and comfort',
      relatedParts: ['brake'],
    },
    'check engine light': {
      causes: ['Oxygen sensor', 'Catalytic converter', 'Mass airflow sensor', 'Loose gas cap', 'Spark plug issues'],
      diagnosis: 'The check engine light can indicate many issues. Get the code read at an auto parts store (usually free). Common causes include oxygen sensors, catalytic converters, or even a loose gas cap.',
      urgency: 'Variable - get code read to determine severity',
      relatedParts: ['spark'],
    },
    'smoke from exhaust': {
      causes: {
        blue: 'Burning oil (worn piston rings or valve seals)',
        white: 'Coolant leak into combustion chamber (head gasket)',
        black: 'Rich fuel mixture (too much fuel)',
      },
      diagnosis: 'Blue smoke indicates oil burning, white smoke suggests coolant entering cylinders (serious), black smoke means too much fuel being burned.',
      urgency: 'High for white smoke, medium for others',
      relatedParts: ['oil'],
    },
  },

  // Maintenance schedules
  maintenance: {
    'oil change': {
      interval: '5,000-7,500 miles for conventional oil, 7,500-10,000 miles for synthetic',
      importance: 'Critical for engine longevity. Oil lubricates moving parts and removes heat and contaminants.',
      diyDifficulty: 'Easy - can be done at home with basic tools',
      estimatedCost: '$30-75 DIY, $50-125 professional',
      relatedParts: ['oil'],
    },
    'brake pads': {
      interval: '30,000-70,000 miles (varies by driving conditions)',
      importance: 'Essential for safety. Worn pads reduce braking effectiveness and can damage rotors.',
      diyDifficulty: 'Moderate - requires jack stands and basic tools',
      estimatedCost: '$100-300 per axle DIY, $150-450 professional',
      relatedParts: ['brake'],
    },
    'air filter': {
      interval: '15,000-30,000 miles',
      importance: 'Ensures proper air flow to engine, affecting performance and fuel economy.',
      diyDifficulty: 'Very Easy - usually just clips or screws',
      estimatedCost: '$15-50 DIY, $30-80 professional',
      relatedParts: ['filter'],
    },
    'spark plugs': {
      interval: '30,000-100,000 miles (depends on type)',
      importance: 'Critical for combustion. Worn plugs cause misfires, poor fuel economy, and hard starts.',
      diyDifficulty: 'Moderate - requires special socket and care not to over-torque',
      estimatedCost: '$40-150 DIY, $100-300 professional',
      relatedParts: ['spark'],
    },
    'cabin filter': {
      interval: '15,000-25,000 miles',
      importance: 'Improves air quality inside vehicle, important for allergies and HVAC efficiency.',
      diyDifficulty: 'Easy - usually behind glove box',
      estimatedCost: '$15-40 DIY, $40-80 professional',
      relatedParts: ['filter'],
    },
    'battery': {
      interval: '3-5 years',
      importance: 'Powers all electrical systems and starts the engine. A weak battery strains the alternator.',
      diyDifficulty: 'Easy - just disconnect cables and swap',
      estimatedCost: '$100-250 with core exchange',
      relatedParts: ['battery'],
    },
    'coolant flush': {
      interval: '30,000-50,000 miles',
      importance: 'Prevents overheating and corrosion in cooling system.',
      diyDifficulty: 'Moderate - requires proper disposal of old coolant',
      estimatedCost: '$50-100 DIY, $100-200 professional',
      relatedParts: [],
    },
    'transmission fluid': {
      interval: '30,000-60,000 miles (check owner\'s manual)',
      importance: 'Lubricates transmission components. Old fluid can cause shifting problems.',
      diyDifficulty: 'Moderate to Difficult - some vehicles don\'t have dipsticks',
      estimatedCost: '$80-150 DIY, $150-300 professional',
      relatedParts: [],
    },
  },

  // How-to guides
  howTo: {
    'change oil': `**How to Change Your Oil (Step-by-Step)**

1. **Gather materials**: New oil filter, correct oil (check manual), drain pan, wrench, jack/ramps
2. **Warm up engine**: Run for 5 minutes to warm oil (flows better)
3. **Lift vehicle**: Use jack stands (never just a jack!) or drive onto ramps
4. **Locate drain plug**: Usually at bottom of oil pan
5. **Drain oil**: Remove plug, let drain completely (10-15 min)
6. **Replace filter**: Remove old filter, apply oil to new filter gasket, install
7. **Replace drain plug**: Clean area, install new crush washer if needed
8. **Add new oil**: Use funnel, add recommended amount (check dipstick)
9. **Check for leaks**: Start engine, let run 1 minute, check under vehicle
10. **Dispose properly**: Take old oil to recycling center (auto parts stores accept it)

**Pro tips**: 
- Write date/mileage on oil filter with marker
- Don't overtighten drain plug or filter
- Check oil level when engine is cold on level ground`,
    
    'change brake pads': `**How to Change Brake Pads (Step-by-Step)**

1. **Safety first**: Park on level ground, use wheel chocks, engage parking brake
2. **Loosen lug nuts**: Before lifting vehicle
3. **Lift vehicle**: Use jack and jack stands (very important!)
4. **Remove wheel**: Take off lug nuts completely
5. **Remove caliper**: Usually 2 bolts on back, hang with wire (don't stress brake line)
6. **Remove old pads**: Slide out from caliper bracket
7. **Compress piston**: Use C-clamp to push piston back into caliper
8. **Install new pads**: Add any shims/clips that came with pads
9. **Reinstall caliper**: Torque bolts to spec (usually 80-100 ft-lbs)
10. **Repeat other side**: Always replace both sides of an axle
11. **Pump brakes**: Before driving, pump pedal to seat pads
12. **Bed-in procedure**: Drive and brake gently for first 100 miles

**Important**: 
- If rotors are grooved or warped, replace them too
- Use brake cleaner on rotors and pads before assembly
- Pump brake pedal several times before test drive`,

    'jump start': `**How to Jump Start a Car (Safely)**

1. **Position vehicles**: Park cars close but not touching, both in Park/Neutral
2. **Turn off everything**: All electronics, lights, ignition on both cars
3. **Connect cables in order**:
   - Red clamp → Dead battery positive (+)
   - Red clamp → Good battery positive (+)
   - Black clamp → Good battery negative (-)
   - Black clamp → Unpainted metal on dead car (NOT battery!)
4. **Start good car**: Let run 2-3 minutes
5. **Start dead car**: Try starting; if it doesn't work, wait a few more minutes
6. **Remove cables**: Reverse order (black from metal, black from good battery, red from good, red from dead)
7. **Keep running**: Drive for 20-30 minutes to recharge battery

**Safety warnings**:
- Never let clamps touch each other
- Batteries can explode if sparks ignite hydrogen gas
- If battery is cracked or leaking, don't jump it`,

    'check tire pressure': `**How to Check and Adjust Tire Pressure**

1. **Find correct pressure**: Check driver's door jamb sticker or owner's manual (NOT the number on tire sidewall)
2. **Check when cold**: Tires heat up when driving, giving false readings
3. **Remove valve cap**: Keep in pocket so you don't lose it
4. **Use gauge**: Press firmly on valve stem, read immediately
5. **Add air if needed**: At gas station or with home compressor
6. **Check again**: Verify pressure after adding air
7. **Replace valve cap**: Important for keeping dirt out
8. **Don't forget spare**: Check it too!

**Proper pressure**:
- Improves fuel economy by 3-4%
- Extends tire life
- Improves handling and safety
- Check monthly and before road trips`,
  },

  // Vehicle specifications and comparisons
  specs: {
    'honda civic': {
      generations: '11 generations (1972-present)',
      popular: '10th gen (2016-2021) and 11th gen (2022-present)',
      engineOptions: '1.5L turbo, 2.0L naturally aspirated, 2.0L turbo (Type R)',
      commonIssues: 'Some 1.5T models had oil dilution issues (fixed via recall), AC compressor failures',
      reliability: 'Generally excellent - ranked among most reliable compact cars',
      maintenance: 'Standard Japanese vehicle maintenance schedule',
    },
    'toyota camry': {
      generations: '9 generations (1982-present)',
      popular: '8th gen (2018-present)',
      engineOptions: '2.5L I4, 3.5L V6, 2.5L Hybrid',
      commonIssues: 'Very few major issues, some models had water pump leaks',
      reliability: 'Legendary reliability - top-rated in class',
      maintenance: 'Standard maintenance, known for low cost of ownership',
    },
  },
};

// ML-based recommendation algorithm (simulated)
function calculateConfidence(userQuery: string, part: Omit<AutoPart, 'id' | 'confidence' | 'shopOptions'>): number {
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

// Classify query type
function classifyQuery(input: string): {
  type: 'troubleshooting' | 'maintenance' | 'howto' | 'specification' | 'parts' | 'general';
  confidence: number;
  keywords: string[];
} {
  const lowerInput = input.toLowerCase();
  
  // Troubleshooting indicators
  const troubleshootingKeywords = ['noise', 'sound', 'problem', 'issue', 'wrong', 'broken', 'smoking', 'overheating', 'vibrat', 'shak', 'grinding', 'squeal', 'won\'t start', 'hard to start', 'check engine', 'warning light', 'smell'];
  const hasTroubleshooting = troubleshootingKeywords.some(k => lowerInput.includes(k));
  
  // Maintenance indicators
  const maintenanceKeywords = ['when', 'how often', 'schedule', 'interval', 'replace', 'service', 'mileage', 'maintain'];
  const hasMaintenance = maintenanceKeywords.some(k => lowerInput.includes(k));
  
  // How-to indicators
  const howtoKeywords = ['how to', 'how do i', 'how can i', 'steps', 'guide', 'install', 'change', 'replace', 'fix', 'repair'];
  const hasHowto = howtoKeywords.some(k => lowerInput.includes(k));
  
  // Specification indicators
  const specKeywords = ['spec', 'engine', 'horsepower', 'torque', 'compare', 'difference between', 'which is better', 'vs', 'reliable', 'reliability'];
  const hasSpec = specKeywords.some(k => lowerInput.includes(k));
  
  // Parts indicators
  const partsKeywords = ['brake', 'oil', 'filter', 'spark plug', 'battery', 'tire', 'wiper', 'need', 'buy', 'recommend', 'best'];
  const hasParts = partsKeywords.some(k => lowerInput.includes(k));

  // Determine primary type
  if (hasHowto) return { type: 'howto', confidence: 0.9, keywords: howtoKeywords };
  if (hasTroubleshooting) return { type: 'troubleshooting', confidence: 0.85, keywords: troubleshootingKeywords };
  if (hasMaintenance && !hasParts) return { type: 'maintenance', confidence: 0.8, keywords: maintenanceKeywords };
  if (hasSpec) return { type: 'specification', confidence: 0.75, keywords: specKeywords };
  if (hasParts) return { type: 'parts', confidence: 0.7, keywords: partsKeywords };
  
  return { type: 'general', confidence: 0.5, keywords: [] };
}

// Handle troubleshooting queries
function handleTroubleshooting(input: string): string {
  const lowerInput = input.toLowerCase();
  
  // Check for specific symptoms
  for (const [symptom, info] of Object.entries(vehicleKnowledge.symptoms)) {
    if (lowerInput.includes(symptom)) {
      let response = `**Diagnosing: ${symptom.charAt(0).toUpperCase() + symptom.slice(1)}**\n\n`;
      
      if (typeof info.causes === 'object' && !Array.isArray(info.causes)) {
        // Special case for smoke colors
        response += `**Diagnosis**: ${info.diagnosis}\n\n`;
        response += `**Possible Causes**:\n`;
        for (const [color, cause] of Object.entries(info.causes)) {
          response += `• **${color.charAt(0).toUpperCase() + color.slice(1)} smoke**: ${cause}\n`;
        }
      } else {
        response += `**Diagnosis**: ${info.diagnosis}\n\n`;
        response += `**Possible Causes**:\n${(info.causes as string[]).map(c => `• ${c}`).join('\n')}\n`;
      }
      
      response += `\n**Urgency**: ${info.urgency}\n`;
      response += `\n**Recommendation**: I suggest having this inspected by a qualified mechanic as soon as possible. `;
      
      if (info.relatedParts && info.relatedParts.length > 0) {
        response += `If the diagnosis confirms the issue, you may need parts. Would you like me to recommend specific parts based on your vehicle?`;
      }
      
      return response;
    }
  }
  
  // Generic troubleshooting response
  return `I can help diagnose your vehicle issue! To provide accurate troubleshooting, I need more details:\n\n• **When does it happen?** (starting, driving, braking, etc.)\n• **What exactly are you experiencing?** (noise, vibration, warning light, etc.)\n• **Your vehicle info**: Year, make, and model\n• **Recent events**: Any recent repairs or changes?\n\n**Common symptoms I can help with**:\n• Grinding or squealing noises\n• Engine overheating\n• Hard starting or won't start\n• Check engine light\n• Vibrations or shaking\n• Poor fuel economy\n• Smoke from exhaust\n\nDescribe your symptoms and I'll help identify the likely causes!`;
}

// Handle maintenance queries
function handleMaintenance(input: string): string {
  const lowerInput = input.toLowerCase();
  
  // Check for specific maintenance items
  for (const [item, info] of Object.entries(vehicleKnowledge.maintenance)) {
    if (lowerInput.includes(item.toLowerCase())) {
      let response = `**Maintenance Guide: ${item.charAt(0).toUpperCase() + item.slice(1)}**\n\n`;
      response += `**Recommended Interval**: ${info.interval}\n\n`;
      response += `**Importance**: ${info.importance}\n\n`;
      response += `**DIY Difficulty**: ${info.diyDifficulty}\n\n`;
      response += `**Estimated Cost**: ${info.estimatedCost}\n\n`;
      
      if (info.relatedParts && info.relatedParts.length > 0) {
        response += `Would you like me to recommend specific ${item} options for your vehicle? Just let me know your vehicle year, make, and model!`;
      }
      
      return response;
    }
  }
  
  // Generic maintenance schedule
  return `**Standard Maintenance Schedule**\n\nHere's a general maintenance timeline for most vehicles:\n\n**Every 5,000-7,500 miles**:\n• Oil and oil filter change\n• Tire rotation\n• Visual inspection\n\n**Every 15,000-30,000 miles**:\n• Air filter replacement\n• Cabin air filter replacement\n\n**Every 30,000-50,000 miles**:\n• Spark plugs (varies by type)\n• Brake inspection/replacement\n• Coolant flush\n• Transmission fluid check\n\n**Every 3-5 years**:\n• Battery replacement\n• Brake fluid flush\n\n**As needed**:\n• Wiper blades (6-12 months)\n• Tires (30,000-70,000 miles)\n\nWhich specific maintenance item would you like to know more about? I can provide detailed intervals, costs, and even recommend parts!`;
}

// Handle how-to queries
function handleHowTo(input: string): string {
  const lowerInput = input.toLowerCase();
  
  // Check for specific how-to guides
  for (const [topic, guide] of Object.entries(vehicleKnowledge.howTo)) {
    if (lowerInput.includes(topic)) {
      return guide;
    }
  }
  
  // List available guides
  return `**DIY Repair Guides Available**\n\nI can provide step-by-step instructions for:\n\n**Easy (Beginner-friendly)**:\n• How to change oil\n• How to check tire pressure\n• How to jump start a car\n• How to replace wiper blades\n• How to replace air filter\n\n**Moderate (Some experience needed)**:\n• How to change brake pads\n• How to replace battery\n• How to replace spark plugs\n\n**Safety First**: Always use proper safety equipment, including jack stands (never just a jack!), safety glasses, and gloves.\n\nWhich repair would you like instructions for? I'll provide detailed step-by-step guidance!`;
}

// Handle specification queries
function handleSpecification(input: string): string {
  const lowerInput = input.toLowerCase();
  
  // Check for specific vehicles
  for (const [vehicle, specs] of Object.entries(vehicleKnowledge.specs)) {
    if (lowerInput.includes(vehicle)) {
      let response = `**${vehicle.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Overview**\n\n`;
      response += `**Generations**: ${specs.generations}\n`;
      response += `**Most Popular**: ${specs.popular}\n`;
      response += `**Engine Options**: ${specs.engineOptions}\n`;
      response += `**Reliability**: ${specs.reliability}\n`;
      response += `**Common Issues**: ${specs.commonIssues}\n`;
      response += `**Maintenance**: ${specs.maintenance}\n`;
      
      return response;
    }
  }
  
  // Generic comparison response
  if (lowerInput.includes('vs') || lowerInput.includes('compare')) {
    return `**Vehicle Comparison**\n\nI can help compare vehicles! For a detailed comparison, please specify:\n\n• Which vehicles you're comparing\n• What aspects you're interested in (reliability, performance, cost, etc.)\n\nFor example: "Compare Honda Civic vs Toyota Corolla for reliability"\n\nI have detailed information on popular models like:\n• Honda Civic\n• Toyota Camry\n• Toyota Corolla\n• Honda Accord\n• And many more!`;
  }
  
  return `I can provide detailed specifications and information about most vehicles! What would you like to know?\n\n**I can help with**:\n• Engine specifications\n• Reliability ratings and common issues\n• Generational differences\n• Maintenance requirements\n• Vehicle comparisons\n\nJust tell me the vehicle make and model, and what information you need!`;
}

export function generateAIResponse(
  userInput: string, 
  imageData?: string | null
): { message: string; parts?: AutoPart[]; imageAnalysis?: string } {
  const input = userInput.toLowerCase();
  const imageAnalysis = analyzeImage(imageData || null);
  const imagePartTypes = imageData ? extractPartTypeFromImage(imageData) : [];
  
  // Classify the query
  const queryClass = classifyQuery(input);
  
  // Handle non-parts queries
  if (queryClass.type === 'troubleshooting' && !imageData) {
    return {
      message: handleTroubleshooting(input),
      imageAnalysis: imageAnalysis || undefined,
    };
  }
  
  if (queryClass.type === 'maintenance' && !input.includes('recommend') && !input.includes('buy') && !input.includes('need')) {
    return {
      message: handleMaintenance(input),
      imageAnalysis: imageAnalysis || undefined,
    };
  }
  
  if (queryClass.type === 'howto') {
    return {
      message: handleHowTo(input),
      imageAnalysis: imageAnalysis || undefined,
    };
  }
  
  if (queryClass.type === 'specification') {
    return {
      message: handleSpecification(input),
      imageAnalysis: imageAnalysis || undefined,
    };
  }

  // Parts recommendation logic (existing functionality)
  // Detect what kind of query this is (combine text and image analysis)
  const isBrakeQuery = input.includes('brake') || imagePartTypes.includes('brake');
  const isOilQuery = input.includes('oil') || imagePartTypes.includes('oil');
  const isFilterQuery = input.includes('filter') || imagePartTypes.includes('filter');
  const isSparkPlugQuery = input.includes('spark') || input.includes('plug') || imagePartTypes.includes('spark');
  const isWiperQuery = input.includes('wiper');
  const isBatteryQuery = input.includes('battery');
  const isTransmissionQuery = input.includes('transmission');

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
      shopOptions: generateShopOptions(partPrices[part.name] || 89.99, idx === 0),
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
      shopOptions: generateShopOptions(partPrices[part.name] || 29.99, true),
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
      shopOptions: generateShopOptions(partPrices[part.name] || 19.99, true),
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
      shopOptions: generateShopOptions(partPrices[part.name] || 34.99, true),
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
      shopOptions: generateShopOptions(partPrices[part.name] || 24.99, true),
    })).sort((a, b) => b.confidence - a.confidence);

  } else if (isBatteryQuery) {
    message = `I've found the best battery options for your vehicle. Key factors analyzed:\n\n✓ Cold cranking amps (CCA)\n✓ Reserve capacity\n✓ Warranty coverage\n✓ Brand reliability\n\nTop recommendation:`;
    
    const batteryParts = partsDatabase.filter(p => 
      p.name.toLowerCase().includes('battery')
    );
    recommendedParts = batteryParts.map((part, idx) => ({
      ...part,
      id: `part-${Date.now()}-${idx}`,
      confidence: calculateConfidence(userInput, part),
      shopOptions: generateShopOptions(partPrices[part.name] || 149.99, true),
    })).sort((a, b) => b.confidence - a.confidence);

  } else if (isTransmissionQuery) {
    message = `I've identified the best transmission fluid for your needs:\n\n✓ ATF specification compatibility\n✓ Temperature performance\n✓ Manufacturer approval\n✓ Value pricing\n\nRecommended option:`;
    
    const transParts = partsDatabase.filter(p => 
      p.name.toLowerCase().includes('transmission')
    );
    recommendedParts = transParts.map((part, idx) => ({
      ...part,
      id: `part-${Date.now()}-${idx}`,
      confidence: calculateConfidence(userInput, part),
      shopOptions: generateShopOptions(partPrices[part.name] || 24.99, true),
    })).sort((a, b) => b.confidence - a.confidence);

  } else {
    if (imageData) {
      message = `I've received your image! However, I need more context to provide the best recommendations. Please tell me:\n\n• Your vehicle year, make, and model\n• What specific issue you're experiencing\n• Any brand preferences\n\nFor example: "This is from my 2018 Honda Civic, what part is this and where can I buy a replacement?"\n\nI'll use both the image analysis and your input to find the perfect match!`;
    } else {
      // Check if it's a general question
      if (queryClass.type === 'general') {
        return {
          message: `Hello! I'm your AutoParts AI Assistant with comprehensive vehicle knowledge. I can help you with:\n\n**🔧 Parts Recommendations**\n• Find and compare auto parts across 5 major retailers\n• ML-powered compatibility matching\n• Price comparison with shipping info\n\n**🔍 Troubleshooting**\n• Diagnose symptoms (noises, warning lights, performance issues)\n• Identify likely causes\n• Recommend solutions\n\n**📅 Maintenance Guidance**\n• Service intervals and schedules\n• DIY difficulty ratings\n• Cost estimates\n\n**📖 How-To Guides**\n• Step-by-step repair instructions\n• Safety tips and best practices\n• Tool requirements\n\n**📊 Vehicle Information**\n• Specifications and comparisons\n• Reliability insights\n• Common issues by model\n\n**How can I help you today?** Ask me anything about vehicles, parts, repairs, or maintenance!`,
          imageAnalysis: imageAnalysis || undefined,
        };
      }
      
      message = `I can help you find the perfect auto parts! To give you the most accurate ML-powered recommendations, please provide:\n\n• Your vehicle year, make, and model\n• The specific part you need (e.g., brake pads, oil filter, spark plugs)\n• Any brand preferences\n\nYou can also upload an image of the part!\n\nFor example: "I need brake pads for my 2018 Honda Civic"\n\n**Or ask me anything else about vehicles!** I can help with:\n• Troubleshooting issues\n• Maintenance schedules\n• How-to repair guides\n• Vehicle specifications\n\nI'll analyze thousands of options and recommend the best matches based on compatibility, ratings, price, and availability!`;
    }
  }

  return {
    message,
    parts: recommendedParts.length > 0 ? recommendedParts : undefined,
    imageAnalysis: imageAnalysis || undefined,
  };
}
