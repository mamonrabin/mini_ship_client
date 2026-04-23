"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center gap-8">
      <p className="font-medium">Quantity :</p>

      <div className="flex items-center">
        {/* Minus Button */}
        <button
          onClick={handleDecrease}
          disabled={quantity === 1}
          className={`border p-2 ${
            quantity === 1
              ? "opacity-100 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          <Minus size={18} />
        </button>

        {/* Quantity Display */}
        <p className="border px-4 py-2">{quantity}</p>

        {/* Plus Button */}
        <button
          onClick={handleIncrease}
          className="border p-2 cursor-pointer"
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
