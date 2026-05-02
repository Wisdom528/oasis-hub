import salad from "@/assets/dish-salad.jpg";
import burger from "@/assets/dish-burger.jpg";
import pasta from "@/assets/dish-pasta.jpg";
import fish from "@/assets/dish-fish.jpg";
import pizza from "@/assets/dish-pizza.jpg";
import brownie from "@/assets/dish-brownie.jpg";
import sorbet from "@/assets/dish-sorbet.jpg";
import mojito from "@/assets/dish-mojito.jpg";
import juice from "@/assets/dish-juice.jpg";

export type MenuCategory = "Starters" | "Main Course" | "Desserts" | "Drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: MenuCategory;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  { id: "festival-salad", name: "Festival Salad", description: "Roasted squash, feta, pomegranate and fresh herbs over baby greens.", price: "₦8,500", image: salad, category: "Starters", popular: true },
  { id: "club-sandwich", name: "Club Sandwich", description: "Triple-stack with grilled chicken, smoked bacon, egg and avocado.", price: "₦9,200", image: burger, category: "Starters" },
  { id: "margherita", name: "Wood-Fired Margherita", description: "San Marzano tomato, buffalo mozzarella, basil on a charred crust.", price: "₦11,000", image: pizza, category: "Starters" },

  { id: "street-burger", name: "Street Style Burger", description: "Double smash patty, melted cheddar and house sauce on a brioche bun.", price: "₦14,500", image: burger, category: "Main Course", popular: true },
  { id: "fish-chips", name: "Fish & Chips", description: "Beer-battered croaker fillet with golden fries and tartar sauce.", price: "₦16,800", image: fish, category: "Main Course", popular: true },
  { id: "spaghetti-bolognese", name: "Spaghetti Bolognese", description: "Slow-cooked beef ragù tossed with al dente spaghetti and parmesan.", price: "₦13,500", image: pasta, category: "Main Course", popular: true },
  { id: "fettuccine", name: "Fettuccine Alfredo", description: "Silky cream sauce, parmesan and cracked black pepper.", price: "₦13,000", image: pasta, category: "Main Course" },

  { id: "brownie", name: "Chocolate Brownie", description: "Warm fudge brownie with vanilla ice cream and seasonal berries.", price: "₦6,500", image: brownie, category: "Desserts", popular: true },
  { id: "sorbet", name: "Strawberry Sorbet", description: "House-churned strawberry sorbet with fresh mint.", price: "₦5,800", image: sorbet, category: "Desserts", popular: true },

  { id: "mojito", name: "Classic Mojito", description: "White rum, lime, mint and a splash of soda over crushed ice.", price: "₦7,200", image: mojito, category: "Drinks", popular: true },
  { id: "tropical-juice", name: "Tropical Juice", description: "Cold-pressed orange, pineapple and passion fruit.", price: "₦4,500", image: juice, category: "Drinks" },
  { id: "coffee-special", name: "Coffee Special", description: "House espresso blend with steamed milk and a hint of caramel.", price: "₦4,200", image: juice, category: "Drinks" },
];

export const categories: MenuCategory[] = ["Starters", "Main Course", "Desserts", "Drinks"];
