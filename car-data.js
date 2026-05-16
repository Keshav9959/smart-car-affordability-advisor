// ── CAR DATA ──
// Global array used by car-details.html and any other page via <script src="car-data.js">
// Fields:
//   id           – unique number, used in URL: car-details.html?id=1
//   name         – full display name
//   brand        – manufacturer name
//   type         – "suv" | "sedan"
//   price        – ex-showroom price in INR (rupees)
//   fuel         – "Petrol" | "Diesel" | "Electric" | "Hybrid"
//   ev           – true if fully electric
//   luxury       – true if premium/luxury segment
//   mileage      – kmpl for ICE, km range for EV
//   engine       – displacement string (e.g. "1998cc") or motor spec for EV
//   power        – bhp output
//   transmission – "Automatic" | "Manual" | "CVT" | "DCT"
//   seats        – seating capacity
//   image        – relative path to image file
//   features     – array of 4 highlight feature strings

const carData = [

  {
    id:           1,
    name:         "BMW X5",
    brand:        "BMW",
    type:         "suv",
    price:        9700000,          // ₹97,00,000
    fuel:         "Petrol",
    ev:           false,
    luxury:       true,
    mileage:      "12 kmpl",
    engine:       "2998cc Inline-6 TwinPower Turbo",
    power:        "340 bhp",
    transmission: "Automatic",
    seats:        5,
    image:        "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=400&q=80&crop=entropy&cs=tinysrgb&fit=max",
    features: [
      "Panoramic Sky Lounge LED Roof",
      "Harman Kardon Surround Sound",
      "BMW Live Cockpit Professional",
      "Adaptive M Suspension"
    ]
  },

  {
    id:           2,
    name:         "Mercedes GLC",
    brand:        "Mercedes",
    type:         "suv",
    price:        7800000,          // ₹78,00,000
    fuel:         "Petrol",
    ev:           false,
    luxury:       true,
    mileage:      "13 kmpl",
    engine:       "1999cc 4-Cylinder Turbo",
    power:        "204 bhp",
    transmission: "Automatic",
    seats:        5,
    image:        "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=400&q=80&crop=entropy&cs=tinysrgb&fit=max",
    features: [
      "MBUX Infotainment with Hey Mercedes",
      "64-Colour Ambient Lighting",
      "Active Brake Assist",
      "Burmester 3D Surround Sound"
    ]
  },

  {
    id:           3,
    name:         "Hyundai Creta",
    brand:        "Hyundai",
    type:         "suv",
    price:        1079000,          // ₹10,79,000
    fuel:         "Petrol",
    ev:           false,
    luxury:       false,
    mileage:      "17 kmpl",
    engine:       "1497cc 4-Cylinder",
    power:        "115 bhp",
    transmission: "Automatic",
    seats:        5,
    image:        "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=400&q=80&crop=entropy&cs=tinysrgb&fit=max",
    features: [
      "Panoramic Sunroof",
      "ADAS Level 2 Safety Suite",
      "360-Degree Camera",
      "Bose Premium Sound System"
    ]
  },

  {
    id:           4,
    name:         "Mahindra BE.05",
    brand:        "Mahindra",
    type:         "suv",
    price:        2400000,          // ₹24,00,000
    fuel:         "Electric",
    ev:           true,
    luxury:       false,
    mileage:      "450 km range",
    engine:       "79 kWh Battery Pack",
    power:        "228 bhp",
    transmission: "Automatic",
    seats:        5,
    image:        "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=400&q=80&crop=entropy&cs=tinysrgb&fit=max",
    features: [
      "Inglo EV Platform",
      "Vehicle-to-Load (V2L) Support",
      "Augmented Reality HUD",
      "Level 2 ADAS with 5 Radars"
    ]
  },

  {
    id:           5,
    name:         "Audi A4",
    brand:        "Audi",
    type:         "sedan",
    price:        5200000,          // ₹52,00,000
    fuel:         "Petrol",
    ev:           false,
    luxury:       true,
    mileage:      "14 kmpl",
    engine:       "1984cc 4-Cylinder TFSI",
    power:        "190 bhp",
    transmission: "DCT",
    seats:        5,
    image:        "https://images.unsplash.com/photo-1552591906-c72da12fdf0d?w=400&q=80&crop=entropy&cs=tinysrgb&fit=max",
    features: [
      "Audi Virtual Cockpit Plus",
      "MMI Navigation with Touch Response",
      "Matrix LED Headlights",
      "Bang & Olufsen 3D Sound"
    ]
  },

  {
    id:           6,
    name:         "Hyundai Ioniq 5",
    brand:        "Hyundai",
    type:         "suv",
    price:        4630000,          // ₹46,30,000
    fuel:         "Electric",
    ev:           true,
    luxury:       true,
    mileage:      "631 km range",
    engine:       "77.4 kWh Battery Pack",
    power:        "217 bhp",
    transmission: "Automatic",
    seats:        5,
    image:        "https://images.unsplash.com/photo-1620891830260-2c7e99b83e8a?w=400&q=80&crop=entropy&cs=tinysrgb&fit=max",
    features: [
      "800V Ultra-Fast Charging (18 min 10–80%)",
      "Vehicle-to-Grid (V2G) Technology",
      "Relaxation Seats with Leg Rest",
      "Augmented Reality Head-Up Display"
    ]
  }

];
