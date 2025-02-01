import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {/* Logo & Deskripsi */}
          <div>
            <h2 className="text-2xl font-bold text-green-500">MyStore</h2>
            <p className="text-gray-400 mt-2">
              Temukan produk terbaik dengan harga terjangkau hanya di MyStore!
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-lg font-semibold text-green-400">Navigasi</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-green-400">Beranda</a>
              </li>
              <li>
                <a href="/shop" className="hover:text-green-400">Produk</a>
              </li>
              <li>
                <a href="/about" className="hover:text-green-400">Tentang Kami</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-400">Kontak</a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold text-green-400">Kontak</h3>
            <p className="text-gray-400 mt-2">Email: support@mystore.com</p>
            <p className="text-gray-400">Telepon: +62 812-3456-7890</p>
          </div>

          {/* Media Sosial */}
          <div>
            <h3 className="text-lg font-semibold text-green-400">Ikuti Kami</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-green-400">
                <Facebook />
              </a>
              <a href="#" className="hover:text-green-400">
                <Twitter />
              </a>
              <a href="#" className="hover:text-green-400">
                <Instagram />
              </a>
              <a href="mailto:support@mystore.com" className="hover:text-green-400">
                <Mail />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 mt-6 pt-4 text-gray-400">
          © {new Date().getFullYear()} MyStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
