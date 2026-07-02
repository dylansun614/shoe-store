import heroShoe from "../assets/hero-shoe.jpg";

const products = [
  {
    id: 1,
    name: "GR-001",
    brand: "GR",
    category: "Men",
    price: 129,
    image: heroShoe,

    description: "Minimal everyday sneaker with premium leather upper.",
    rating: 4.8,
    stock: 12,
    colors: ["White", "Brown"],

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

    description: "Comfortable streetwear sneaker for daily use.",
    rating: 4.6,
    stock: 8,
    colors: ["White", "Black"],

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

    description: "Performance running shoe with lightweight cushioning.",
    rating: 4.9,
    stock: 15,
    colors: ["White", "Blue"],

    isFeatured: false,
    isBestSeller: true,
  },

  {
    id: 4,
    name: "GR-004",
    brand: "GR",
    category: "New Arrivals",
    price: 159,
    image: heroShoe,

    description: "Latest collection inspired by modern fashion.",
    rating: 4.7,
    stock: 4,
    colors: ["White", "Grey"],

    isFeatured: true,
    isBestSeller: true,
  },
];

export default products;