import React from "react";

export default function Navbar({ count }:{ count:number }){
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <div className="font-bold">FittedByKhomiiee</div>
      <div className="text-sm">Cart: <strong>{count}</strong></div>
    </nav>
  );
}
