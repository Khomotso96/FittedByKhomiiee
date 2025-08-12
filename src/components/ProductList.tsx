import React from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList({ onAdd }:{ onAdd:(id:string)=>void }){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(p=> <ProductCard key={p.id} p={p} onAdd={onAdd} />)}
    </div>
  );
}
