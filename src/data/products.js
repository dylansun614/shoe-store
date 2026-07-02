import heroShoe from "../assets/hero-shoe.jpg";

const products = [
  {
  id: 1,
  name: "GR-001",
  brand: "GR",
  category: "Men",
  price: 129,
  image: heroShoe,

  description:
    "A clean everyday sneaker designed for comfort, confidence, and modern streetwear.",

  colors: ["White", "Black", "Brown"],

  sizes: [39, 40, 41, 42, 43],

  stock: 18,

  rating: 4.8,

  reviews: 126,

  isFeatured: true,
  isBestSeller: true,
  },

{
  id: 2,
  name: "GR-002",
  brand: "GR",
  category: "Women",
  price: 139,
  image: heroShoe,

  description:
    "Lightweight everyday sneaker with a minimalist aesthetic.",

  colors: ["White", "Pink"],

  sizes: [36, 37, 38, 39],

  stock: 10,

  rating: 4.6,

  reviews: 89,

  isFeatured: true,
  isBestSeller: false,
  },

{
  id: 3,
  name: "GR-003",
  brand: "GR",
  category: "Running",
  price: 149,
  image: heroShoe,

  description:
    "Responsive running shoe built for long-distance comfort.",

  colors: ["Blue", "Black"],

  sizes: [40, 41, 42, 43, 44],

  stock: 7,

  rating: 4.9,

  reviews: 214,

  isFeatured: false,
  isBestSeller: true,
  },

{
  id: 4,
  name: "GR-004",
  brand: "GR",
  category: "New Arrival",
  price: 159,
  image: heroShoe,

  description:
    "Premium leather sneaker inspired by luxury street fashion.",

  colors: ["White", "Cream"],

  sizes: [39, 40, 41, 42],

  stock: 5,

  rating: 5.0,

  reviews: 42,

  isFeatured: true,
  isBestSeller: true,
  },
];

export default products;