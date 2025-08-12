export interface Product {
  id: string;
  title: string;
  price: number;
  colors: string[];
  sizes: string[];
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "p001",
    title: "Essentials Crop Top",
    price: 249,
    colors: ["black","white"],
    sizes: ["S","M","L"],
    description: "Minimalist crop top with stretch fabric.",
    image: "https://via.placeholder.com/400x400?text=Crop+Top"
  },
  {
    id: "p002",
    title: "High‑Waist Leggings",
    price: 399,
    colors: ["black","gray"],
    sizes: ["S","M","L"],
    description: "Supportive leggings perfect for day to night.",
    image: "https://via.placeholder.com/400x400?text=Leggings"
  },
  {
    id: "p003",
    title: "Oversized Denim Jacket",
    price: 699,
    colors: ["blue"],
    sizes: ["M","L","XL"],
    description: "Vintage inspired oversized denim jacket.",
    image: "https://via.placeholder.com/400x400?text=Jacket"
  }
];
