import { ListOrdered, Utensils, ShoppingCart, Car, Wrench } from "lucide-react";
import { ServiceCategory } from "@/types";

export const serviceCategories: ServiceCategory[] = [
  { id: "all", name: "All", icon: ListOrdered },
  { id: "food", name: "Food", icon: Utensils },
  { id: "groceries", name: "Groceries", icon: ShoppingCart },
  { id: "auto", name: "Auto", icon: Car },
  { id: "home", name: "Home", icon: Wrench },
];
