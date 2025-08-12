import React from "react";
import { products } from "../data/products";

export default function Cart({ items, onRemove }:{ items:string[], onRemove:(id:string)=>void }){
  const itemsDetailed = items.map(id => products.find(p=>p.id===id)!);
  const total = itemsDetailed.reduce((s,p)=>s + (p?.price||0), 0);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h4 className="font-semibold">Cart</h4>
      {itemsDetailed.length===0 && <div className="text-sm text-gray-500">Cart empty</div>}
      <ul className="mt-2 space-y-2">
        {itemsDetailed.map((p, idx) =>
          <li key={idx} className="flex justify-between items-center">
            <div>
              <div className="font-medium">{p.title}</div>
              <div className="text-xs text-gray-500">R {p.price}</div>
            </div>
            <div>
              <button onClick={()=>onRemove(p.id)} className="text-red-500 text-sm">Remove</button>
            </div>
          </li>
        )}
      </ul>
      <div className="mt-4 font-bold">Total: R {total}</div>
      <button className="mt-3 bg-green-600 text-white py-2 px-3 rounded w-full">Checkout (demo)</button>
    </div>
  );
}
