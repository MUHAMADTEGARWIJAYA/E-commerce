export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string[];
  rating: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Green Hat, IPX8",
    price: 89.0,
    description: "A perfect balance of high-fidelity audio",
    image: ["/p1.png", "/2.png", "/3.png", "4.png"], // ✅ Perbaikan path
    rating: 5,
  },
  {
    id: 2,
    name: "Hat Warm Max",
    price: 559.0,
    description: "A perfect balance of high-fidelity audio",
    image:  ["/p1.png", "/2.png", "/3.png", "4.png"], // ✅ Perbaikan path
    rating: 5,
  },
  {
    id: 3,
    name: "Bose BT Glasses",
    price: 289.0,
    description: "A perfect balance of high-fidelity audio",
    image:  ["/p1.png", "/2.png", "/3.png", "4.png"], // ✅ Perbaikan path
    rating: 5,
  },
  {
    id: 4,
    name: "VIVEFOX Glasses",
    price: 39.0,
    description: "A perfect balance of high-fidelity audio",
    image:  ["/p1.png", "/2.png", "/3.png", "4.png"], // ✅ Perbaikan path
    rating: 5,
  },
];
