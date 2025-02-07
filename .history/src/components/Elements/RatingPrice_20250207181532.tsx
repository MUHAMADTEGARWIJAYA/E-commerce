import React from "react";

interface RatingPriceProps {
    rating: number;
    price: number;
}
const RatingPrice: React.FC <RatingPriceProps> = ({rating, price}) => {
    return (
        < >
        <div className="bg-amber-100">
        <div className="flex items-center mt-2">
          <span className="text-green-500 text-2xl">
            {"★".repeat(rating)}
          </span>
          <span className="ml-2 text-gray-600">({rating})</span>
        </div>
        
        <div className="w-full h-px bg-gray-600 my-4"></div>
        <p className="text-xl font-bold ">${price.toFixed(2)}</p>
        </div>
        </>
    )
}

export default RatingPrice