import React from "react";


interface Product {
    
    quantity: number;
    name: string;
}
const ButtonBuy: React.FC<Product> = ( {  quantity, name }) => {

    const handleBuyNow = () => {
        const phoneNumber = "62881082717519"; // Ganti dengan nomor WhatsApp kamu
        const message = `Halo, saya ingin membeli ${name} dengan jumlah ${quantity}.`;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, "_blank");
      };

    return (
          <div className="flex justify-center items-center gap-4 mt-4">
          <button 
            onClick={handleBuyNow}
            className="bg-white text-green-700 font-bold border px-6 py-3 rounded-3xl w-96 hover:bg-green-700 border-green-600 hover:text-white"
          >
            Buy Now
          </button>
         
        </div>
    );
}

export default ButtonBuy