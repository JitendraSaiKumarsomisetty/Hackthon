export interface Community {
  id: string;
  name: string;
  village: string;
  state: string;
  coordinates: [number, number];
  population: number;
  households: number;
  primaryOccupation: string[];
  monthlyIncome: number;
  totalEarnings: number;
  performance: {
    rating: number;
    sustainabilityScore: number;
    culturalPreservation: number;
    touristSatisfaction: number;
  };
  aiTags: {
    ecoFriendly: number; // 0-100 score
    culturalRichness: number;
    adventureLevel: number;
    familyFriendly: number;
    soloTravelerSafe: number;
    accessibility: number;
    digitalConnectivity: number;
    organicFarming: number;
    traditionalCrafts: number;
    wildlifeConservation: number;
  };
  facilities: string[];
  challenges: string[];
  achievements: string[];
  weatherStation: string;
  bestVisitMonths: string[];
  languages: string[];
  festivals: {
    name: string;
    month: string;
    description: string;
  }[];
}

export const communities: Community[] = [
  {
    id: '1',
    name: 'Araku Valley Tribal Community',
    village: 'Araku Valley',
    state: 'Andhra Pradesh',
    coordinates: [18.3273, 82.8739],
    population: 2500,
    households: 450,
    primaryOccupation: ['Coffee Farming', 'Tourism', 'Handicrafts'],
    monthlyIncome: 185000,
    totalEarnings: 2220000,
    performance: {
      rating: 4.8,
      sustainabilityScore: 92,
      culturalPreservation: 88,
      touristSatisfaction: 94
    },
    aiTags: {
      ecoFriendly: 95,
      culturalRichness: 90,
      adventureLevel: 75,
      familyFriendly: 85,
      soloTravelerSafe: 88,
      accessibility: 70,
      digitalConnectivity: 60,
      organicFarming: 98,
      traditionalCrafts: 85,
      wildlifeConservation: 80
    },
    facilities: ['Community Center', 'Health Clinic', 'School', 'Organic Certification', 'Coffee Processing Unit'],
    challenges: ['Seasonal Income Variation', 'Limited Internet Connectivity'],
    achievements: ['UNESCO Recognition', 'Organic Coffee Certification', 'Zero Waste Village'],
    weatherStation: 'Araku Valley Weather Station',
    bestVisitMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    languages: ['Telugu', 'Hindi', 'English', 'Tribal Dialects'],
    festivals: [
      { name: 'Coffee Festival', month: 'January', description: 'Celebration of coffee harvest with cultural programs' },
      { name: 'Tribal Dance Festival', month: 'March', description: 'Traditional tribal dances and music performances' }
    ]
  },
  {
    id: '2',
    name: 'Lambasingi Hill Community',
    village: 'Lambasingi',
    state: 'Andhra Pradesh',
    coordinates: [17.9500, 82.5833],
    population: 1800,
    households: 320,
    primaryOccupation: ['Apple Farming', 'Tourism', 'Dairy'],
    monthlyIncome: 142000,
    totalEarnings: 1704000,
    performance: {
      rating: 4.7,
      sustainabilityScore: 89,
      culturalPreservation: 85,
      touristSatisfaction: 91
    },
    aiTags: {
      ecoFriendly: 88,
      culturalRichness: 75,
      adventureLevel: 85,
      familyFriendly: 90,
      soloTravelerSafe: 85,
      accessibility: 65,
      digitalConnectivity: 55,
      organicFarming: 92,
      traditionalCrafts: 70,
      wildlifeConservation: 75
    },
    facilities: ['Weather Station', 'Cold Storage', 'Tourist Information Center', 'Apple Processing Unit'],
    challenges: ['Climate Change Impact', 'Market Access'],
    achievements: ['Best Hill Station Award', 'Climate Adaptation Model', 'Women SHG Success'],
    weatherStation: 'Lambasingi Hill Station',
    bestVisitMonths: ['November', 'December', 'January', 'February'],
    languages: ['Telugu', 'Hindi', 'English'],
    festivals: [
      { name: 'Apple Harvest Festival', month: 'February', description: 'Celebration of apple harvest with local delicacies' },
      { name: 'Winter Festival', month: 'December', description: 'Celebrating the unique winter climate of South India' }
    ]
  },
  {
    id: '3',
    name: 'Maredumilli Forest Community',
    village: 'Maredumilli',
    state: 'Andhra Pradesh',
    coordinates: [17.7333, 81.4500],
    population: 3200,
    households: 580,
    primaryOccupation: ['Forest Conservation', 'Eco-Tourism', 'NTFP Collection'],
    monthlyIncome: 198000,
    totalEarnings: 2376000,
    performance: {
      rating: 4.9,
      sustainabilityScore: 95,
      culturalPreservation: 92,
      touristSatisfaction: 96
    },
    aiTags: {
      ecoFriendly: 98,
      culturalRichness: 88,
      adventureLevel: 90,
      familyFriendly: 80,
      soloTravelerSafe: 85,
      accessibility: 60,
      digitalConnectivity: 45,
      organicFarming: 85,
      traditionalCrafts: 90,
      wildlifeConservation: 95
    },
    facilities: ['Forest Research Center', 'Eco-Lodge', 'Medicinal Plant Garden', 'Wildlife Sanctuary'],
    challenges: ['Human-Wildlife Conflict', 'Forest Regulations'],
    achievements: ['Forest Conservation Award', 'Biodiversity Protection', 'Eco-Tourism Model'],
    weatherStation: 'Maredumilli Forest Station',
    bestVisitMonths: ['October', 'November', 'December', 'January', 'February', 'March', 'April'],
    languages: ['Telugu', 'Hindi', 'English', 'Gondi'],
    festivals: [
      { name: 'Forest Day', month: 'March', description: 'Celebrating forest conservation and biodiversity' },
      { name: 'Tribal Heritage Festival', month: 'November', description: 'Showcasing tribal culture and traditions' }
    ]
  },
  {
    id: '4',
    name: 'Hampi Heritage Community',
    village: 'Hampi',
    state: 'Karnataka',
    coordinates: [15.3350, 76.4600],
    population: 2100,
    households: 380,
    primaryOccupation: ['Heritage Tourism', 'Stone Carving', 'Agriculture'],
    monthlyIncome: 165000,
    totalEarnings: 1980000,
    performance: {
      rating: 4.8,
      sustainabilityScore: 85,
      culturalPreservation: 95,
      touristSatisfaction: 92
    },
    aiTags: {
      ecoFriendly: 75,
      culturalRichness: 98,
      adventureLevel: 80,
      familyFriendly: 88,
      soloTravelerSafe: 90,
      accessibility: 75,
      digitalConnectivity: 70,
      organicFarming: 70,
      traditionalCrafts: 95,
      wildlifeConservation: 60
    },
    facilities: ['Heritage Museum', 'Craft Center', 'Tourist Information', 'Archaeological Site'],
    challenges: ['Heritage Preservation', 'Tourist Overcrowding'],
    achievements: ['UNESCO World Heritage Site', 'Stone Carving Excellence', 'Cultural Tourism Model'],
    weatherStation: 'Hampi Archaeological Station',
    bestVisitMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    languages: ['Kannada', 'Hindi', 'English', 'Tamil'],
    festivals: [
      { name: 'Hampi Utsav', month: 'November', description: 'Grand cultural festival celebrating Vijayanagara heritage' },
      { name: 'Stone Carving Festival', month: 'February', description: 'Showcasing traditional stone carving skills' }
    ]
  },
  {
    id: '5',
    name: 'Spiti Valley Buddhist Community',
    village: 'Kaza',
    state: 'Himachal Pradesh',
    coordinates: [32.2432, 78.0414],
    population: 1200,
    households: 200,
    primaryOccupation: ['High Altitude Farming', 'Tourism', 'Handicrafts'],
    monthlyIncome: 98000,
    totalEarnings: 1176000,
    performance: {
      rating: 4.9,
      sustainabilityScore: 90,
      culturalPreservation: 95,
      touristSatisfaction: 94
    },
    aiTags: {
      ecoFriendly: 92,
      culturalRichness: 95,
      adventureLevel: 95,
      familyFriendly: 70,
      soloTravelerSafe: 80,
      accessibility: 40,
      digitalConnectivity: 30,
      organicFarming: 88,
      traditionalCrafts: 85,
      wildlifeConservation: 85
    },
    facilities: ['Monastery', 'High Altitude Research Station', 'Solar Power Plant', 'Medical Center'],
    challenges: ['Extreme Weather', 'Limited Accessibility', 'Short Tourist Season'],
    achievements: ['Carbon Neutral Village', 'Buddhist Heritage Preservation', 'High Altitude Farming Innovation'],
    weatherStation: 'Spiti Valley High Altitude Station',
    bestVisitMonths: ['June', 'July', 'August', 'September'],
    languages: ['Hindi', 'Tibetan', 'English', 'Spiti'],
    festivals: [
      { name: 'Losar Festival', month: 'February', description: 'Tibetan New Year celebration' },
      { name: 'Gustor Festival', month: 'October', description: 'Buddhist monastery festival with mask dances' }
    ]
  },
  {
    id: '6',
    name: 'Majuli Island Cultural Community',
    village: 'Garamur',
    state: 'Assam',
    coordinates: [26.9500, 94.2167],
    population: 2800,
    households: 520,
    primaryOccupation: ['River Island Farming', 'Mask Making', 'Satra Culture'],
    monthlyIncome: 156000,
    totalEarnings: 1872000,
    performance: {
      rating: 4.7,
      sustainabilityScore: 88,
      culturalPreservation: 92,
      touristSatisfaction: 89
    },
    aiTags: {
      ecoFriendly: 85,
      culturalRichness: 92,
      adventureLevel: 70,
      familyFriendly: 85,
      soloTravelerSafe: 82,
      accessibility: 55,
      digitalConnectivity: 50,
      organicFarming: 80,
      traditionalCrafts: 95,
      wildlifeConservation: 75
    },
    facilities: ['Satra Monasteries', 'Mask Making Center', 'Cultural Museum', 'River Transport'],
    challenges: ['River Erosion', 'Seasonal Flooding', 'Climate Change'],
    achievements: ['Largest River Island', 'Neo-Vaishnavite Culture Hub', 'Traditional Mask Art Excellence'],
    weatherStation: 'Majuli Island Weather Station',
    bestVisitMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    languages: ['Assamese', 'Hindi', 'English', 'Mising'],
    festivals: [
      { name: 'Raas Leela', month: 'November', description: 'Traditional dance drama depicting Krishna stories' },
      { name: 'Ali-Ai-Ligang', month: 'February', description: 'Mising tribe spring festival' }
    ]
  }
];

export const getAITagRecommendations = (community: Community) => {
  const recommendations = [];
  
  if (community.aiTags.ecoFriendly >= 95) recommendations.push('🌿 Eco Paradise');
  else if (community.aiTags.ecoFriendly >= 90) recommendations.push('🌱 Eco-Friendly');
  
  if (community.aiTags.culturalRichness >= 95) recommendations.push('🎭 Cultural Heritage Master');
  else if (community.aiTags.culturalRichness >= 85) recommendations.push('🏛️ Cultural Heritage');
  
  if (community.aiTags.adventureLevel >= 85) recommendations.push('🏔️ Adventure Hub');
  if (community.aiTags.familyFriendly >= 90) recommendations.push('👨‍👩‍👧‍👦 Family Perfect');
  else if (community.aiTags.familyFriendly >= 85) recommendations.push('👨‍👩‍👧‍👦 Family Friendly');
  
  if (community.aiTags.soloTravelerSafe >= 90) recommendations.push('🚶‍♀️ Solo Traveler Paradise');
  else if (community.aiTags.soloTravelerSafe >= 85) recommendations.push('🚶‍♀️ Solo Friendly');
  
  if (community.aiTags.organicFarming >= 95) recommendations.push('🌾 100% Organic');
  else if (community.aiTags.organicFarming >= 85) recommendations.push('🌾 Organic Farm');
  
  if (community.aiTags.traditionalCrafts >= 90) recommendations.push('🎨 Craft Master');
  else if (community.aiTags.traditionalCrafts >= 80) recommendations.push('🎨 Traditional Crafts');
  
  if (community.aiTags.wildlifeConservation >= 90) recommendations.push('🦋 Wildlife Paradise');
  else if (community.aiTags.wildlifeConservation >= 80) recommendations.push('🦋 Wildlife Haven');
  
  if (community.aiTags.digitalConnectivity >= 75) recommendations.push('📶 Well Connected');
  if (community.aiTags.accessibility >= 80) recommendations.push('♿ Accessible');
  
  // Special combinations
  if (community.aiTags.ecoFriendly >= 90 && community.aiTags.organicFarming >= 90) {
    recommendations.push('🌍 Sustainable Living');
  }
  
  if (community.aiTags.culturalRichness >= 85 && community.aiTags.traditionalCrafts >= 85) {
    recommendations.push('🏺 Cultural Immersion');
  }
  
  if (community.aiTags.adventureLevel >= 80 && community.aiTags.wildlifeConservation >= 80) {
    recommendations.push('🌲 Nature Adventure');
  }
  
  return recommendations;
};

// Add new communities
communities.push(
  {
    id: '7',
    name: 'Kodaikanal Organic Farming Community',
    village: 'Kodaikanal',
    state: 'Tamil Nadu',
    coordinates: [10.2381, 77.4892],
    population: 1500,
    households: 280,
    primaryOccupation: ['Organic Farming', 'Eco-Tourism', 'Sustainable Agriculture'],
    monthlyIncome: 125000,
    totalEarnings: 1500000,
    performance: {
      rating: 4.6,
      sustainabilityScore: 96,
      culturalPreservation: 82,
      touristSatisfaction: 89
    },
    aiTags: {
      ecoFriendly: 98,
      culturalRichness: 78,
      adventureLevel: 65,
      familyFriendly: 92,
      soloTravelerSafe: 88,
      accessibility: 75,
      digitalConnectivity: 65,
      organicFarming: 99,
      traditionalCrafts: 75,
      wildlifeConservation: 85
    },
    facilities: ['Organic Certification Center', 'Permaculture Training', 'Solar Power Grid', 'Rainwater Harvesting'],
    challenges: ['Market Access for Organic Products', 'Climate Change Adaptation'],
    achievements: ['100% Organic Village Certification', 'Zero Pesticide Community', 'Carbon Negative Farming'],
    weatherStation: 'Kodaikanal Hill Station',
    bestVisitMonths: ['October', 'November', 'December', 'January', 'February', 'March', 'April'],
    languages: ['Tamil', 'English', 'Hindi'],
    festivals: [
      { name: 'Organic Harvest Festival', month: 'January', description: 'Celebrating chemical-free farming with organic food fair' },
      { name: 'Earth Day Celebration', month: 'April', description: 'Community-wide environmental awareness and tree plantation' }
    ]
  },
  {
    id: '8',
    name: 'Gokarna Coastal Conservation Community',
    village: 'Gokarna',
    state: 'Karnataka',
    coordinates: [14.5492, 74.3200],
    population: 2200,
    households: 420,
    primaryOccupation: ['Sustainable Fishing', 'Beach Conservation', 'Eco-Tourism'],
    monthlyIncome: 168000,
    totalEarnings: 2016000,
    performance: {
      rating: 4.7,
      sustainabilityScore: 91,
      culturalPreservation: 87,
      touristSatisfaction: 93
    },
    aiTags: {
      ecoFriendly: 94,
      culturalRichness: 85,
      adventureLevel: 88,
      familyFriendly: 89,
      soloTravelerSafe: 91,
      accessibility: 80,
      digitalConnectivity: 70,
      organicFarming: 75,
      traditionalCrafts: 82,
      wildlifeConservation: 92
    },
    facilities: ['Marine Conservation Center', 'Turtle Nesting Protection', 'Waste Management Plant', 'Eco-Beach Resorts'],
    challenges: ['Plastic Pollution', 'Tourist Overcrowding During Peak Season'],
    achievements: ['Plastic-Free Beach Initiative', 'Sea Turtle Conservation Success', 'Sustainable Tourism Model'],
    weatherStation: 'Gokarna Coastal Station',
    bestVisitMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    languages: ['Kannada', 'Hindi', 'English', 'Konkani'],
    festivals: [
      { name: 'Beach Clean-up Festival', month: 'November', description: 'Community beach cleaning with cultural programs' },
      { name: 'Turtle Festival', month: 'February', description: 'Celebrating sea turtle conservation efforts' }
    ]
  },
  {
    id: '9',
    name: 'Munnar Tea Garden Sustainable Community',
    village: 'Munnar',
    state: 'Kerala',
    coordinates: [10.0889, 77.0595],
    population: 3500,
    households: 650,
    primaryOccupation: ['Organic Tea Cultivation', 'Spice Farming', 'Eco-Tourism'],
    monthlyIncome: 245000,
    totalEarnings: 2940000,
    performance: {
      rating: 4.8,
      sustainabilityScore: 93,
      culturalPreservation: 84,
      touristSatisfaction: 95
    },
    aiTags: {
      ecoFriendly: 96,
      culturalRichness: 81,
      adventureLevel: 78,
      familyFriendly: 94,
      soloTravelerSafe: 89,
      accessibility: 85,
      digitalConnectivity: 75,
      organicFarming: 97,
      traditionalCrafts: 79,
      wildlifeConservation: 88
    },
    facilities: ['Organic Tea Processing Unit', 'Spice Research Center', 'Biodiversity Park', 'Eco-Lodge Network'],
    challenges: ['Climate Change Impact on Tea Quality', 'Labor Migration'],
    achievements: ['Organic Tea Certification', 'Fair Trade Recognition', 'Biodiversity Conservation Award'],
    weatherStation: 'Munnar Hill Station',
    bestVisitMonths: ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
    languages: ['Malayalam', 'Tamil', 'Hindi', 'English'],
    festivals: [
      { name: 'Tea Harvest Festival', month: 'December', description: 'Celebrating tea plucking season with cultural events' },
      { name: 'Spice Festival', month: 'February', description: 'Showcasing organic spices and traditional recipes' }
    ]
  },
  {
    id: '10',
    name: 'Rishikesh Yoga & Wellness Community',
    village: 'Rishikesh',
    state: 'Uttarakhand',
    coordinates: [30.0869, 78.2676],
    population: 1800,
    households: 320,
    primaryOccupation: ['Yoga Teaching', 'Ayurvedic Medicine', 'Spiritual Tourism'],
    monthlyIncome: 195000,
    totalEarnings: 2340000,
    performance: {
      rating: 4.9,
      sustainabilityScore: 89,
      culturalPreservation: 95,
      touristSatisfaction: 97
    },
    aiTags: {
      ecoFriendly: 87,
      culturalRichness: 97,
      adventureLevel: 82,
      familyFriendly: 85,
      soloTravelerSafe: 95,
      accessibility: 88,
      digitalConnectivity: 80,
      organicFarming: 85,
      traditionalCrafts: 88,
      wildlifeConservation: 78
    },
    facilities: ['Yoga Ashrams', 'Ayurvedic Centers', 'Meditation Halls', 'Organic Gardens', 'Ganga Aarti Ghat'],
    challenges: ['Over-commercialization', 'River Pollution'],
    achievements: ['International Yoga Capital Recognition', 'Spiritual Tourism Excellence', 'Ganga Conservation Efforts'],
    weatherStation: 'Rishikesh Himalayan Station',
    bestVisitMonths: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    languages: ['Hindi', 'English', 'Sanskrit', 'Garhwali'],
    festivals: [
      { name: 'International Yoga Festival', month: 'March', description: 'Global yoga practitioners gathering for spiritual learning' },
      { name: 'Ganga Aarti Festival', month: 'November', description: 'Sacred river worship with traditional ceremonies' }
    ]
  }
);