export const stations = [
  {
    id: 1,
    name: "New Delhi Railway Station",
  
    city: "New Delhi",
    governorate: "New Delhi",
    type: "main",
    code: "CAI",
    location: {
      latitude: 30.0626,
      longitude: 31.2477,
    },
    amenities: [
      "ticket_office",
      "waiting_room",
      "restrooms",
      "wheelchair_access",
      "food_vendors",
    ],
    connections: [2, 5, 6, 7, 12, 13, 14, 15],
  },
  {
    id: 2,
    name: "Howrah Station",
   
    city: "Howrah",
    governorate: "Howrah",
    type: "main",
    code: "GIZ",
    location: {
      latitude: 30.0115,
      longitude: 31.2094,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 12],
  },
  {
    id: 3,
    name: "Sealdah Station",
   
    city: "Sealdah",
    governorate: "Sealdah",
    type: "main",
    code: "SGB",
    location: {
      latitude: 31.2199,
      longitude: 29.9484,
    },
    amenities: [
      "ticket_office",
      "waiting_room",
      "restrooms",
      "wheelchair_access",
      "food_vendors",
    ],
    connections: [4, 14],
  },
  {
    id: 4,
    name: "Chhatrapati Shivaji Maharaj Terminus Station",
   
    city: "Chhatrapati Shivaji Maharaj Terminus",
    governorate: "Chhatrapati Shivaji Maharaj Terminus",
    type: "main",
    code: "MSR",
    location: {
      latitude: 31.2001,
      longitude: 29.8957,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [3],
  },
  {
    id: 5,
    name: "Ahmedabad Station",
   
    city: "Ahmedabad",
    governorate: "Ahmedabad",
    type: "main",
    code: "TNT",
    location: {
      latitude: 30.7885,
      longitude: 31.0004,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 14],
  },
  {
    id: 6,
    name: "Chennai Central (Tamil Nadu) Station",
       city: "Chennai Central",
    governorate: "Chennai Central",
    type: "main",
    code: "MNS",
    location: {
      latitude: 31.0409,
      longitude: 31.3807,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 15],
  },
  {
    id: 7,
    name: "Kanpur Central Station",
    
    city: "Kanpur Central",
    governorate: "Kanpur Central",
    type: "main",
    code: "ZGZ",
    location: {
      latitude: 30.5877,
      longitude: 31.5021,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1],
  },
  {
    id: 8,
    name: "Kharagpur Station",
    
    city: "Kharagpur",
    governorate: "Kharagpur",
    type: "main",
    code: "AST",
    location: {
      latitude: 27.1809,
      longitude: 31.1837,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [9, 16],
  },
  {
    id: 9,
    name: "Secunderabad Station",
  
    city: "Secunderabad",
    governorate: "Secunderabad",
    type: "main",
    code: "SHG",
    location: {
      latitude: 26.5569,
      longitude: 31.6948,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [8, 10],
  },
  {
    id: 10,
    name: "Vijayawada Station",
   
    city: "Vijayawada",
    governorate: "Vijayawada",
    type: "main",
    code: "LXR",
    location: {
      latitude: 25.6965,
      longitude: 32.6421,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms", "food_vendors"],
    connections: [9, 11],
  },
  {
    id: 11,
    name: "Madurai Station",
   
    city: "Madurai",
    governorate: "Madurai",
    type: "main",
    code: "ASW",
    location: {
      latitude: 24.0889,
      longitude: 32.8998,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms", "food_vendors"],
    connections: [10],
  },
  {
    id: 12,
    name: "Tiruchirappalli Station",
    
    city: "Tiruchirappalli",
    governorate: "Tiruchirappalli",
    type: "secondary",
    code: "BSH",
    location: {
      latitude: 30.06619,
      longitude: 30.06619,
    },
    amenities: ["ticket_office", "waiting_room"],
    connections: [1, 2],
  },
  {
    id: 13,
    name: "Yeshvantpur Station",
    
    city: "Yeshvantpur",
    governorate: "Yesvantpur",
    type: "main",
    code: "SUZ",
    location: {
      latitude: 29.9663,
      longitude: 32.5498,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1],
  },
  {
    id: 14,
    name: "KSR Bengaluru Station",
    
    city: "KSR Bengaluru",
    governorate: "KSR Bengaluru",
    type: "main",
    code: "DMH",
    location: {
      latitude: 31.0341,
      longitude: 30.4682,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 3, 5],
  },
  {
    id: 15,
    name: "Lucknow Charbagh Station",

    city: "Lucknow Charbagh",
    governorate: "Lucknow Charbagh",
    type: "main",
    code: "DMT",
    location: {
      latitude: 31.4191,
      longitude: 31.8144,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 6],
  },
  {
    id: 16,
    name: "Varanasi Station",
    
    city: "Varanasi",
    governorate: "Varanasi",
    type: "main",
    code: "MNY",
    location: {
      latitude: 28.0867,
      longitude: 30.7628,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 8],
  },
  {
    id: 17,
    name: "Patna Station",
    
    city: "Patna",
    governorate: "Patna",
    type: "main",
    code: "BSF",
    location: {
      latitude: 29.0744,
      longitude: 31.0995,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 2, 16],
  },
  {
    id: 18,
    name: "Nagpur Station",
   
    city: "Nagpur",
    governorate: "Nagpur",
    type: "main",
    code: "QNA",
    location: {
      latitude: 26.1615,
      longitude: 32.7276,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [9, 10],
  },
  {
    id: 19,
    name: "Bhopal Station",
  
    city: "Bhopal",
    governorate: "Bhopal",
    type: "main",
    code: "BNH",
    location: {
      latitude: 30.4599,
      longitude: 31.1813,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 5, 7],
  },
  {
    id: 20,
    name: "Guwahati Station",
   
    city: "Guwahati",
    governorate: "Guwahati",
    type: "main",
    code: "ISM",
    location: {
      latitude: 30.5965,
      longitude: 32.2715,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 13],
  },
  {
    id: 21,
    name: "Jammu TawiStation",
    
    city: "Jammu Tawi",
    governorate: "Jammu Tawi",
    type: "main",
    code: "PSD",
    location: {
      latitude: 31.2565,
      longitude: 32.2841,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [7, 20],
  },
  {
    id: 22,
    name: "Surat Station",
   
    city: "Surat",
    governorate: "Surat ",
    type: "main",
    code: "MMX",
    location: {
      latitude: 31.3543,
      longitude: 27.2373,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [4, 14],
  },
];

// Train types available in the Indain railway system
export const trainTypes = [
  {
    id: 1,
    name: "Maharaja Express",
   
    description: "First-class air-conditioned trains with meal service",
    amenities: [
      "air_conditioning",
      "meal_service",
      "wifi",
      "power_outlets",
      "comfortable_seating",
    ],
    priceMultiplier: 1.5,
  },
  {
    id: 2,
    name: "Maharaja Express",

    description: "Air-conditioned express trains with limited stops",
    amenities: ["air_conditioning", "snack_service", "power_outlets"],
    Multiplier: 1.2,
  },
  {
    id: 3,
    name: "Regular",
  
    description: "Standard trains stopping at most stations",
    amenities: ["air_conditioning"],
    priceMultiplier: 1.0,
  },
  {
    id: 4,
    name: "Ordinary",
    
    description: "Basic air-conditioned service with all stops",
    amenities: ["air_conditioning"],
    priceMultiplier: 0.8,
  },
  {
    id: 5,
    name: "Sleeper",
   
    description: "Overnight sleeper trains with beds",
    amenities: [
      "sleeper_cabins",
      "air_conditioning",
      "meal_service",
      "power_outlets",
    ],
    priceMultiplier: 2.0,
  },
];

// Main train lines in India
export const trainLines = [
  {
    id: 1,
    name: "Howrah–Delhi Line",
  
    stations: [1, 5, 14, 3, 4],
    color: "#2E8B57", // SeaGreen
    distanceKm: 208,
  },
  {
    id: 2,
    name: "Mumbai–Delhi Line",
    
    stations: [1, 16, 8, 9, 10, 11],
    color: "#4169E1", // RoyalBlue
    distanceKm: 879,
  },
  {
    id: 3,
    name: "Chennai–Delhi Line",
  
    stations: [1, 13],
    color: "#FF8C00", // DarkOrange
    distanceKm: 134,
  },
  {
    id: 4,
    name: "Delhi–Jammu Line",
   
    stations: [1, 6, 15],
    color: "#9370DB", // Mediumblue
    distanceKm: 185,
  },
  {
    id: 5,
    name: "Delhi–Ahmedabad Line",
    
    stations: [1, 7],
    color: "#20B2AA", // LightSeaGreen
    distanceKm: 170,
  },
  {
    id: 6,
    name: "Grand Chord Line",
   
    stations: [4, 14],
    color: "#CD5C5C", // IndianRed
    distanceKm: 290,
  },
];

// Train schedule data
export const trains = [
  // Cairo-Alexandria VIP Trains
  {
    id: 1,
    trainNumber: "901",
    lineId: 1,
    typeId: 1, // VIP
    name: "Hazarath Nizamuudin Express",
    
    stations: [
      { stationId: 1, arrivalTime: null, departureTime: "07:00", day: 0 },
      { stationId: 5, arrivalTime: "08:15", departureTime: "08:20", day: 0 },
      { stationId: 14, arrivalTime: "09:10", departureTime: "09:15", day: 0 },
      { stationId: 3, arrivalTime: "09:55", departureTime: "10:00", day: 0 },
      { stationId: 4, arrivalTime: "10:15", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6], // All week
    basePrice: 160,
    capacity: {
      firstClass: 120,
      secondClass: 240,
    },
  },
  {
    id: 2,
    trainNumber: "101",
    lineId: 2, // Cairo-Aswan line
    typeId: 2, // Express
    name: "Cairo Express",
    arabicName: "سريع القاهرة",
    stations: [
      {
        stationId: 1,
        arrivalTime: null,
        departureTime: "08:00",
        day: 0,
        distanceKm: 0,
      },
      {
        stationId: 2,
        arrivalTime: "08:30",
        departureTime: "08:35",
        day: 0,
        distanceKm: 20,
      },
      {
        stationId: 17,
        arrivalTime: "09:15",
        departureTime: "09:20",
        day: 0,
        distanceKm: 50,
      },
      {
        stationId: 16,
        arrivalTime: "09:45",
        departureTime: "09:50",
        day: 0,
        distanceKm: 80,
      },
      {
        stationId: 8,
        arrivalTime: "11:30",
        departureTime: "11:40",
        day: 0,
        distanceKm: 110,
      },
      {
        stationId: 9,
        arrivalTime: "14:00",
        departureTime: "14:10",
        day: 0,
        distanceKm: 130,
      },
      {
        stationId: 18,
        arrivalTime: "16:30",
        departureTime: "16:40",
        day: 0,
        distanceKm: 140,
      },
      {
        stationId: 10,
        arrivalTime: "18:00",
        departureTime: null,
        day: 0,
        distanceKm: 150,
      },
    ],
    availableDays: [0, 2, 4, 6], // Sunday, Tuesday, Thursday, Saturday
    basePrice: 280,
    capacity: {
      firstClass: 80,
      secondClass: 220,
    },
  },
  {
    id: 3,
    trainNumber: "102",
    lineId: 1, // Cairo-Alexandria line
    typeId: 2, // Express
    name: "Rajhdani Express",
   
    stations: [
      {
        stationId: 1,
        arrivalTime: null,
        departureTime: "07:30",
        day: 0,
        distanceKm: 0,
      },
      {
        stationId: 5,
        arrivalTime: "08:45",
        departureTime: "08:50",
        day: 0,
        distanceKm: 50,
      },
      {
        stationId: 4,
        arrivalTime: "10:30",
        departureTime: null,
        day: 0,
        distanceKm: 100,
      },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6], // All week
    basePrice: 140,
    capacity: {
      firstClass: 90,
      secondClass: 210,
    },
  },
  {
    id: 4,
    trainNumber: "103",
    lineId: 4, // Cairo-Damietta line
    typeId: 3, // Regular
    name: "Delta Star",
    arabicName: "نجمة الدلتا",
    stations: [
      {
        stationId: 1,
        arrivalTime: null,
        departureTime: "09:00",
        day: 0,
        distanceKm: 0,
      },
      {
        stationId: 19,
        arrivalTime: "09:45",
        departureTime: "09:50",
        day: 0,
        distanceKm: 30,
      },
      {
        stationId: 5,
        arrivalTime: "10:15",
        departureTime: "10:20",
        day: 0,
        distanceKm: 60,
      },
      {
        stationId: 6,
        arrivalTime: "11:30",
        departureTime: "11:40",
        day: 0,
        distanceKm: 90,
      },
      {
        stationId: 15,
        arrivalTime: "13:00",
        departureTime: null,
        day: 0,
        distanceKm: 120,
      },
    ],
    availableDays: [0, 1, 2, 3, 4], // Sunday through Thursday
    basePrice: 120,
    capacity: {
      firstClass: 50,
      secondClass: 180,
    },
  },
  {
    id: 5,
    trainNumber: "104",
    lineId: 2, // Cairo-Aswan line
    typeId: 5, // Sleeper
    name: "Gareeb Nawaz Express",
  
    stations: [
      {
        stationId: 1,
        arrivalTime: null,
        departureTime: "20:00",
        day: 0,
        distanceKm: 0,
      },
      {
        stationId: 2,
        arrivalTime: "20:30",
        departureTime: "20:35",
        day: 0,
        distanceKm: 25,
      },
      {
        stationId: 8,
        arrivalTime: "00:15",
        departureTime: "00:25",
        day: 1,
        distanceKm: 100,
      },
      {
        stationId: 10,
        arrivalTime: "04:10",
        departureTime: "04:20",
        day: 1,
        distanceKm: 160,
      },
      {
        stationId: 11,
        arrivalTime: "08:00",
        departureTime: null,
        day: 1,
        distanceKm: 180,
      },
    ],
    availableDays: [0, 2, 4], // Sunday, Tuesday, Thursday
    basePrice: 450,
    capacity: {
      sleeper: 100,
      firstClass: 60,
    },
  },
  {
    id: 6,
    trainNumber: "105",
    lineId: 3, // Cairo-Suez line
    typeId: 3, // Regular
    name: "K S R Express",
   
    stations: [
      {
        stationId: 1,
        arrivalTime: null,
        departureTime: "06:45",
        day: 0,
        distanceKm: 0,
      },
      {
        stationId: 20,
        arrivalTime: "08:15",
        departureTime: "08:20",
        day: 0,
        distanceKm: 50,
      },
      {
        stationId: 13,
        arrivalTime: "09:30",
        departureTime: null,
        day: 0,
        distanceKm: 90,
      },
    ],
    availableDays: [0, 1, 2, 3, 4], // Sunday through Thursday
    basePrice: 75,
    capacity: {
      firstClass: 40,
      secondClass: 180,
    },
  },
  {
    id: 7,
    trainNumber: "201",
    lineId: 1,
    typeId: 2, // Express
    name: "Shatabdi Express",
    stations: [
      { stationId: 2, arrivalTime: null, departureTime: "06:00", day: 0 },
      { stationId: 17, arrivalTime: "07:30", departureTime: "07:35", day: 0 },
      { stationId: 16, arrivalTime: "08:45", departureTime: "08:50", day: 0 },
      { stationId: 7, arrivalTime: "10:15", departureTime: "10:20", day: 0 },
      { stationId: 1, arrivalTime: "12:00", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    basePrice: 220,
    capacity: {
      firstClass: 70,
      secondClass: 180,
    },
  },
  {
    id: 8,
    trainNumber: "202",
    lineId: 2,
    typeId: 2, // Express
    name: "Duronto Express",
    stations: [
      { stationId: 1, arrivalTime: null, departureTime: "09:30", day: 0 },
      { stationId: 6, arrivalTime: "11:45", departureTime: "11:50", day: 0 },
      { stationId: 15, arrivalTime: "13:30", departureTime: "13:35", day: 0 },
      { stationId: 14, arrivalTime: "15:15", departureTime: "15:20", day: 0 },
      { stationId: 3, arrivalTime: "17:00", departureTime: null, day: 0 },
    ],
    availableDays: [0, 2, 4, 6],
    basePrice: 245,
    capacity: {
      firstClass: 85,
      secondClass: 195,
    },
  },
  {
    id: 9,
    trainNumber: "203",
    lineId: 3,
    typeId: 3, // Regular
    name: "Intercity Express",
    stations: [
      { stationId: 5, arrivalTime: null, departureTime: "07:15", day: 0 },
      { stationId: 19, arrivalTime: "08:30", departureTime: "08:35", day: 0 },
      { stationId: 7, arrivalTime: "10:00", departureTime: "10:05", day: 0 },
      { stationId: 21, arrivalTime: "12:30", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    basePrice: 180,
    capacity: {
      firstClass: 60,
      secondClass: 170,
    },
  },
  {
    id: 10,
    trainNumber: "204",
    lineId: 4,
    typeId: 1, // VIP
    name: "Tejas Express",
    stations: [
      { stationId: 3, arrivalTime: null, departureTime: "08:00", day: 0 },
      { stationId: 14, arrivalTime: "09:30", departureTime: "09:35", day: 0 },
      { stationId: 22, arrivalTime: "11:15", departureTime: "11:20", day: 0 },
      { stationId: 4, arrivalTime: "13:00", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    basePrice: 280,
    capacity: {
      firstClass: 100,
      secondClass: 200,
    },
  },
  {
    id: 11,
    trainNumber: "301",
    lineId: 5,
    typeId: 5, // Sleeper
    name: "Night Rider Express",
    stations: [
      { stationId: 1, arrivalTime: null, departureTime: "21:00", day: 0 },
      { stationId: 6, arrivalTime: "23:15", departureTime: "23:20", day: 0 },
      { stationId: 9, arrivalTime: "02:45", departureTime: "02:50", day: 1 },
      { stationId: 18, arrivalTime: "05:30", departureTime: "05:35", day: 1 },
      { stationId: 10, arrivalTime: "07:30", departureTime: null, day: 1 },
    ],
    availableDays: [0, 2, 4, 6],
    basePrice: 420,
    capacity: {
      sleeper: 120,
      firstClass: 50,
    },
  },
  {
    id: 12,
    trainNumber: "302",
    lineId: 6,
    typeId: 2, // Express
    name: "Garib Rath Express",
    stations: [
      { stationId: 4, arrivalTime: null, departureTime: "10:30", day: 0 },
      { stationId: 22, arrivalTime: "12:00", departureTime: "12:05", day: 0 },
      { stationId: 5, arrivalTime: "13:45", departureTime: "13:50", day: 0 },
      { stationId: 19, arrivalTime: "15:15", departureTime: "15:20", day: 0 },
      { stationId: 1, arrivalTime: "17:00", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    basePrice: 195,
    capacity: {
      firstClass: 70,
      secondClass: 190,
    },
  },
  {
    id: 13,
    trainNumber: "303",
    lineId: 7,
    typeId: 3, // Regular
    name: "Jan Shatabdi Express",
    stations: [
      { stationId: 8, arrivalTime: null, departureTime: "06:30", day: 0 },
      { stationId: 9, arrivalTime: "08:45", departureTime: "08:50", day: 0 },
      { stationId: 18, arrivalTime: "11:15", departureTime: "11:20", day: 0 },
      { stationId: 10, arrivalTime: "13:00", departureTime: "13:05", day: 0 },
      { stationId: 11, arrivalTime: "15:30", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    basePrice: 165,
    capacity: {
      firstClass: 55,
      secondClass: 175,
    },
  },
  {
    id: 14,
    trainNumber: "304",
    lineId: 8,
    typeId: 2, // Express
    name: "Sampark Kranti Express",
    stations: [
      { stationId: 6, arrivalTime: null, departureTime: "07:00", day: 0 },
      { stationId: 15, arrivalTime: "09:15", departureTime: "09:20", day: 0 },
      { stationId: 7, arrivalTime: "11:30", departureTime: "11:35", day: 0 },
      { stationId: 20, arrivalTime: "14:00", departureTime: "14:05", day: 0 },
      { stationId: 13, arrivalTime: "16:30", departureTime: null, day: 0 },
    ],
    availableDays: [0, 2, 4],
    basePrice: 230,
    capacity: {
      firstClass: 75,
      secondClass: 185,
    },
  },
  {
    id: 15,
    trainNumber: "305",
    lineId: 9,
    typeId: 1, // VIP
    name: "Vande Bharat Express",
    stations: [
      { stationId: 2, arrivalTime: null, departureTime: "05:45", day: 0 },
      { stationId: 12, arrivalTime: "07:00", departureTime: "07:05", day: 0 },
      { stationId: 1, arrivalTime: "08:15", departureTime: "08:20", day: 0 },
      { stationId: 5, arrivalTime: "09:45", departureTime: "09:50", day: 0 },
      { stationId: 14, arrivalTime: "11:00", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    basePrice: 310,
    capacity: {
      firstClass: 120,
      secondClass: 220,
    },
  },
  {
    id: 16,
    trainNumber: "401",
    lineId: 10,
    typeId: 3, // Regular
    name: "Passenger Express",
    stations: [
      { stationId: 16, arrivalTime: null, departureTime: "08:00", day: 0 },
      { stationId: 17, arrivalTime: "09:30", departureTime: "09:35", day: 0 },
      { stationId: 2, arrivalTime: "11:00", departureTime: "11:05", day: 0 },
      { stationId: 8, arrivalTime: "13:30", departureTime: "13:35", day: 0 },
      { stationId: 9, arrivalTime: "16:00", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    basePrice: 145,
    capacity: {
      firstClass: 45,
      secondClass: 165,
    },
  },
  {
    id: 17,
    trainNumber: "402",
    lineId: 11,
    typeId: 2, // Express
    name: "Humsafar Express",
    stations: [
      { stationId: 14, arrivalTime: null, departureTime: "06:15", day: 0 },
      { stationId: 5, arrivalTime: "07:45", departureTime: "07:50", day: 0 },
      { stationId: 1, arrivalTime: "09:15", departureTime: "09:20", day: 0 },
      { stationId: 7, arrivalTime: "11:00", departureTime: "11:05", day: 0 },
      { stationId: 21, arrivalTime: "13:45", departureTime: null, day: 0 },
    ],
    availableDays: [0, 2, 4, 6],
    basePrice: 265,
    capacity: {
      firstClass: 80,
      secondClass: 190,
    },
  },
  {
    id: 18,
    trainNumber: "403",
    lineId: 12,
    typeId: 5, // Sleeper
    name: "Antyodaya Express",
    stations: [
      { stationId: 10, arrivalTime: null, departureTime: "22:00", day: 0 },
      { stationId: 18, arrivalTime: "23:45", departureTime: "23:50", day: 0 },
      { stationId: 9, arrivalTime: "01:30", departureTime: "01:35", day: 1 },
      { stationId: 6, arrivalTime: "05:00", departureTime: "05:05", day: 1 },
      { stationId: 1, arrivalTime: "07:15", departureTime: null, day: 1 },
    ],
    availableDays: [0, 1, 3, 5],
    basePrice: 390,
    capacity: {
      sleeper: 110,
      firstClass: 55,
    },
  },
  {
    id: 19,
    trainNumber: "404",
    lineId: 13,
    typeId: 3, // Regular
    name: "Mahamana Express",
    stations: [
      { stationId: 13, arrivalTime: null, departureTime: "07:30", day: 0 },
      { stationId: 20, arrivalTime: "09:00", departureTime: "09:05", day: 0 },
      { stationId: 1, arrivalTime: "11:30", departureTime: "11:35", day: 0 },
      { stationId: 16, arrivalTime: "13:15", departureTime: "13:20", day: 0 },
      { stationId: 8, arrivalTime: "15:45", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    basePrice: 175,
    capacity: {
      firstClass: 50,
      secondClass: 170,
    },
  },
  {
    id: 20,
    trainNumber: "501",
    lineId: 14,
    typeId: 2, // Express
    name: "Uday Express",
    stations: [
      { stationId: 11, arrivalTime: null, departureTime: "08:30", day: 0 },
      { stationId: 10, arrivalTime: "12:00", departureTime: "12:05", day: 0 },
      { stationId: 18, arrivalTime: "14:15", departureTime: "14:20", day: 0 },
      { stationId: 9, arrivalTime: "16:45", departureTime: "16:50", day: 0 },
      { stationId: 6, arrivalTime: "20:30", departureTime: null, day: 0 },
    ],
    availableDays: [0, 2, 4, 6],
    basePrice: 240,
    capacity: {
      firstClass: 75,
      secondClass: 185,
    },
  },
  {
    id: 21,
    trainNumber: "502",
    lineId: 15,
    typeId: 1, // VIP
    name: "Double Decker Express",
    stations: [
      { stationId: 3, arrivalTime: null, departureTime: "09:00", day: 0 },
      { stationId: 4, arrivalTime: "10:30", departureTime: "10:35", day: 0 },
      { stationId: 22, arrivalTime: "12:15", departureTime: "12:20", day: 0 },
      { stationId: 5, arrivalTime: "14:00", departureTime: "14:05", day: 0 },
      { stationId: 1, arrivalTime: "15:45", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    basePrice: 295,
    capacity: {
      firstClass: 110,
      secondClass: 210,
    },
  },
  {
    id: 22,
    trainNumber: "503",
    lineId: 16,
    typeId: 3, // Regular
    name: "Vivek Express",
    stations: [
      { stationId: 7, arrivalTime: null, departureTime: "10:00", day: 0 },
      { stationId: 19, arrivalTime: "11:30", departureTime: "11:35", day: 0 },
      { stationId: 5, arrivalTime: "13:00", departureTime: "13:05", day: 0 },
      { stationId: 22, arrivalTime: "14:45", departureTime: "14:50", day: 0 },
      { stationId: 4, arrivalTime: "16:30", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    basePrice: 160,
    capacity: {
      firstClass: 50,
      secondClass: 175,
    },
  },
  {
    id: 23,
    trainNumber: "504",
    lineId: 17,
    typeId: 2, // Express
    name: "Gomti Express",
    stations: [
      { stationId: 15, arrivalTime: null, departureTime: "06:00", day: 0 },
      { stationId: 6, arrivalTime: "08:30", departureTime: "08:35", day: 0 },
      { stationId: 1, arrivalTime: "10:45", departureTime: "10:50", day: 0 },
      { stationId: 2, arrivalTime: "11:30", departureTime: "11:35", day: 0 },
      { stationId: 12, arrivalTime: "13:00", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    basePrice: 205,
    capacity: {
      firstClass: 65,
      secondClass: 180,
    },
  },
  {
    id: 24,
    trainNumber: "601",
    lineId: 18,
    typeId: 5, // Sleeper
    name: "Rajya Rani Express",
    stations: [
      { stationId: 21, arrivalTime: null, departureTime: "20:30", day: 0 },
      { stationId: 7, arrivalTime: "23:00", departureTime: "23:05", day: 0 },
      { stationId: 1, arrivalTime: "01:15", departureTime: "01:20", day: 1 },
      { stationId: 19, arrivalTime: "02:45", departureTime: "02:50", day: 1 },
      { stationId: 5, arrivalTime: "04:15", departureTime: null, day: 1 },
    ],
    availableDays: [0, 2, 4],
    basePrice: 410,
    capacity: {
      sleeper: 105,
      firstClass: 60,
    },
  },
  {
    id: 25,
    trainNumber: "602",
    lineId: 19,
    typeId: 2, // Express
    name: "Pushpak Express",
    stations: [
      { stationId: 12, arrivalTime: null, departureTime: "09:00", day: 0 },
      { stationId: 2, arrivalTime: "10:15", departureTime: "10:20", day: 0 },
      { stationId: 17, arrivalTime: "11:45", departureTime: "11:50", day: 0 },
      { stationId: 16, arrivalTime: "13:00", departureTime: "13:05", day: 0 },
      { stationId: 8, arrivalTime: "15:30", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    basePrice: 190,
    capacity: {
      firstClass: 70,
      secondClass: 180,
    },
  },
  {
    id: 26,
    trainNumber: "603",
    lineId: 20,
    typeId: 3, // Regular
    name: "Vidarbha Express",
    stations: [
      { stationId: 22, arrivalTime: null, departureTime: "08:00", day: 0 },
      { stationId: 4, arrivalTime: "09:45", departureTime: "09:50", day: 0 },
      { stationId: 3, arrivalTime: "11:30", departureTime: "11:35", day: 0 },
      { stationId: 14, arrivalTime: "13:15", departureTime: "13:20", day: 0 },
      { stationId: 6, arrivalTime: "15:00", departureTime: null, day: 0 },
    ],
    availableDays: [0, 2, 4, 6],
    basePrice: 185,
    capacity: {
      firstClass: 55,
      secondClass: 170,
    },
  },
  {
    id: 27,
    trainNumber: "604",
    lineId: 21,
    typeId: 1, // VIP
    name: "Gatimaan Express",
    stations: [
      { stationId: 1, arrivalTime: null, departureTime: "08:30", day: 0 },
      { stationId: 19, arrivalTime: "09:45", departureTime: "09:50", day: 0 },
      { stationId: 7, arrivalTime: "11:15", departureTime: "11:20", day: 0 },
      { stationId: 16, arrivalTime: "13:30", departureTime: "13:35", day: 0 },
      { stationId: 8, arrivalTime: "15:45", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    basePrice: 320,
    capacity: {
      firstClass: 115,
      secondClass: 215,
    },
  },
  {
    id: 28,
    trainNumber: "701",
    lineId: 22,
    typeId: 2, // Express
    name: "Prayagraj Express",
    stations: [
      { stationId: 20, arrivalTime: null, departureTime: "07:00", day: 0 },
      { stationId: 13, arrivalTime: "08:30", departureTime: "08:35", day: 0 },
      { stationId: 1, arrivalTime: "11:00", departureTime: "11:05", day: 0 },
      { stationId: 6, arrivalTime: "13:30", departureTime: "13:35", day: 0 },
      { stationId: 9, arrivalTime: "17:00", departureTime: null, day: 0 },
    ],
    availableDays: [0, 2, 4, 6],
    basePrice: 255,
    capacity: {
      firstClass: 80,
      secondClass: 190,
    },
  },
  {
    id: 29,
    trainNumber: "702",
    lineId: 23,
    typeId: 3, // Regular
    name: "Karnataka Express",
    stations: [
      { stationId: 14, arrivalTime: null, departureTime: "10:00", day: 0 },
      { stationId: 3, arrivalTime: "11:45", departureTime: "11:50", day: 0 },
      { stationId: 4, arrivalTime: "13:15", departureTime: "13:20", day: 0 },
      { stationId: 22, arrivalTime: "15:00", departureTime: "15:05", day: 0 },
      { stationId: 5, arrivalTime: "16:45", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    basePrice: 170,
    capacity: {
      firstClass: 50,
      secondClass: 175,
    },
  },
  {
    id: 30,
    trainNumber: "703",
    lineId: 24,
    typeId: 5, // Sleeper
    name: "Swarna Jayanti Express",
    stations: [
      { stationId: 9, arrivalTime: null, departureTime: "21:30", day: 0 },
      { stationId: 18, arrivalTime: "23:15", departureTime: "23:20", day: 0 },
      { stationId: 10, arrivalTime: "01:00", departureTime: "01:05", day: 1 },
      { stationId: 11, arrivalTime: "04:30", departureTime: "04:35", day: 1 },
      { stationId: 6, arrivalTime: "08:00", departureTime: null, day: 1 },
    ],
    availableDays: [0, 1, 3, 5],
    basePrice: 440,
    capacity: {
      sleeper: 115,
      firstClass: 65,
    },
  },
];

// Helper functions for working with train data
export const getTrainById = (id) => trains.find((train) => train.id === id);
export const getTrainsByLine = (lineId) =>
  trains.filter((train) => train.lineId === lineId);
export const getTrainsByType = (typeId) =>
  trains.filter((train) => train.typeId === typeId);
export const getTrainsByStation = (stationId) => {
  return trains.filter((train) =>
    train.stations.some((station) => station.stationId === stationId),
  );
};

// Get price between two stations
export const calculateTicketPrice = (
  trainId,
  fromStationId,
  toStationId,
  ticketClass = "secondClass",
) => {
  const train = getTrainById(trainId);
  if (!train) return null;

  const trainType = trainTypes.find((type) => type.id === train.typeId);
  const basePrice = train.basePrice;
  const classMultiplier =
    ticketClass === "firstClass" ? 1.5 : ticketClass === "sleeper" ? 2.5 : 1.0;

  // Find station indexes
  const fromIndex = train.stations.findIndex(
    (s) => s.stationId === fromStationId,
  );
  const toIndex = train.stations.findIndex((s) => s.stationId === toStationId);

  if (fromIndex === -1 || toIndex === -1 || fromIndex >= toIndex) return null;

  // Calculate distance ratio (simplified)
  const totalStations = train.stations.length - 1;
  const traveledStations = toIndex - fromIndex;
  const distanceRatio = traveledStations / totalStations;

  return Math.round(
    basePrice * distanceRatio * trainType.priceMultiplier * classMultiplier,
  );
};

// Format time function for displaying schedules
export const formatTime = (timeString) => {
  if (!timeString) return "";
  const [hours, minutes] = timeString.split(":");
  return `${hours}:${minutes}`;
};

// Get travel duration between stations on a train
export const getTravelDuration = (trainId, fromStationId, toStationId) => {
  const train = getTrainById(trainId);
  if (!train) return null;

  const fromStation = train.stations.find((s) => s.stationId === fromStationId);
  const toStation = train.stations.find((s) => s.stationId === toStationId);

  if (
    !fromStation ||
    !toStation ||
    !fromStation.departureTime ||
    !toStation.arrivalTime
  ) {
    return null;
  }

  // Handle day differences
  const dayDiff = (toStation.day - fromStation.day) * 24 * 60; // convert to minutes

  const [fromHours, fromMinutes] = fromStation.departureTime
    .split(":")
    .map(Number);
  const [toHours, toMinutes] = toStation.arrivalTime.split(":").map(Number);

  const fromMinutesTotal = fromHours * 60 + fromMinutes;
  const toMinutesTotal = toHours * 60 + toMinutes;

  const durationMinutes = toMinutesTotal - fromMinutesTotal + dayDiff;

  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;

  return { hours, minutes, totalMinutes: durationMinutes };
};

// Get available trains between two stations
export const getAvailableTrains = (fromStationId, toStationId) => {
  // Convert to numbers if they're passed as strings
  fromStationId = Number(fromStationId);
  toStationId = Number(toStationId);

  // Return empty array if invalid input
  if (!fromStationId || !toStationId || fromStationId === toStationId) {
    return [];
  }

  // Find all trains that pass through both stations
  const availableTrains = trains.filter((train) => {
    // Get the station indexes in this train's route
    const stationIds = train.stations.map((s) => s.stationId);
    const fromIndex = stationIds.indexOf(fromStationId);
    const toIndex = stationIds.indexOf(toStationId);

    // Train is valid if both stations exist in its route and the 'from' station comes before the 'to' station
    return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
  });

  // Enhance train data with additional information
  return availableTrains.map((train) => {
    const fromStation = train.stations.find(
      (s) => s.stationId === fromStationId,
    );
    const toStation = train.stations.find((s) => s.stationId === toStationId);
    const trainType = trainTypes.find((type) => type.id === train.typeId);
    const duration = getTravelDuration(train.id, fromStationId, toStationId);

    return {
      ...train,
      departureTime: fromStation.departureTime,
      departureDay: fromStation.day,
      arrivalTime: toStation.arrivalTime,
      arrivalDay: toStation.day,
      duration,
      trainTypeName: trainType.name,
      trainTypeArabicName: trainType.arabicName,
      firstClassPrice: calculateTicketPrice(
        train.id,
        fromStationId,
        toStationId,
        "firstClass",
      ),
      secondClassPrice: calculateTicketPrice(
        train.id,
        fromStationId,
        toStationId,
        "secondClass",
      ),
      sleeperPrice:
        train.typeId === 5
          ? calculateTicketPrice(
              train.id,
              fromStationId,
              toStationId,
              "sleeper",
            )
          : null,
    };
  });
};
