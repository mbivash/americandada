export interface BiryaniDish {
  id: string;
  name: string;
  subName: string;
  price: string;
  description: string;
  imageFolder: string;
  themeColor: string;
  gradient: string;
  features: string[];
  section1: { title: string; subtitle: string };
  section2: { title: string; subtitle: string };
  section3: { title: string; subtitle: string };
  section4: { title: string; subtitle: string };
  storySection: { title: string; description: string };
  experienceSection: { title: string; description: string };
}

export const dishes: BiryaniDish[] = [
  {
    id: "chicken",
    name: "Chicken Dum Biryani",
    subName: "Signature classic.",
    price: "₹220",
    description: "Slow-cooked dum biryani with aromatic basmati rice",
    imageFolder: "/images/chicken",
    themeColor: "#D4A373",
    gradient: "linear-gradient(135deg, #D4A373, #B08968)",
    features: ["Authentic Dum Cooking", "Premium Basmati", "Fresh Chicken"],
    section1: { title: "Chicken Dum Biryani.", subtitle: "The signature taste." },
    section2: { title: "Layered to perfection.", subtitle: "Rice and meat sealed and slow-cooked." },
    section3: { title: "Aromatic spices.", subtitle: "Handpicked spices blended in-house." },
    section4: { title: "Crafted with patience.", subtitle: "" },
    storySection: {
      title: "Tradition in Every Layer",
      description: "Our Chicken Dum Biryani is cooked using age-old techniques where rice and meat are sealed together and slow-cooked to lock in flavor."
    },
    experienceSection: {
      title: "A Dining Experience",
      description: "Served hot in traditional style at our outlets, delivering a royal experience in every bite."
    }
  },
  {
    id: "mutton",
    name: "Mutton Royal Biryani",
    subName: "Rich and indulgent.",
    price: "₹320",
    description: "Tender mutton cooked with deep spices and long-grain rice",
    imageFolder: "/images/mutton",
    themeColor: "#8B5E3C",
    gradient: "linear-gradient(135deg, #8B5E3C, #5C4033)",
    features: ["Slow Cooked Mutton", "Rich Flavor", "Royal Recipe"],
    section1: { title: "Mutton Royal Biryani.", subtitle: "A king’s choice." },
    section2: { title: "Deep flavors.", subtitle: "Mutton cooked for hours." },
    section3: { title: "Luxury on a plate.", subtitle: "Every bite tells a story." },
    section4: { title: "Unforgettable taste.", subtitle: "" },
    storySection: {
      title: "The Royal Recipe",
      description: "Inspired by royal kitchens, this biryani delivers richness, depth, and bold flavor."
    },
    experienceSection: {
      title: "True Indulgence",
      description: "Perfect for those who crave a heavy, flavorful experience."
    }
  }
];
