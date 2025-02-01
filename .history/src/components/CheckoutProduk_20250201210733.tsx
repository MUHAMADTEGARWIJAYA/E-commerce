// import { useState } from "react";

// const CheckoutProduk = () => {
//   const [cart, setCart] = useState([
//     {
//       id: 1,
//       name: "CITY BANNERS TEE",
//       description: "Short sleeve t-shirt - Graphic Art",
//       color: "White",
      
//       quantity: 1,
//       price: 40.0,
//       image: "/public/3.png",
//     },
//   ]);

//   return (
//     <div className="max-w-6xl  min-h-screen border-2 mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4 mt-10">SHOPPING BAG</h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Left Side - Items */}
//         <div className="md:col-span-2">
//           {cart.map((item) => (
//             <div key={item.id} className="flex border-b pb-4 mb-4">
//               <img src={item.image} alt={item.name} className="w-70 h-70 object-cover" />
//               <div className="ml-4 flex-1 space-y-9">
//                 <h3 className="text-lg font-semibold">{item.name}</h3>
//                 <p className="text-sm text-gray-500">{item.description}</p>
//                 <p className="text-sm mt-1">
//                   <span className="font-semibold">Color:</span> {item.color}
//                 </p>
//                 <p className="text-sm">
//                   <span className="font-semibold">Qty:</span> {item.quantity}
//                 </p>
//                 <p className="text-lg font-bold mt-2">${item.price.toFixed(2)}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Side - Summary */}
//         <div className=" p-4 rounded-lg space-y-12 ">
//           <h3 className="text-lg font-bold mb-4">SUMMARY</h3>
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
//           </div>
//           <div className="w-full h-px bg-gray-600 my-4"></div>
//           <div className="flex justify-between mt-2">
//             <span>Shipping</span>
//             <span>Calculated at next step</span>
//           </div>
//           <div className="flex justify-between mt-4 text-lg font-bold">
//             <span>Total</span>
//             <span>${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
//           </div>
//           <div className="w-full h-px bg-gray-600 my-4"></div>
//           <button className="mt-6 w-full bg-green-400 text-white py-2 rounded-lg hover:bg-green-600">
//             CHECKOUT
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutProduk;
