import { FC, SVGProps } from "react";

export type ServiceCategory = {
  id: "all" | "food" | "groceries" | "auto" | "home";
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export type ServiceProvider = {
  id: number;
  name: string;
  category: "Food" | "Groceries" | "Auto" | "Home";
  rating: number;
  reviews: number;
  distance: string;
  eta: string;
  tags: string[];
  promo?: string;
};

export type Promotion = {
  id: number;
  title: string;
  description: string;
  provider: string;
  category: "food" | "groceries" | "auto";
};
