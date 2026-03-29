export interface MenuItem {
  name: string;
  price?: string;
  details?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: "Starters",
    items: [
      { name: "Fish Fry", price: "₹99.00" },
      { name: "Masala Corn", price: "₹129.00" },
      { name: "Crispy Chilli Baby Corn", price: "₹119.00" },
      { name: "Chilli Fish", price: "₹149.00", details: "(6 pc)" },
      { name: "Fish Finger", price: "₹119.00", details: "(4pc)" },
      { name: "Chilli Chicken", price: "₹149.00", details: "(6 pc)" },
      { name: "Dry Chili Chicken", price: "₹149.00", details: "(6 pc)" },
      { name: "Chicken 65", price: "₹149.00", details: "(6 pc)" },
      { name: "Crispy Chicken", price: "₹169.00" },
      { name: "Chicken Lolipop", price: "₹149.00", details: "(5 pc)" },
      { name: "Drums Of Heaven", price: "₹139.00", details: "(5 pc)" },
      { name: "Chicken Nuggets", price: "₹149.00", details: "(8pc)" },
      { name: "Chili Prawn", price: "₹199.00", details: "(5 pc)" },
      { name: "Golden Fried Prawn", price: "₹199.00", details: "(5 pc)" },
      { name: "Chicken Popcorn", price: "₹119.00", details: "(8pc)" },
      { name: "Orange Chicken", price: "₹119.00", details: "(8pc)" },
      { name: "Honey Chicken", price: "₹129.00", details: "(8pc)" },
    ],
  },
  {
    category: "Combos",
    items: [
      { name: "Chilli Chicken Combo", price: "₹149.00", details: "(6 pc)" },
      { name: "Chicken 65 Combo", price: "₹149.00", details: "(6 pc)" },
      { name: "Dry Chili Chicken Combo", price: "₹149.00", details: "(6 pc)" },
      { name: "Fish Fry Combo", price: "₹199.00" },
      { name: "Chicken Biryani & Chicken Chap", price: "₹280.00" },
      { name: "Egg Fried Rice & Chilli Chicken Combo", price: "₹149.00" },
      { name: "Egg Fried Rice & Chilli Chicken (With 2pc Drums of Heaven)", price: "₹199.00" },
      { name: "Reshmi Polau & Butter Chicken", details: "(2 pc)", price: "₹149.00" },
    ],
  },
  {
    category: "Rice & Fried Rice",
    items: [
      { name: "Steam Rice", price: "₹69.00" },
      { name: "Veg Fried Rice", price: "₹119.00" },
      { name: "Egg Fried Rice", price: "₹129.00" },
      { name: "Egg Chicken Fried Rice", price: "₹149.00" },
      { name: "Mixed Fried Rice", price: "₹199.00" },
      { name: "Reshmi Polau", price: "₹99.00" },
      { name: "Schezwan Rice", price: "₹139.00" },
      { name: "Veg Rice", price: "₹70.00" },
      { name: "Egg Rice", price: "₹80.00" },
      { name: "Egg Chicken Rice", price: "₹100.00" },
      { name: "Mix Rice", price: "₹199.00" },
      { name: "Chilli Garlic Rice", price: "₹150.00" },
      { name: "Chicken Schezwan Rice", price: "₹60.00" },
      { name: "Basanti Polau", price: "₹70.00" },
      { name: "Jeera Rice", price: "₹60.00" },
      { name: "Ghee Rice", price: "₹60.00" },
    ],
  },
  {
    category: "Rolls & Noodles",
    items: [
      { name: "Egg Roll", price: "₹49.00" },
      { name: "Egg Chicken Roll", price: "₹69.00" },
      { name: "Tikka Kabab Roll", price: "₹79.00" },
      { name: "Reshmi Kabab Roll", price: "₹79.00" },
      { name: "Malai Kabab Roll", price: "₹99.00" },
      { name: "Veg Hakka Noodles", price: "₹59.00" },
      { name: "Egg Hakka Noodles", price: "₹69.00" },
      { name: "Egg Chicken Hakka Noodles", price: "₹99.00" },
      { name: "Mixed Hakka Noodles", price: "₹139.00" },
    ],
  },
  {
    category: "Biryani & Special Dishes",
    items: [
      { name: "Alu Biryani", price: "₹140.00" },
      { name: "Chicken Biryani", price: "₹200.00" },
      { name: "Special Chicken Biryani", price: "₹265.00" },
      { name: "Mutton Biryani", price: "₹480.00" },
      { name: "Special Mutton Biryani", price: "₹600.00" },
      { name: "Chicken Chap", price: "₹240.00", details: "Extra Chicken: ₹210.00" },
      { name: "Mutton Chap", price: "₹490.00", details: "(2pc) | Extra Mutton: ₹280.00" },
    ],
  },
  {
    category: "Tandoori & Kebabs",
    items: [
      { name: "Chicken Tikka", price: "₹160.00", details: "(6 pcs)" },
      { name: "Chicken Reshmi Kabab", price: "₹170.00" },
      { name: "Chicken Malai Kabab", price: "₹170.00" },
      { name: "Tandoori Chicken", price: "₹110.00", details: "(Half/ Qtr/ Full) - Full: ₹300, Half: ₹160, Qtr: ₹80" },
      { name: "Desi Vetki Fry (দেশী ভেটকী ফিস ফ্রাই)", price: "₹150.00" },
    ],
  },
  {
    category: "Veg Delights",
    items: [
      { name: "Paneer Butter Masala", price: "₹199.00", details: "(8pc)" },
      { name: "Paneer Bharta", price: "₹179.00", details: "(Per plate)" },
      { name: "Palak Paneer", price: "₹199.00", details: "(8pc)" },
      { name: "Kashmiri Alu Dum", price: "₹99.00", details: "(6pc)" },
      { name: "Alu Matar", price: "₹99.00", details: "(6pc)" },
    ],
  },
  {
    category: "Breads",
    items: [
      { name: "Lachha Paratha", price: "₹30.00" },
      { name: "Plain Naan", price: "₹40.00" },
      { name: "Butter Naan", price: "₹50.00" },
      { name: "Garlic Naan", price: "₹50.00" },
      { name: "Masala Kulcha", price: "₹50.00" },
    ],
  },
  {
    category: "Chinese Combos",
    items: [
      { name: "Fried Rice & Chilli Chicken", price: "₹170.00" },
      { name: "Fried Rice & Manchurian", price: "₹170.00" },
      { name: "Egg Chicken Fried Rice & Chilli Chicken", price: "₹140.00" },
      { name: "Egg Chicken Fried Rice & Manchurian", price: "₹140.00" },
      { name: "Mix Fried Rice & Chilli Chicken", price: "₹170.00" },
      { name: "Mix Fried Rice & Manchurian", price: "₹200.00" },
    ],
  },
  {
    category: "Sides & Extras",
    items: [
      { name: "Liver Curry (লিভার কারী)", price: "₹100.00" },
      { name: "Green Salad", price: "₹39.00" },
      { name: "Raita", price: "₹39.00" },
      { name: "Firni", price: "₹80.00" },
      { name: "Dahi Lassi (টক দই লস্যি)", price: "₹40.00", details: "(Buffalo milk)" },
    ],
  },
  {
    category: "Mocktails & Beverages",
    items: [
      { name: "Blue Lagoon", price: "₹59.00" },
      { name: "Fresh Lime Soda", price: "₹49.00" },
      { name: "BB Special Mocktail", price: "₹99.00" },
      { name: "Mango Blossom", price: "₹89.00" },
      { name: "Orange Blossom", price: "₹89.00" },
      { name: "Special Kiwi Delight", price: "₹59.00" },
      { name: "Virgin Mojito", price: "₹89.00" },
      { name: "Thums Up / Sprite", price: "₹30.00" },
      { name: "Mineral Water (500ml)", price: "₹10.00" },
      { name: "Mineral Water (1 Ltr)", price: "₹20.00" },
    ],
  },
];
