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
    issue:
      "Noticed a grinding sound when coming to a stop. Sound was louder in the morning.",
    solution:
      "Brake pads were completely worn down to the metal backing. Replaced front brake pads and rotors (rotors were scored from metal-to-metal contact).",
    partsUsed: [
      "Premium Ceramic Brake Pad Set",
      "Front Brake Rotor Set",
    ],
    tips: [
      "Don't ignore squealing sounds - they're your early warning",
      "Once you hear grinding, you've likely damaged the rotors",
      "Replacing rotors costs 3x more than just replacing pads early",
    ],
  },
  {
    scenario: "Check engine light and rough idle",
    vehicle: "2015 Toyota Camry",
    issue:
      "Check engine light came on, car idles rough and hesitates during acceleration. Getting code P0300 (random misfire).",
    solution:
      "Spark plugs hadn't been changed in 80,000 miles (should be done at 60k). Replaced all spark plugs and the issue disappeared.",
    partsUsed: ["Performance Spark Plugs (4-Pack)"],
    tips: [
      "Get the codes read for free at auto parts stores",
      "P0300-P0308 are misfire codes - usually spark plugs or coils",
      "Replace all plugs at once, not just the bad one",
    ],
  },
  {
    scenario: "Car won't start in cold weather",
    vehicle: "2014 Honda Accord",
    issue:
      "Car struggles to start when temperature drops below 40°F. Sometimes just clicks.",
    solution:
      "Battery was 6 years old and weak. Cold weather reduces battery capacity. Replaced battery and problem solved.",
    partsUsed: ["Battery 12V 600CCA"],
    tips: [
      "Batteries typically last 3-5 years",
      "Cold weather can reduce battery power by 30-50%",
      "Most auto parts stores will test your battery for free",
    ],
  },
  {
    scenario: "Poor gas mileage suddenly decreased",
    vehicle: "2018 Honda Civic",
    issue:
      "Fuel economy dropped from 35 mpg to 28 mpg over a few weeks. No warning lights.",
    solution:
      "Air filter was completely clogged with dirt and debris. Replaced air filter and MPG returned to normal within a tank of gas.",
    partsUsed: ["Heavy Duty Air Filter"],
    tips: [
      "Check air filter every oil change",
      "Dirty air filter can reduce MPG by 10-20%",
      "Takes 5 minutes to replace and costs $20",
    ],
  },
  {
    scenario: "Musty smell from AC vents",
    vehicle: "2016 Toyota Corolla",
    issue:
      "Strong musty odor when turning on AC or heat. Worse in humid weather.",
    solution:
      "Cabin air filter was moldy and hadn't been replaced in 3 years. New cabin filter eliminated the smell immediately.",
    partsUsed: ["Cabin Air Filter"],
    tips: [
      "Replace cabin filter every 15,000 miles or annually",
      "Important for air quality and allergies",
      "Usually located behind glove box - easy DIY",
    ],
  },
  {
    scenario: "Overheating on highway",
    vehicle: "2013 Honda Civic",
    issue:
      "Temperature gauge climbs to red zone during highway driving. City driving seems fine.",
    solution:
      "Coolant was low due to small leak in radiator hose. Topped off coolant temporarily, then replaced hose and did full coolant flush.",
    partsUsed: [],
    tips: [
      "Never open radiator cap when engine is hot - can cause severe burns",
      "Check coolant level regularly",
      "Overheating can warp cylinder heads - pull over immediately if gauge hits red",
    ],
  },
  {
    scenario: "Vibration at 60-70 mph",
    vehicle: "2019 Honda Civic",
    issue:
      "Steering wheel shakes when driving between 60-70 mph. Worse at 65 mph.",
    solution:
      "Wheels were out of balance after hitting a pothole. Had wheels balanced and alignment checked. Vibration disappeared.",
    partsUsed: [],
    tips: [
      "Unbalanced wheels typically cause vibration at specific speeds",
      "Wheel balance costs $15-20 per tire",
      "Also check tire pressure - should be checked monthly",
    ],
  },
  {
    scenario: "Oil change interval confusion",
    vehicle: "2020 Honda Civic",
    issue:
      "Owner's manual says 7,500 miles but oil change sticker says 3,000 miles. Which is correct?",
    solution:
      "Modern synthetic oils can safely go 7,500-10,000 miles. The 3,000 mile rule is outdated. Follow manufacturer recommendation in owner's manual.",
    partsUsed: [
      "Synthetic Motor Oil 5W-30 (5qt)",
      "OEM Oil Filter",
    ],
    tips: [
      "Always use the oil weight specified in your owner's manual",
      "Synthetic oil lasts longer than conventional",
      "Check oil level monthly even between changes",
    ],
  },
  {
    scenario: "Brake pedal feels soft/spongy",
    vehicle: "2015 Toyota Camry",
    issue:
      "Brake pedal goes down further than usual and feels soft. Still stops but requires more pressure.",
    solution:
      "Air in brake lines from recent brake pad replacement. Had brakes bled properly and pedal feel returned to normal. Also checked brake fluid level.",
    partsUsed: [],
    tips: [
      "Soft pedal often means air in brake lines",
      "Can also indicate brake fluid leak - check for puddles",
      "Never drive with spongy brakes - serious safety issue",
    ],
  },
  {
    scenario: "First time DIY oil change",
    vehicle: "2017 Honda Civic",
    issue:
      "Want to change oil myself but nervous about doing it wrong.",
    solution:
      "Watched YouTube tutorials, gathered tools (wrench, drain pan, jack stands). Took my time, followed steps carefully. Saved $40 compared to shop.",
    partsUsed: [
      "Synthetic Motor Oil 5W-30 (5qt)",
      "OEM Oil Filter",
    ],
    tips: [
      "Never get under car supported only by jack - always use jack stands",
      "Don't overtighten drain plug - hand tight plus 1/4 turn",
      "Recycle old oil at auto parts stores for free",
    ],
  },
  {
    scenario: "Windshield wipers streaking badly",
    vehicle: "2016 Honda Accord",
    issue:
      "Wipers leave streaks and don't clear water effectively. Rainy driving is dangerous.",
    solution:
      "Wiper blades were 2 years old and rubber was cracked. Replaced both blades - visibility restored immediately.",
    partsUsed: ["Windshield Wiper Blade Set"],
    tips: [
      "Replace wiper blades every 6-12 months",
      "Clean windshield regularly to extend blade life",
      "Cost about $25 for both blades - easy 5-minute install",
    ],
  },
  {
    scenario: "Squealing noise from engine bay",
    vehicle: "2014 Toyota Camry",
    issue:
      "High-pitched squeal from engine, especially when cold. Gets quieter as engine warms up.",
    solution:
      "Serpentine belt was worn and glazed. Replaced belt and tensioner pulley. Noise completely gone.",
    partsUsed: [],
    tips: [
      "Squealing belts can snap and leave you stranded",
      "Check belt for cracks or glazing every oil change",
      "Typical belt life is 50,000-100,000 miles",
    ],
  },
  {
    scenario: "Transmission shifting hard",
    vehicle: "2012 Honda Civic",
    issue:
      "Automatic transmission shifts roughly, especially from 1st to 2nd gear.",
    solution:
      "Transmission fluid was dark and burnt (hadn't been changed in 90,000 miles). Did transmission fluid flush and shifts became smooth again.",
    partsUsed: ["Transmission Fluid ATF+4 (1qt)"],
    tips: [
      "Check transmission fluid color - should be red/pink, not brown",
      "Many modern cars require transmission service at 60k miles",
      "Transmission repairs are expensive - maintain it properly",
    ],
  },
  {
    scenario: "New brake pads making noise",
    vehicle: "2018 Honda Civic",
    issue:
      "Just replaced brake pads but they squeal when braking. Did I install them wrong?",
    solution:
      "New brake pads need a 'bedding-in' period. Followed proper break-in procedure (gentle stops for first 100 miles). Noise went away after bedding in.",
    partsUsed: ["Premium Ceramic Brake Pad Set"],
    tips: [
      "New pads need break-in period to transfer material to rotors",
      "Avoid hard braking for first 100-200 miles",
      "Some noise is normal during bedding-in process",
    ],
  },
  {
    scenario: "Warning light says low tire pressure",
    vehicle: "2019 Honda Civic",
    issue: "TPMS light came on. All tires look fine visually.",
    solution:
      "Checked tire pressure with gauge - all were 5-7 PSI low due to temperature drop. Filled to correct pressure (33 PSI) and light went off after driving.",
    partsUsed: [],
    tips: [
      "Tire pressure drops 1 PSI for every 10°F temperature decrease",
      "Check pressure monthly and before road trips",
      "Proper pressure improves safety, MPG, and tire life",
    ],
  },
];

// Common user questions database
export const userQuestions: UserQuestion[] = [
  {
    question: "How often should I change my oil?",
    category: "maintenance",
    keywords: ["oil", "change", "interval", "how often"],
    context:
      "One of the most common maintenance questions. Answer depends on oil type and driving conditions.",
  },
  {
    question: "My check engine light is on, what should I do?",
    category: "troubleshooting",
    keywords: ["check engine", "warning light", "cel"],
    context:
      "Very common concern. Needs code reading to diagnose specific issue.",
  },
  {
    question: "Can I drive with grinding brakes?",
    category: "safety",
    keywords: ["grinding", "brake", "safe", "drive"],
    context:
      "Safety-critical question. Answer is no - metal-to-metal contact damages rotors and reduces braking.",
  },
  {
    question:
      "What's the difference between synthetic and conventional oil?",
    category: "parts",
    keywords: [
      "synthetic",
      "conventional",
      "oil",
      "difference",
    ],
    context: "Common product comparison question.",
  },
  {
    question: "Why is my car overheating?",
    category: "troubleshooting",
    keywords: ["overheating", "hot", "temperature", "gauge"],
    context: "Common issue with multiple possible causes.",
  },
  {
    question:
      "How do I know when my brake pads need replacing?",
    category: "maintenance",
    keywords: ["brake", "pads", "replace", "when"],
    context:
      "Preventive maintenance question about recognizing wear.",
  },
  {
    question: "What does P0420 code mean?",
    category: "troubleshooting",
    keywords: ["p0420", "code", "catalytic converter"],
    context:
      "Specific diagnostic code question about catalytic converter efficiency.",
  },
  {
    question: "Can I mix different brands of oil?",
    category: "parts",
    keywords: ["mix", "oil", "brand", "different"],
    context: "Common question about oil compatibility.",
  },
  {
    question: "My car won't start, just clicks. What's wrong?",
    category: "troubleshooting",
    keywords: ["won't start", "clicking", "dead"],
    context:
      "Common starting issue, usually battery or starter.",
  },
  {
    question: "How long do spark plugs last?",
    category: "maintenance",
    keywords: ["spark plug", "last", "lifespan", "replace"],
    context: "Maintenance interval question.",
  },
  {
    question: "Is it safe to drive with a cracked windshield?",
    category: "safety",
    keywords: ["windshield", "crack", "safe", "drive"],
    context: "Safety question about windshield integrity.",
  },
  {
    question: "What causes blue smoke from exhaust?",
    category: "troubleshooting",
    keywords: ["blue", "smoke", "exhaust", "burning oil"],
    context: "Symptom diagnosis question about oil burning.",
  },
  {
    question: "Can I replace just one tire?",
    category: "parts",
    keywords: ["tire", "replace", "one", "single"],
    context: "Question about tire replacement best practices.",
  },
  {
    question: "How often should I rotate my tires?",
    category: "maintenance",
    keywords: ["rotate", "tire", "interval", "how often"],
    context: "Tire maintenance question.",
  },
  {
    question: "What's the best oil for high mileage cars?",
    category: "parts",
    keywords: ["high mileage", "oil", "best", "old car"],
    context: "Product recommendation for older vehicles.",
  },
  {
    question: "My battery is 4 years old, should I replace it?",
    category: "maintenance",
    keywords: ["battery", "old", "replace", "age"],
    context: "Preventive replacement question.",
  },
  {
    question: "Why does my steering wheel shake?",
    category: "troubleshooting",
    keywords: ["steering", "shake", "vibration", "wobble"],
    context: "Common symptom with multiple causes.",
  },
  {
    question: "Can I use 5W-20 instead of 5W-30?",
    category: "parts",
    keywords: ["oil", "weight", "substitute", "different"],
    context: "Oil specification question.",
  },
  {
    question: "How do I reset check engine light?",
    category: "howto",
    keywords: ["reset", "check engine", "clear", "code"],
    context: "Procedural question about clearing codes.",
  },
  {
    question: "What causes a car to pull to one side?",
    category: "troubleshooting",
    keywords: ["pull", "drift", "alignment", "steering"],
    context: "Handling issue diagnosis.",
  },
  {
    question: "Is brake fluid really that important?",
    category: "maintenance",
    keywords: ["brake fluid", "important", "necessary"],
    context:
      "Question about brake fluid maintenance importance.",
  },
  {
    question: "Why is my AC blowing warm air?",
    category: "troubleshooting",
    keywords: ["ac", "air conditioning", "warm", "not cold"],
    context: "Common AC complaint.",
  },
  {
    question: "Can I drive with a nail in my tire?",
    category: "safety",
    keywords: ["nail", "tire", "puncture", "safe"],
    context: "Safety question about tire damage.",
  },
  {
    question: "What's included in a tune-up?",
    category: "maintenance",
    keywords: ["tune-up", "service", "included"],
    context:
      "Question about comprehensive maintenance service.",
  },
  {
    question: "How do I know if my alternator is bad?",
    category: "troubleshooting",
    keywords: ["alternator", "bad", "failing", "symptoms"],
    context: "Electrical system diagnosis.",
  },
];

// Vehicle-specific common issues database
export const vehicleIssueDatabase = {
  "honda civic": {
    "2016-2020": [
      {
        issue: "1.5T oil dilution",
        description:
          "Gasoline mixing with engine oil in 1.5L turbo models, especially in cold climates with short trips",
        severity:
          "Medium - TSB issued, software update available",
        solution:
          "Honda issued software update. Monitor oil level regularly.",
      },
      {
        issue: "AC compressor clutch failure",
        description:
          "AC compressor clutch can fail prematurely, causing AC to stop working",
        severity: "Medium - common issue",
        solution:
          "Replace AC compressor clutch or full compressor assembly",
      },
      {
        issue: "Paint chipping",
        description:
          "Some models have issues with paint chipping, especially on hood and bumper",
        severity: "Low - cosmetic",
        solution: "Touch up paint or repaint affected areas",
      },
    ],
    "2012-2015": [
      {
        issue: "Transmission issues",
        description:
          "Some CVT models experience shuddering or jerking, especially when accelerating",
        severity: "Medium to High",
        solution:
          "Honda extended warranty for CVT. May need transmission software update or replacement",
      },
      {
        issue: "Cracked engine block",
        description:
          "2006-2009 models had cracked engine block issues (less common in 2012+)",
        severity: "High - rare in this generation",
        solution: "Engine replacement if affected",
      },
    ],
  },
  "toyota camry": {
    "2018-2023": [
      {
        issue: "Infotainment freezing",
        description:
          "Touchscreen can freeze or become unresponsive",
        severity: "Low - software issue",
        solution:
          "Software update from dealer, or hard reset of infotainment system",
      },
      {
        issue: "Excessive oil consumption",
        description:
          "Some 2.5L engines consume more oil than expected",
        severity: "Medium",
        solution:
          "Monitor oil level between changes. Some cases covered under warranty",
      },
    ],
    "2012-2017": [
      {
        issue: "Dashboard melting",
        description:
          "Dashboard can develop sticky surface or melt in hot climates",
        severity: "Low - cosmetic",
        solution:
          "Toyota recalled and replaced dashboards for affected vehicles",
      },
      {
        issue: "Transmission shift flare",
        description:
          "Transmission may have delayed shifts or rev between gears",
        severity: "Medium",
        solution:
          "Transmission software update or fluid change may help",
      },
    ],
  },
  "toyota corolla": {
    "2014-2019": [
      {
        issue: "CVT transmission shudder",
        description:
          "CVT may shudder during acceleration, especially when cold",
        severity: "Medium",
        solution:
          "Toyota issued TSB for software update. May need transmission fluid change",
      },
      {
        issue: "Evaporator core clogging",
        description:
          "AC evaporator can clog with debris, reducing cooling",
        severity: "Low to Medium",
        solution: "Clean or replace evaporator core",
      },
    ],
  },
};

// Common diagnostic codes with explanations
export const commonDTCCodes = {
  P0300: {
    description: "Random/Multiple Cylinder Misfire Detected",
    commonCauses: [
      "Worn spark plugs",
      "Faulty ignition coils",
      "Vacuum leaks",
      "Low compression",
      "Bad fuel injectors",
    ],
    urgency:
      "Medium - can damage catalytic converter if ignored",
    diyFix:
      "Start with spark plugs (cheapest fix), then check coils",
  },
  P0420: {
    description:
      "Catalyst System Efficiency Below Threshold (Bank 1)",
    commonCauses: [
      "Failing catalytic converter",
      "Oxygen sensor failure",
      "Exhaust leak",
      "Engine running rich/lean",
    ],
    urgency:
      "Low to Medium - won't hurt engine but affects emissions",
    diyFix:
      "Check for exhaust leaks first, then replace O2 sensors. Cat replacement is last resort",
  },
  P0171: {
    description: "System Too Lean (Bank 1)",
    commonCauses: [
      "Vacuum leak",
      "Dirty MAF sensor",
      "Weak fuel pump",
      "Clogged fuel filter",
      "Bad O2 sensor",
    ],
    urgency: "Medium - affects performance and fuel economy",
    diyFix:
      "Check for vacuum leaks, clean MAF sensor with MAF cleaner",
  },
  P0172: {
    description: "System Too Rich (Bank 1)",
    commonCauses: [
      "Dirty air filter",
      "Faulty MAF sensor",
      "Leaking fuel injectors",
      "Bad O2 sensor",
    ],
    urgency:
      "Medium - poor fuel economy and can damage catalytic converter",
    diyFix:
      "Replace air filter, clean MAF sensor, check O2 sensors",
  },
  P0128: {
    description:
      "Coolant Thermostat Temperature Below Regulating Temperature",
    commonCauses: [
      "Stuck open thermostat",
      "Low coolant level",
      "Faulty coolant temperature sensor",
    ],
    urgency: "Low - but affects fuel economy and emissions",
    diyFix: "Replace thermostat (usually $20-40 part)",
  },
  P0455: {
    description:
      "Evaporative Emission System Leak Detected (Large Leak)",
    commonCauses: [
      "Loose or missing gas cap",
      "Cracked EVAP hose",
      "Faulty purge valve",
      "Leaking fuel tank",
    ],
    urgency: "Low - not a performance issue",
    diyFix: "Tighten gas cap, inspect EVAP hoses for cracks",
  },
  P0456: {
    description:
      "Evaporative Emission System Leak Detected (Small Leak)",
    commonCauses: [
      "Loose gas cap",
      "Small crack in EVAP hose",
      "Faulty purge solenoid",
    ],
    urgency: "Low",
    diyFix: "Check gas cap seal, inspect EVAP system",
  },
  P0401: {
    description: "Exhaust Gas Recirculation Flow Insufficient",
    commonCauses: [
      "Clogged EGR valve",
      "Clogged EGR passages",
      "Faulty EGR valve",
      "Carbon buildup",
    ],
    urgency: "Low to Medium",
    diyFix: "Clean EGR valve with carbon cleaner or replace",
  },
  P0442: {
    description:
      "Evaporative Emission System Leak Detected (Small Leak)",
    commonCauses: [
      "Loose gas cap",
      "Damaged EVAP canister",
      "Faulty purge valve",
    ],
    urgency: "Low",
    diyFix: "Check gas cap and EVAP hoses",
  },
  P0141: {
    description:
      "O2 Sensor Heater Circuit Malfunction (Bank 1 Sensor 2)",
    commonCauses: [
      "Faulty downstream O2 sensor",
      "Wiring issues",
      "Blown fuse",
    ],
    urgency: "Low - doesn't affect driveability",
    diyFix: "Replace downstream O2 sensor",
  },
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
    "Keep gas tank at least half full to prevent fuel line freeze",
  ],
  summer: [
    "Check AC system before hot weather hits",
    "Inspect coolant level and hoses for leaks",
    "Check tire pressure - increases in hot weather",
    "Test battery - heat kills batteries faster than cold",
    "Inspect wiper blades - summer sun degrades rubber",
    "Check engine oil level more often - hot weather increases consumption",
    "Clean or replace cabin air filter for better AC performance",
  ],
  spring: [
    "Replace wiper blades after winter wear",
    "Check alignment after winter potholes",
    "Inspect tires for winter damage",
    "Clean winter salt off undercarriage",
    "Check and replace cabin air filter",
    "Top off all fluids",
    "Inspect brakes after winter driving",
  ],
  fall: [
    "Prepare for winter - check battery, coolant, tires",
    "Replace wiper blades before winter",
    "Check heater and defroster operation",
    "Inspect tire tread depth for winter driving",
    "Stock emergency kit (blanket, flashlight, ice scraper)",
    "Switch to winter washer fluid",
    "Consider all-season or winter tires",
  ],
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
  "Join online forums for your car model - tons of free advice",
];

// Tools every DIYer should have (from user recommendations)
export const recommendedTools = [
  {
    name: 'Socket set (1/4" and 3/8" drive)',
    cost: "$30-100",
    uses: "90% of basic repairs",
    priority: "Essential",
  },
  {
    name: "Jack and jack stands",
    cost: "$50-150",
    uses: "Any work under the car",
    priority: "Essential - NEVER use just a jack",
  },
  {
    name: "OBD2 code reader",
    cost: "$20-100",
    uses: "Read check engine codes at home",
    priority: "Very useful - pays for itself quickly",
  },
  {
    name: "Torque wrench",
    cost: "$30-100",
    uses: "Critical for lug nuts, spark plugs, head bolts",
    priority: "Important for safety",
  },
  {
    name: "Oil drain pan",
    cost: "$10-25",
    uses: "Oil changes",
    priority: "Essential for oil changes",
  },
  {
    name: "Breaker bar",
    cost: "$15-40",
    uses: "Stubborn bolts (lug nuts, drain plugs)",
    priority: "Very helpful",
  },
  {
    name: "Multimeter",
    cost: "$15-50",
    uses: "Electrical diagnostics",
    priority: "Useful for electrical issues",
  },
];

// Comprehensive automotive knowledge encyclopedia
export const automotiveEncyclopedia = {
  // Engine components and systems
  engine: {
    components: {
      pistons:
        "Move up and down in cylinders, compress air-fuel mixture and transfer combustion force to crankshaft",
      crankshaft:
        "Converts reciprocating motion of pistons into rotational motion",
      camshaft:
        "Controls opening and closing of intake and exhaust valves",
      valves:
        "Control flow of air-fuel mixture into cylinder and exhaust gases out",
      sparkPlugs:
        "Ignite the air-fuel mixture in gasoline engines",
      fuelInjectors:
        "Spray precise amounts of fuel into engine cylinders",
      timingBelt:
        "Synchronizes crankshaft and camshaft rotation. Critical to replace per schedule (60k-100k miles)",
      headGasket:
        "Seals cylinder head to engine block, prevents coolant and oil mixing",
    },
    types: {
      inline4:
        "4 cylinders in a row. Most common in compact cars. Good fuel economy, simple design",
      v6: "6 cylinders in V configuration. Balance of power and efficiency. Common in midsize cars and SUVs",
      v8: "8 cylinders in V configuration. High power output. Found in trucks, sports cars, luxury vehicles",
      boxer:
        "Horizontally opposed cylinders. Low center of gravity. Used by Subaru and Porsche",
      rotary:
        "Uses rotors instead of pistons. Compact, high-revving. Rare (Mazda RX-7, RX-8)",
      diesel:
        "Compression ignition. Better fuel economy and torque. More expensive to maintain",
      hybrid:
        "Combines gasoline engine with electric motor. Excellent fuel economy",
      electric:
        "Battery-powered electric motor only. Zero emissions, instant torque, low maintenance",
    },
    displacement: {
      meaning:
        "Total volume of all cylinders. Measured in liters or cubic inches",
      impact:
        "Larger displacement generally means more power but lower fuel economy",
      examples:
        "1.5L (compact car), 2.5L (midsize sedan), 3.5L (SUV), 5.0L (truck/performance)",
    },
  },

  // Transmission systems
  transmission: {
    types: {
      manual:
        "Driver shifts gears manually. More engaging, better fuel economy, cheaper to maintain. Becoming rare",
      automatic:
        "Shifts gears automatically using torque converter. Smooth, convenient, most common",
      cvt: "Continuously Variable Transmission. No fixed gears, infinite ratios. Best fuel economy but some complain about feel",
      dct: "Dual Clutch Transmission. Two clutches for odd/even gears. Fast shifts, sporty feel. Used in performance cars",
      amt: "Automated Manual. Manual transmission with automatic clutch. Budget-friendly auto option",
    },
    maintenance: {
      fluidChange:
        "30k-60k miles for most automatics. Some 'lifetime' fluids still benefit from changes",
      symptoms:
        "Slipping, hard shifts, delayed engagement, whining noise all indicate problems",
      cost: "Transmission repairs are expensive ($1500-$5000). Maintenance is critical",
    },
  },

  // Brake systems
  brakes: {
    types: {
      disc: "Most common. Better heat dissipation, more effective. Front brakes on most cars",
      drum: "Older technology. Sometimes used on rear of economy cars. Less effective but cheaper",
      abs: "Anti-lock Braking System. Prevents wheel lockup during hard braking. Standard on modern cars",
      ebd: "Electronic Brake Distribution. Optimizes brake force to each wheel",
      brakeAssist:
        "Detects emergency braking and applies maximum force",
    },
    components: {
      pads: "Friction material that presses against rotor. Wear item, 30k-70k miles",
      rotors:
        "Metal disc that pads clamp onto. Can warp from heat. Last 50k-70k miles",
      calipers:
        "House brake pads and use hydraulic pressure to clamp pads onto rotors",
      masterCylinder:
        "Converts brake pedal pressure into hydraulic pressure",
      brakeFluid:
        "Hydraulic fluid. Absorbs moisture over time. Should be flushed every 2-3 years",
    },
  },

  // Suspension and steering
  suspension: {
    components: {
      shocks:
        "Dampen spring oscillations. Absorb bumps. Replace at 50k-100k miles",
      struts:
        "Combine shock and spring in one unit. Structural component. More expensive than shocks",
      springs:
        "Support vehicle weight, absorb impacts. Coil, leaf, or air springs",
      controlArms:
        "Connect suspension to frame. Allow wheel movement. Bushings wear out",
      ballJoints:
        "Pivot points for control arms. Critical safety item when worn",
      swaybars: "Reduce body roll in turns. Improve handling",
    },
    alignment: {
      camber:
        "Inward/outward tilt of wheel top. Affects tire wear and handling",
      caster:
        "Forward/backward tilt of steering axis. Affects stability",
      toe: "Whether wheels point in or out. Most common cause of tire wear",
      when: "After hitting potholes, with uneven tire wear, or annually",
    },
  },

  // Electrical system
  electrical: {
    battery: {
      function:
        "Stores electrical energy, starts engine, powers accessories when engine off",
      voltage:
        "12V standard. Fully charged is 12.6V. Below 12.4V is getting weak",
      testing:
        "Load test at auto parts store. Check voltage with multimeter",
      lifespan:
        "3-5 years average. Heat kills batteries faster than cold",
      maintenance:
        "Check terminals for corrosion. Keep charged. Avoid deep discharge",
    },
    alternator: {
      function:
        "Generates electricity when engine runs. Charges battery, powers electrical systems",
      output:
        "13.5-14.5V when running. Lower indicates failing alternator",
      symptoms:
        "Dim lights, battery warning light, electrical issues, dead battery",
      lifespan: "80k-150k miles typically",
    },
    starter: {
      function: "Electric motor that cranks engine to start it",
      symptoms:
        "Clicking sound, slow crank, no crank, grinding noise",
      lifespan: "100k-150k miles average",
    },
  },

  // Cooling system
  cooling: {
    components: {
      radiator:
        "Heat exchanger that cools coolant using airflow",
      waterPump:
        "Circulates coolant through engine and radiator",
      thermostat:
        "Controls coolant flow to maintain operating temperature (usually 195-220°F)",
      coolant:
        "Liquid that absorbs engine heat. Antifreeze prevents freezing and boiling",
      radiatorCap:
        "Maintains system pressure (15-16 PSI). Raises boiling point",
      fan: "Pulls air through radiator when vehicle stationary or low speed",
    },
    maintenance: {
      coolantChange:
        "30k-50k miles. Becomes acidic and loses protective properties",
      mixRatio:
        "50/50 coolant to water. Protects to -34°F and raises boiling point",
      checking:
        "Check level when cold. Never open when hot - severe burn risk",
    },
  },

  // Fuel system
  fuel: {
    types: {
      regular87:
        "87 octane. Sufficient for most engines. Using higher is waste of money if not required",
      midgrade89:
        "89 octane. Rarely required. Marketing gimmick for most cars",
      premium91:
        "91-93 octane. Required for high-compression engines. Prevents knocking",
      diesel:
        "Compression ignition fuel. More energy dense. Not interchangeable with gasoline",
      e85: "85% ethanol. Cheaper, less energy. Requires flex-fuel vehicle",
    },
    components: {
      fuelPump:
        "Pumps fuel from tank to engine. In-tank on most modern cars",
      fuelFilter:
        "Removes contaminants. Often in tank on newer cars (not serviceable)",
      injectors:
        "Spray fuel into engine. Can clog. Cleaning additives can help",
      fuelTank:
        "Stores fuel. Can rust internally on older vehicles",
    },
  },

  // Tires and wheels
  tires: {
    types: {
      allSeason:
        "Good compromise for most conditions. Most common. 3PMSF symbol for better winter traction",
      summer:
        "Best dry/wet performance. Poor in cold/snow. Performance tires",
      winter:
        "Soft compound for cold weather. Excellent snow/ice traction. Wear fast in heat",
      allTerrain:
        "For trucks/SUVs. On-road comfort with off-road capability",
      mudTerrain:
        "Aggressive off-road tires. Loud on road, poor fuel economy",
    },
    reading: {
      example: "P215/65R15 95H",
      p: "Passenger vehicle",
      width215: "215mm tire width",
      aspect65:
        "65% aspect ratio (sidewall height = 65% of width)",
      r: "Radial construction",
      diameter15: "15 inch wheel diameter",
      loadIndex95: "1521 lbs max load per tire",
      speedH: "H = 130 mph max speed rating",
    },
    maintenance: {
      pressure:
        "Check monthly when cold. Door jamb sticker has correct PSI (NOT sidewall max)",
      rotation:
        "Every 5k-7k miles. Extends tire life, even wear",
      alignment:
        "Annually or with uneven wear. Saves tires, improves handling",
      balancing:
        "When installing or if vibration. Small weights on wheel",
      treadDepth:
        'Penny test: Insert penny with Lincoln\'s head down. If you see top of head, replace. Legal minimum 2/32", replace at 4/32"',
    },
  },

  // Fluids
  fluids: {
    engineOil: {
      function:
        "Lubricates moving parts, removes heat, cleans engine, prevents corrosion",
      types:
        "Conventional (cheap, 3k-5k miles), Synthetic blend (mid-range), Full synthetic (best, 7.5k-10k miles)",
      viscosity:
        "5W-30 most common. First number is cold viscosity, second is hot. Use what manual specifies",
      checking:
        "Monthly when cold. Dipstick should be between MIN and MAX marks",
    },
    transmissionFluid: {
      function:
        "Lubricates gears, cools transmission, provides hydraulic pressure",
      color:
        "Should be red/pink. Brown or burnt smell indicates problems",
      change:
        "30k-60k miles despite 'lifetime' claims from manufacturers",
    },
    brakeFluid: {
      function: "Hydraulic fluid for brake system",
      types:
        "DOT 3, DOT 4, DOT 5.1 (glycol-based). DOT 5 (silicone, rare). Never mix types",
      hygroscopic:
        "Absorbs moisture from air. Moisture lowers boiling point. Flush every 2-3 years",
      checking:
        "Should be clear to light amber. Dark brown = needs changing",
    },
    coolant: {
      types:
        "Green (traditional), Orange (Dexcool), Pink/Blue (Asian). Use type specified by manufacturer",
      mixture:
        "50/50 with distilled water. Pre-mixed available for convenience",
      testing:
        "Hydrometer tests freeze protection. Should protect to -30°F minimum",
    },
    powerSteeringFluid: {
      function: "Hydraulic fluid for power steering assist",
      checking:
        "Reservoir has MIN/MAX marks. Check when engine cold",
      note: "Many new cars use electric power steering (no fluid)",
    },
  },

  // Common repairs and costs
  repairs: {
    typical: {
      oilChange: "$30-75 (DIY) or $50-125 (shop)",
      brakes:
        "$150-450 per axle (pads), $250-600 per axle (pads + rotors)",
      battery: "$100-250 installed",
      alternator: "$300-800 including labor",
      starter: "$250-600 including labor",
      waterPump: "$400-900 including labor",
      timingBelt:
        "$500-1500 (interference engine = replace water pump too)",
      headGasket: "$1500-3000 (labor intensive)",
      transmission:
        "$1500-5000 for rebuild, $3000-8000 for replacement",
      clutch: "$800-1500 including labor",
      shocksStruts: "$300-800 per axle including labor",
      catalyticConverter:
        "$800-2500 (expensive due to precious metals)",
    },
  },

  // Warning lights
  warningLights: {
    checkEngine:
      "Can be minor (gas cap) or major (catalytic converter). Get codes read. Yellow = drive carefully, Red = stop immediately",
    oil: "Low oil pressure. STOP IMMEDIATELY. Can destroy engine in minutes",
    battery:
      "Charging system problem. Usually alternator. May die soon, get tested",
    brake:
      "Brake system issue or parking brake on. Check parking brake first. If not, get inspected immediately",
    abs: "ABS malfunction. Regular brakes still work but no anti-lock",
    temperature:
      "Engine overheating. Pull over immediately. Can warp heads/blow gaskets",
    tpms: "Tire pressure low. Check all tires including spare. 1 PSI drop per 10°F temperature change",
    traction: "Flashing = system working. Solid = system fault",
    airbag:
      "Airbag system fault. May not deploy in accident. Get diagnosed",
    maintenanceRequired:
      "Reminder for scheduled service. Not urgent but don't ignore",
  },

  // Fuel economy tips
  fuelEconomy: {
    tips: [
      "Keep tires properly inflated - improves MPG by 3%",
      "Remove excess weight - 100 lbs = 1-2% MPG loss",
      "Accelerate smoothly - aggressive driving reduces MPG by 15-30%",
      "Use cruise control on highway - maintains steady speed",
      "Avoid idling - turn off engine if stopped over 30 seconds",
      "Keep engine tuned - bad spark plugs reduce MPG by 30%",
      "Replace air filter - clogged filter reduces MPG by 10%",
      "Use recommended oil grade - wrong viscosity reduces MPG",
      "Close windows at highway speeds - reduces drag",
      "Remove roof racks when not in use - reduces drag",
    ],
  },

  // Vehicle buying advice
  buying: {
    new: {
      pros: [
        "Latest technology",
        "Factory warranty",
        "No hidden issues",
        "Latest safety features",
      ],
      cons: [
        "Steep depreciation (20-30% first year)",
        "Higher insurance",
        "Higher price",
      ],
      tips: [
        "Negotiate from invoice price, not MSRP",
        "Get quotes from multiple dealers",
        "End of month/year better deals",
        "Consider previous year models",
      ],
    },
    used: {
      pros: [
        "Lower price",
        "Slower depreciation",
        "Lower insurance",
        "More car for money",
      ],
      cons: [
        "Unknown history",
        "No warranty (usually)",
        "Potential hidden problems",
      ],
      tips: [
        "Get pre-purchase inspection ($100-150, worth it)",
        "Check Carfax/AutoCheck for history",
        "Look for single-owner, complete service records",
        "Avoid flood/salvage titles",
        "Check for recalls and ensure completed",
        "Test drive in varied conditions",
      ],
    },
    certified: {
      description:
        "Used car sold by dealer with extended warranty",
      benefits: [
        "Inspected",
        "Limited warranty",
        "Often roadside assistance",
      ],
      cost: "$1000-3000 more than regular used",
    },
  },
};

// Performance and modifications
export const performanceKnowledge = {
  common: {
    coldAirIntake:
      "Brings cooler air to engine. 5-15 HP gain. $150-400. Mostly sound improvement",
    exhaust:
      "Cat-back exhaust. 5-20 HP gain. $300-1500. Better sound, small power gain",
    tune: "ECU remap. 10-50 HP gain depending on engine. $400-1000. Best HP per dollar for turbo cars",
    turbo:
      "Forced induction. 50-100+ HP gain. $3000-8000. Complex install, supporting mods needed",
    suspension:
      "Coilovers or springs/shocks. Improves handling. $500-3000. Reduces ride comfort",
    brakes:
      "Larger rotors, better pads. Improves stopping. $800-3000. Needed for track use",
  },
  cautions: [
    "Modifications may void warranty",
    "Some mods illegal in certain states (especially emissions-related)",
    "Insurance may increase or coverage denied",
    "Improper mods can damage engine/drivetrain",
    "Always support more power with better brakes",
  ],
};

// Winter driving tips
export const winterDriving = [
  "Winter tires make huge difference below 45°F - more important than AWD",
  "Accelerate and brake gently to avoid wheel spin/lockup",
  "Increase following distance to 8-10 seconds",
  "Clear ALL snow from car including roof (safety and legal)",
  "Keep gas tank at least half full - prevents fuel line freeze",
  "Pack emergency kit: blanket, flashlight, ice scraper, jumper cables, sand/kitty litter",
  "If stuck, don't spin tires - makes it worse. Rock gently or use sand",
  "Black ice forms on bridges first - extra caution",
  "ABS: Don't pump brakes, press and hold firmly",
  "If skidding: Steer where you want to go, don't brake",
];

// Extreme knowledge - everything else
export const comprehensiveKnowledge = {
  carCare: {
    washing:
      "Hand wash or touchless automatic. Brush automatics scratch paint. Wash every 2 weeks. Wax 2-3 times per year",
    waxing:
      "Protects paint. 2-3 times per year. Ceramic coating lasts longer but expensive",
    interior:
      "Vacuum weekly. Condition leather every 3-6 months. UV protectant prevents cracking",
  },

  mythBusting: {
    myth1:
      "Premium gas cleans engine better - FALSE. No cleaning additives. Use recommended octane only",
    myth2:
      "Engine needs to warm up before driving - FALSE (modern cars). 30 seconds then drive gently",
    myth3:
      "Change oil every 3000 miles - OUTDATED. Modern oils last 7500-10000 miles",
    myth4:
      "Manual transmission gets better MPG - MOSTLY FALSE now. Modern autos equal or better",
    myth5:
      "Larger wheels improve performance - PARTLY FALSE. Heavier wheels reduce acceleration",
  },
};

// Troubleshooting Guide: Causes of damage and repair solutions
// Troubleshooting Guide: Causes of damage and repair solutions
export const partTroubleshooting = {
  brakeSystem: {
    brakePads: {
      symptoms: "Squealing noise, grinding sound, longer stopping distance.",
      possibleCauses: [
        "Normal wear and tear from friction.",
        "Seized brake caliper pins causing uneven pressure.",
        "Rotted or rusted rotors acting like sandpaper.",
        "Aggressive driving (hard braking generates excessive heat)."
      ],
      possibleSolutions: [
        "Replace brake pads (always do both sides of an axle).",
        "Lubricate caliper slide pins.",
        "Inspect rotors and resurface or replace if scored."
      ]
    },
    brakeRotors: {
      symptoms: "Vibration in steering wheel when braking, pulsating pedal.",
      possibleCauses: [
        "Overheating caused by heavy braking (mountain driving).",
        "Warping due to sudden temperature changes (cold water on hot brakes).",
        "Brake pads worn down to metal, gouging the surface."
      ],
      possibleSolutions: [
        "Resurface (turn) the rotors if thickness allows.",
        "Replace rotors completely (often cheaper/safer than resurfacing now).",
        "Torque lug nuts evenly to prevent future warping."
      ]
    }
  },
  electrical: {
    battery: {
      symptoms: "Car won't start, dim lights, clicking sound.",
      possibleCauses: [
        "Old age (typically lasts 3-5 years).",
        "Parasitic draw (leaving lights on or faulty electronics).",
        "Extreme temperatures (heat kills batteries, cold exposes weak ones).",
        "Alternator not charging it properly."
      ],
      possibleSolutions: [
        "Jump start (temporary).",
        "Clean corrosion off terminals with wire brush.",
        "Trickle charge/Desulfate.",
        "Replace battery."
      ]
    },
    alternator: {
      symptoms: "Battery warning light, stalling, whining noise, electrical accessories failing.",
      possibleCauses: [
        "Worn internal carbon brushes.",
        "Failed voltage regulator.",
        "Leaking fluid (oil/power steering) onto the unit.",
        "Tight drive belt damaging bearings."
      ],
      possibleSolutions: [
        "Check and replace serpentine belt if slipping.",
        "Replace alternator unit.",
        "Fix engine oil leaks to protect the new alternator."
      ]
    },
    starterMotor: {
      symptoms: "Single loud click when turning key, engine does not crank.",
      possibleCauses: [
        "Worn out solenoid contacts.",
        "Oil leak soaking the starter motor.",
        "Loose or corroded wiring connections.",
        "Flywheel teeth damaged (rare)."
      ],
      possibleSolutions: [
        "Tap starter with hammer (emergency temporary fix).",
        "Check battery voltage first.",
        "Replace starter motor."
      ]
    }
  },
  engine: {
    sparkPlugs: {
      symptoms: "Rough idle, difficulty starting, poor fuel economy, engine misfire.",
      possibleCauses: [
        "Carbon buildup covering the electrode.",
        "Oil leaking into the combustion chamber (worn rings/seals).",
        "Incorrect gap between electrodes.",
        "Normal electrode erosion over time."
      ],
      possibleSolutions: [
        "Remove and inspect plugs (color indicates engine health).",
        "Replace spark plugs (copper, platinum, or iridium based on spec).",
        "Check ignition coils."
      ]
    },
    radiator: {
      symptoms: "Engine overheating, sweet smell, coolant puddle under car.",
      possibleCauses: [
        "Corrosion/Rust from using tap water instead of distilled/coolant.",
        "Road debris impact causing a puncture.",
        "Thermostat stuck closed, building excessive pressure.",
        "Plastic end-tanks cracking from heat cycles."
      ],
      possibleSolutions: [
        "Flush coolant system.",
        "Use a radiator stop-leak product (temporary emergency fix only).",
        "Replace radiator and thermostat.",
        "Check hoses for cracks."
      ]
    },
    oxygenSensor: {
      symptoms: "Check Engine Light, poor gas mileage, rough engine sound.",
      possibleCauses: [
        "Contamination from silicone or lead in fuel.",
        "Oil ash deposits from an engine burning oil.",
        "Normal aging (slow response time)."
      ],
      possibleSolutions: [
        "Scan code (usually P0130-P0175 range).",
        "Replace the specific sensor (Upstream or Downstream).",
        "Fix exhaust leaks that might throw off readings."
      ]
    }
  },
  suspensionAndSteering: {
    shockAbsorbers: {
      symptoms: "Bouncy ride, vehicle nosedives when braking, cupped tire wear.",
      possibleCauses: [
        "Leaking hydraulic fluid.",
        "Worn internal seals due to high mileage.",
        "Regular driving on rough/potholed roads."
      ],
      possibleSolutions: [
        "Replace shocks/struts (always in pairs).",
        "Perform a wheel alignment after replacement."
      ]
    },
    controlArms: {
      symptoms: "Clunking noise when going over bumps, steering wandering.",
      possibleCauses: [
        "Worn rubber bushings (dry rot/cracking).",
        "Bent arm from hitting a curb or pothole.",
        "Ball joint failure."
      ],
      possibleSolutions: [
        "Replace control arm assembly (easier than pressing in new bushings).",
        "Alignment is mandatory after this repair."
      ]
    },
    powerSteeringPump: {
      symptoms: "Groaning noise when turning, stiff steering wheel.",
      possibleCauses: [
        "Low power steering fluid.",
        "Air bubbles in the system.",
        "Worn internal pump vanes.",
        "Leaking high-pressure hose."
      ],
      possibleSolutions: [
        "Top off fluid with correct type (ATF vs PSF).",
        "Bleed air from system (turn wheel lock-to-lock).",
        "Replace pump and inspect rack and pinion."
      ]
    }
  },
  transmission: {
    clutch: {
      symptoms: "Engine revs but car doesn't speed up (slipping), burning smell, hard to shift.",
      possibleCauses: [
        "Driver error (riding the clutch/resting foot on pedal).",
        "Oil leak from rear main seal contaminating the disc.",
        "Worn friction material due to high mileage."
      ],
      possibleSolutions: [
        "Adjust clutch pedal free-play (if applicable).",
        "Replace clutch kit (pressure plate, disc, throw-out bearing).",
        "Resurface flywheel."
      ]
    },
    cvAxle: {
      symptoms: "Clicking noise when turning sharp corners, grease inside wheel rim.",
      possibleCauses: [
        "Torn rubber boot letting grease out and dirt in.",
        "Impact damage.",
        "Normal wear on joints."
      ],
      possibleSolutions: [
        "Replace entire CV axle shaft (rebuilding is rarely cost-effective).",
        "Inspect transmission output seal."
      ]
    }
  },
  hvac: {
    acCompressor: {
      symptoms: "A/C blows warm air, loud noise when A/C is on.",
      possibleCauses: [
        "Low refrigerant causes system to short-cycle.",
        "Internal failure sending metal shards into system.",
        "Clutch assembly failure (magnetic coil)."
      ],
      possibleSolutions: [
        "Check for leaks using UV dye.",
        "Evacuate and recharge refrigerant.",
        "Replace compressor and receiver dryer."
      ]
    }
  }
};