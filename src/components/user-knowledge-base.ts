/**
 * User Knowledge Base
 * Real-world user experiences, questions, and scenarios to enhance AI understanding
 */

export interface UserExperience {
  scenario: string;
  vehicle: string;
  issue: string;
  solution: string;
  partsUsed?: string[];
  tips?: string[];
}

export interface UserQuestion {
  question: string;
  category: string;
  keywords: string[];
  context?: string;
}

// Real-world user experiences and case studies
export const userExperiences: UserExperience[] = [
  {
    scenario: "Grinding noise when braking at low speed",
    vehicle: "2017 Honda Civic",
    issue: "Noticed a grinding sound when coming to a stop. Sound was louder in the morning.",
    solution: "Brake pads were completely worn down to the metal backing. Replaced front brake pads and rotors (rotors were scored from metal-to-metal contact).",
    partsUsed: ["Premium Ceramic Brake Pad Set", "Front Brake Rotor Set"],
    tips: [
      "Don't ignore squealing sounds - they're your early warning",
      "Once you hear grinding, you've likely damaged the rotors",
      "Replacing rotors costs 3x more than just replacing pads early"
    ]
  },
  {
    scenario: "Check engine light and rough idle",
    vehicle: "2015 Toyota Camry",
    issue: "Check engine light came on, car idles rough and hesitates during acceleration. Getting code P0300 (random misfire).",
    solution: "Spark plugs hadn't been changed in 80,000 miles (should be done at 60k). Replaced all spark plugs and the issue disappeared.",
    partsUsed: ["Performance Spark Plugs (4-Pack)"],
    tips: [
      "Get the codes read for free at auto parts stores",
      "P0300-P0308 are misfire codes - usually spark plugs or coils",
      "Replace all plugs at once, not just the bad one"
    ]
  },
  {
    scenario: "Car won't start in cold weather",
    vehicle: "2014 Honda Accord",
    issue: "Car struggles to start when temperature drops below 40°F. Sometimes just clicks.",
    solution: "Battery was 6 years old and weak. Cold weather reduces battery capacity. Replaced battery and problem solved.",
    partsUsed: ["Battery 12V 600CCA"],
    tips: [
      "Batteries typically last 3-5 years",
      "Cold weather can reduce battery power by 30-50%",
      "Most auto parts stores will test your battery for free"
    ]
  },
  {
    scenario: "Poor gas mileage suddenly decreased",
    vehicle: "2018 Honda Civic",
    issue: "Fuel economy dropped from 35 mpg to 28 mpg over a few weeks. No warning lights.",
    solution: "Air filter was completely clogged with dirt and debris. Replaced air filter and MPG returned to normal within a tank of gas.",
    partsUsed: ["Heavy Duty Air Filter"],
    tips: [
      "Check air filter every oil change",
      "Dirty air filter can reduce MPG by 10-20%",
      "Takes 5 minutes to replace and costs $20"
    ]
  },
  {
    scenario: "Musty smell from AC vents",
    vehicle: "2016 Toyota Corolla",
    issue: "Strong musty odor when turning on AC or heat. Worse in humid weather.",
    solution: "Cabin air filter was moldy and hadn't been replaced in 3 years. New cabin filter eliminated the smell immediately.",
    partsUsed: ["Cabin Air Filter"],
    tips: [
      "Replace cabin filter every 15,000 miles or annually",
      "Important for air quality and allergies",
      "Usually located behind glove box - easy DIY"
    ]
  },
  {
    scenario: "Overheating on highway",
    vehicle: "2013 Honda Civic",
    issue: "Temperature gauge climbs to red zone during highway driving. City driving seems fine.",
    solution: "Coolant was low due to small leak in radiator hose. Topped off coolant temporarily, then replaced hose and did full coolant flush.",
    partsUsed: [],
    tips: [
      "Never open radiator cap when engine is hot - can cause severe burns",
      "Check coolant level regularly",
      "Overheating can warp cylinder heads - pull over immediately if gauge hits red"
    ]
  },
  {
    scenario: "Vibration at 60-70 mph",
    vehicle: "2019 Honda Civic",
    issue: "Steering wheel shakes when driving between 60-70 mph. Worse at 65 mph.",
    solution: "Wheels were out of balance after hitting a pothole. Had wheels balanced and alignment checked. Vibration disappeared.",
    partsUsed: [],
    tips: [
      "Unbalanced wheels typically cause vibration at specific speeds",
      "Wheel balance costs $15-20 per tire",
      "Also check tire pressure - should be checked monthly"
    ]
  },
  {
    scenario: "Oil change interval confusion",
    vehicle: "2020 Honda Civic",
    issue: "Owner's manual says 7,500 miles but oil change sticker says 3,000 miles. Which is correct?",
    solution: "Modern synthetic oils can safely go 7,500-10,000 miles. The 3,000 mile rule is outdated. Follow manufacturer recommendation in owner's manual.",
    partsUsed: ["Synthetic Motor Oil 5W-30 (5qt)", "OEM Oil Filter"],
    tips: [
      "Always use the oil weight specified in your owner's manual",
      "Synthetic oil lasts longer than conventional",
      "Check oil level monthly even between changes"
    ]
  },
  {
    scenario: "Brake pedal feels soft/spongy",
    vehicle: "2015 Toyota Camry",
    issue: "Brake pedal goes down further than usual and feels soft. Still stops but requires more pressure.",
    solution: "Air in brake lines from recent brake pad replacement. Had brakes bled properly and pedal feel returned to normal. Also checked brake fluid level.",
    partsUsed: [],
    tips: [
      "Soft pedal often means air in brake lines",
      "Can also indicate brake fluid leak - check for puddles",
      "Never drive with spongy brakes - serious safety issue"
    ]
  },
  {
    scenario: "First time DIY oil change",
    vehicle: "2017 Honda Civic",
    issue: "Want to change oil myself but nervous about doing it wrong.",
    solution: "Watched YouTube tutorials, gathered tools (wrench, drain pan, jack stands). Took my time, followed steps carefully. Saved $40 compared to shop.",
    partsUsed: ["Synthetic Motor Oil 5W-30 (5qt)", "OEM Oil Filter"],
    tips: [
      "Never get under car supported only by jack - always use jack stands",
      "Don't overtighten drain plug - hand tight plus 1/4 turn",
      "Recycle old oil at auto parts stores for free"
    ]
  },
  {
    scenario: "Windshield wipers streaking badly",
    vehicle: "2016 Honda Accord",
    issue: "Wipers leave streaks and don't clear water effectively. Rainy driving is dangerous.",
    solution: "Wiper blades were 2 years old and rubber was cracked. Replaced both blades - visibility restored immediately.",
    partsUsed: ["Windshield Wiper Blade Set"],
    tips: [
      "Replace wiper blades every 6-12 months",
      "Clean windshield regularly to extend blade life",
      "Cost about $25 for both blades - easy 5-minute install"
    ]
  },
  {
    scenario: "Squealing noise from engine bay",
    vehicle: "2014 Toyota Camry",
    issue: "High-pitched squeal from engine, especially when cold. Gets quieter as engine warms up.",
    solution: "Serpentine belt was worn and glazed. Replaced belt and tensioner pulley. Noise completely gone.",
    partsUsed: [],
    tips: [
      "Squealing belts can snap and leave you stranded",
      "Check belt for cracks or glazing every oil change",
      "Typical belt life is 50,000-100,000 miles"
    ]
  },
  {
    scenario: "Transmission shifting hard",
    vehicle: "2012 Honda Civic",
    issue: "Automatic transmission shifts roughly, especially from 1st to 2nd gear.",
    solution: "Transmission fluid was dark and burnt (hadn't been changed in 90,000 miles). Did transmission fluid flush and shifts became smooth again.",
    partsUsed: ["Transmission Fluid ATF+4 (1qt)"],
    tips: [
      "Check transmission fluid color - should be red/pink, not brown",
      "Many modern cars require transmission service at 60k miles",
      "Transmission repairs are expensive - maintain it properly"
    ]
  },
  {
    scenario: "New brake pads making noise",
    vehicle: "2018 Honda Civic",
    issue: "Just replaced brake pads but they squeal when braking. Did I install them wrong?",
    solution: "New brake pads need a 'bedding-in' period. Followed proper break-in procedure (gentle stops for first 100 miles). Noise went away after bedding in.",
    partsUsed: ["Premium Ceramic Brake Pad Set"],
    tips: [
      "New pads need break-in period to transfer material to rotors",
      "Avoid hard braking for first 100-200 miles",
      "Some noise is normal during bedding-in process"
    ]
  },
  {
    scenario: "Warning light says low tire pressure",
    vehicle: "2019 Honda Civic",
    issue: "TPMS light came on. All tires look fine visually.",
    solution: "Checked tire pressure with gauge - all were 5-7 PSI low due to temperature drop. Filled to correct pressure (33 PSI) and light went off after driving.",
    partsUsed: [],
    tips: [
      "Tire pressure drops 1 PSI for every 10°F temperature decrease",
      "Check pressure monthly and before road trips",
      "Proper pressure improves safety, MPG, and tire life"
    ]
  }
];

// Common user questions database
export const userQuestions: UserQuestion[] = [
  {
    question: "How often should I change my oil?",
    category: "maintenance",
    keywords: ["oil", "change", "interval", "how often"],
    context: "One of the most common maintenance questions. Answer depends on oil type and driving conditions."
  },
  {
    question: "My check engine light is on, what should I do?",
    category: "troubleshooting",
    keywords: ["check engine", "warning light", "cel"],
    context: "Very common concern. Needs code reading to diagnose specific issue."
  },
  {
    question: "Can I drive with grinding brakes?",
    category: "safety",
    keywords: ["grinding", "brake", "safe", "drive"],
    context: "Safety-critical question. Answer is no - metal-to-metal contact damages rotors and reduces braking."
  },
  {
    question: "What's the difference between synthetic and conventional oil?",
    category: "parts",
    keywords: ["synthetic", "conventional", "oil", "difference"],
    context: "Common product comparison question."
  },
  {
    question: "Why is my car overheating?",
    category: "troubleshooting",
    keywords: ["overheating", "hot", "temperature", "gauge"],
    context: "Common issue with multiple possible causes."
  },
  {
    question: "How do I know when my brake pads need replacing?",
    category: "maintenance",
    keywords: ["brake", "pads", "replace", "when"],
    context: "Preventive maintenance question about recognizing wear."
  },
  {
    question: "What does P0420 code mean?",
    category: "troubleshooting",
    keywords: ["p0420", "code", "catalytic converter"],
    context: "Specific diagnostic code question about catalytic converter efficiency."
  },
  {
    question: "Can I mix different brands of oil?",
    category: "parts",
    keywords: ["mix", "oil", "brand", "different"],
    context: "Common question about oil compatibility."
  },
  {
    question: "My car won't start, just clicks. What's wrong?",
    category: "troubleshooting",
    keywords: ["won't start", "clicking", "dead"],
    context: "Common starting issue, usually battery or starter."
  },
  {
    question: "How long do spark plugs last?",
    category: "maintenance",
    keywords: ["spark plug", "last", "lifespan", "replace"],
    context: "Maintenance interval question."
  },
  {
    question: "Is it safe to drive with a cracked windshield?",
    category: "safety",
    keywords: ["windshield", "crack", "safe", "drive"],
    context: "Safety question about windshield integrity."
  },
  {
    question: "What causes blue smoke from exhaust?",
    category: "troubleshooting",
    keywords: ["blue", "smoke", "exhaust", "burning oil"],
    context: "Symptom diagnosis question about oil burning."
  },
  {
    question: "Can I replace just one tire?",
    category: "parts",
    keywords: ["tire", "replace", "one", "single"],
    context: "Question about tire replacement best practices."
  },
  {
    question: "How often should I rotate my tires?",
    category: "maintenance",
    keywords: ["rotate", "tire", "interval", "how often"],
    context: "Tire maintenance question."
  },
  {
    question: "What's the best oil for high mileage cars?",
    category: "parts",
    keywords: ["high mileage", "oil", "best", "old car"],
    context: "Product recommendation for older vehicles."
  },
  {
    question: "My battery is 4 years old, should I replace it?",
    category: "maintenance",
    keywords: ["battery", "old", "replace", "age"],
    context: "Preventive replacement question."
  },
  {
    question: "Why does my steering wheel shake?",
    category: "troubleshooting",
    keywords: ["steering", "shake", "vibration", "wobble"],
    context: "Common symptom with multiple causes."
  },
  {
    question: "Can I use 5W-20 instead of 5W-30?",
    category: "parts",
    keywords: ["oil", "weight", "substitute", "different"],
    context: "Oil specification question."
  },
  {
    question: "How do I reset check engine light?",
    category: "howto",
    keywords: ["reset", "check engine", "clear", "code"],
    context: "Procedural question about clearing codes."
  },
  {
    question: "What causes a car to pull to one side?",
    category: "troubleshooting",
    keywords: ["pull", "drift", "alignment", "steering"],
    context: "Handling issue diagnosis."
  },
  {
    question: "Is brake fluid really that important?",
    category: "maintenance",
    keywords: ["brake fluid", "important", "necessary"],
    context: "Question about brake fluid maintenance importance."
  },
  {
    question: "Why is my AC blowing warm air?",
    category: "troubleshooting",
    keywords: ["ac", "air conditioning", "warm", "not cold"],
    context: "Common AC complaint."
  },
  {
    question: "Can I drive with a nail in my tire?",
    category: "safety",
    keywords: ["nail", "tire", "puncture", "safe"],
    context: "Safety question about tire damage."
  },
  {
    question: "What's included in a tune-up?",
    category: "maintenance",
    keywords: ["tune-up", "service", "included"],
    context: "Question about comprehensive maintenance service."
  },
  {
    question: "How do I know if my alternator is bad?",
    category: "troubleshooting",
    keywords: ["alternator", "bad", "failing", "symptoms"],
    context: "Electrical system diagnosis."
  }
];

// Vehicle-specific common issues database
export const vehicleIssueDatabase = {
  "honda civic": {
    "2016-2020": [
      {
        issue: "1.5T oil dilution",
        description: "Gasoline mixing with engine oil in 1.5L turbo models, especially in cold climates with short trips",
        severity: "Medium - TSB issued, software update available",
        solution: "Honda issued software update. Monitor oil level regularly."
      },
      {
        issue: "AC compressor clutch failure",
        description: "AC compressor clutch can fail prematurely, causing AC to stop working",
        severity: "Medium - common issue",
        solution: "Replace AC compressor clutch or full compressor assembly"
      },
      {
        issue: "Paint chipping",
        description: "Some models have issues with paint chipping, especially on hood and bumper",
        severity: "Low - cosmetic",
        solution: "Touch up paint or repaint affected areas"
      }
    ],
    "2012-2015": [
      {
        issue: "Transmission issues",
        description: "Some CVT models experience shuddering or jerking, especially when accelerating",
        severity: "Medium to High",
        solution: "Honda extended warranty for CVT. May need transmission software update or replacement"
      },
      {
        issue: "Cracked engine block",
        description: "2006-2009 models had cracked engine block issues (less common in 2012+)",
        severity: "High - rare in this generation",
        solution: "Engine replacement if affected"
      }
    ]
  },
  "toyota camry": {
    "2018-2023": [
      {
        issue: "Infotainment freezing",
        description: "Touchscreen can freeze or become unresponsive",
        severity: "Low - software issue",
        solution: "Software update from dealer, or hard reset of infotainment system"
      },
      {
        issue: "Excessive oil consumption",
        description: "Some 2.5L engines consume more oil than expected",
        severity: "Medium",
        solution: "Monitor oil level between changes. Some cases covered under warranty"
      }
    ],
    "2012-2017": [
      {
        issue: "Dashboard melting",
        description: "Dashboard can develop sticky surface or melt in hot climates",
        severity: "Low - cosmetic",
        solution: "Toyota recalled and replaced dashboards for affected vehicles"
      },
      {
        issue: "Transmission shift flare",
        description: "Transmission may have delayed shifts or rev between gears",
        severity: "Medium",
        solution: "Transmission software update or fluid change may help"
      }
    ]
  },
  "toyota corolla": {
    "2014-2019": [
      {
        issue: "CVT transmission shudder",
        description: "CVT may shudder during acceleration, especially when cold",
        severity: "Medium",
        solution: "Toyota issued TSB for software update. May need transmission fluid change"
      },
      {
        issue: "Evaporator core clogging",
        description: "AC evaporator can clog with debris, reducing cooling",
        severity: "Low to Medium",
        solution: "Clean or replace evaporator core"
      }
    ]
  }
};

// Common diagnostic codes with explanations
export const commonDTCCodes = {
  "P0300": {
    description: "Random/Multiple Cylinder Misfire Detected",
    commonCauses: ["Worn spark plugs", "Faulty ignition coils", "Vacuum leaks", "Low compression", "Bad fuel injectors"],
    urgency: "Medium - can damage catalytic converter if ignored",
    diyFix: "Start with spark plugs (cheapest fix), then check coils"
  },
  "P0420": {
    description: "Catalyst System Efficiency Below Threshold (Bank 1)",
    commonCauses: ["Failing catalytic converter", "Oxygen sensor failure", "Exhaust leak", "Engine running rich/lean"],
    urgency: "Low to Medium - won't hurt engine but affects emissions",
    diyFix: "Check for exhaust leaks first, then replace O2 sensors. Cat replacement is last resort"
  },
  "P0171": {
    description: "System Too Lean (Bank 1)",
    commonCauses: ["Vacuum leak", "Dirty MAF sensor", "Weak fuel pump", "Clogged fuel filter", "Bad O2 sensor"],
    urgency: "Medium - affects performance and fuel economy",
    diyFix: "Check for vacuum leaks, clean MAF sensor with MAF cleaner"
  },
  "P0172": {
    description: "System Too Rich (Bank 1)",
    commonCauses: ["Dirty air filter", "Faulty MAF sensor", "Leaking fuel injectors", "Bad O2 sensor"],
    urgency: "Medium - poor fuel economy and can damage catalytic converter",
    diyFix: "Replace air filter, clean MAF sensor, check O2 sensors"
  },
  "P0128": {
    description: "Coolant Thermostat Temperature Below Regulating Temperature",
    commonCauses: ["Stuck open thermostat", "Low coolant level", "Faulty coolant temperature sensor"],
    urgency: "Low - but affects fuel economy and emissions",
    diyFix: "Replace thermostat (usually $20-40 part)"
  },
  "P0455": {
    description: "Evaporative Emission System Leak Detected (Large Leak)",
    commonCauses: ["Loose or missing gas cap", "Cracked EVAP hose", "Faulty purge valve", "Leaking fuel tank"],
    urgency: "Low - not a performance issue",
    diyFix: "Tighten gas cap, inspect EVAP hoses for cracks"
  },
  "P0456": {
    description: "Evaporative Emission System Leak Detected (Small Leak)",
    commonCauses: ["Loose gas cap", "Small crack in EVAP hose", "Faulty purge solenoid"],
    urgency: "Low",
    diyFix: "Check gas cap seal, inspect EVAP system"
  },
  "P0401": {
    description: "Exhaust Gas Recirculation Flow Insufficient",
    commonCauses: ["Clogged EGR valve", "Clogged EGR passages", "Faulty EGR valve", "Carbon buildup"],
    urgency: "Low to Medium",
    diyFix: "Clean EGR valve with carbon cleaner or replace"
  },
  "P0442": {
    description: "Evaporative Emission System Leak Detected (Small Leak)",
    commonCauses: ["Loose gas cap", "Damaged EVAP canister", "Faulty purge valve"],
    urgency: "Low",
    diyFix: "Check gas cap and EVAP hoses"
  },
  "P0141": {
    description: "O2 Sensor Heater Circuit Malfunction (Bank 1 Sensor 2)",
    commonCauses: ["Faulty downstream O2 sensor", "Wiring issues", "Blown fuse"],
    urgency: "Low - doesn't affect driveability",
    diyFix: "Replace downstream O2 sensor"
  }
};

// Seasonal maintenance tips from users
export const seasonalTips = {
  winter: [
    "Check battery - cold weather reduces capacity by 30-50%",
    "Switch to winter wiper blades if you live in snow areas",
    "Check tire pressure more frequently - drops 1 PSI per 10°F",
    "Keep washer fluid topped off with winter formula (won't freeze)",
    "Consider winter tires if you drive in snow/ice regularly",
    "Check coolant mixture - should protect to at least -30°F",
    "Keep gas tank at least half full to prevent fuel line freeze"
  ],
  summer: [
    "Check AC system before hot weather hits",
    "Inspect coolant level and hoses for leaks",
    "Check tire pressure - increases in hot weather",
    "Test battery - heat kills batteries faster than cold",
    "Inspect wiper blades - summer sun degrades rubber",
    "Check engine oil level more often - hot weather increases consumption",
    "Clean or replace cabin air filter for better AC performance"
  ],
  spring: [
    "Replace wiper blades after winter wear",
    "Check alignment after winter potholes",
    "Inspect tires for winter damage",
    "Clean winter salt off undercarriage",
    "Check and replace cabin air filter",
    "Top off all fluids",
    "Inspect brakes after winter driving"
  ],
  fall: [
    "Prepare for winter - check battery, coolant, tires",
    "Replace wiper blades before winter",
    "Check heater and defroster operation",
    "Inspect tire tread depth for winter driving",
    "Stock emergency kit (blanket, flashlight, ice scraper)",
    "Switch to winter washer fluid",
    "Consider all-season or winter tires"
  ]
};

// Money-saving tips from experienced users
export const moneySavingTips = [
  "Buy parts online and take to trusted mechanic for installation - can save 30-50%",
  "Learn to do oil changes yourself - saves $30-50 per change",
  "Check YouTube for repair tutorials - many repairs are easier than you think",
  "Get multiple quotes for major repairs",
  "Replace air and cabin filters yourself - takes 5 minutes and saves $30-40",
  "Use auto parts store free services: battery testing, code reading, tool lending",
  "Buy quality parts once instead of cheap parts multiple times",
  "Keep up with maintenance - prevents expensive repairs later",
  "Check for recalls and TSBs - free fixes for known issues",
  "Join online forums for your car model - tons of free advice"
];

// Tools every DIYer should have (from user recommendations)
export const recommendedTools = [
  {
    name: "Socket set (1/4\" and 3/8\" drive)",
    cost: "$30-100",
    uses: "90% of basic repairs",
    priority: "Essential"
  },
  {
    name: "Jack and jack stands",
    cost: "$50-150",
    uses: "Any work under the car",
    priority: "Essential - NEVER use just a jack"
  },
  {
    name: "OBD2 code reader",
    cost: "$20-100",
    uses: "Read check engine codes at home",
    priority: "Very useful - pays for itself quickly"
  },
  {
    name: "Torque wrench",
    cost: "$30-100",
    uses: "Critical for lug nuts, spark plugs, head bolts",
    priority: "Important for safety"
  },
  {
    name: "Oil drain pan",
    cost: "$10-25",
    uses: "Oil changes",
    priority: "Essential for oil changes"
  },
  {
    name: "Breaker bar",
    cost: "$15-40",
    uses: "Stubborn bolts (lug nuts, drain plugs)",
    priority: "Very helpful"
  },
  {
    name: "Multimeter",
    cost: "$15-50",
    uses: "Electrical diagnostics",
    priority: "Useful for electrical issues"
  }
];
