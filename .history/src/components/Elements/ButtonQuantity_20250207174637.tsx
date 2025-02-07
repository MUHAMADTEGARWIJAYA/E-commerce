import React from "react";

interface ButtonQuantityProps {
        quantity: number;
        setQuantity: React.Dispatch<React.SetStateAction<number>>;
    }

const ButtonQuantity: React.FC<ButtonQuantityProps> = ({ quantity, setQuantity}) => {
    return (
        <div className="flex bg-gray-100 w-28 rounded-3xl items-center mt-2">
        <button
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity === 1}
          className="px-3 py-2 font-bold text-2xl"
        >
          -
        </button>
        <span className="px-4 text-green-700 font-bold text-xl">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-1 text-green-700 font-bold text-2xl py-2"
        >
          +
        </button>
      </div>
    );
}

export default ButtonQuantity