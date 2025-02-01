import { useState } from "react";
import { Bell, Heart, Star, User, Settings, Menu } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("User info");

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isOpen && !(e.target as Element).closest(".sidebar")) {
      setIsOpen(false);
    }
  };

  return (
    <div className="flex" onClick={handleOutsideClick}>
      {/* Toggle Button */}
      <button 
        className="p-2 m-2 md:hidden" 
        onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-5 transition-transform md:relative md:translate-x-0 sidebar ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-6">User Profile</h2>
        <ul className="space-y-4">
          <li 
            className={`flex items-center gap-3 cursor-pointer hover:text-black p-2 rounded ${activeItem === "User info" ? "bg-gray-200 text-black" : "text-gray-700"}`} 
            onClick={() => setActiveItem("User info")}
          >
            <User size={20} /> User info
          </li>
          <li 
            className={`flex items-center gap-3 cursor-pointer hover:text-black p-2 rounded ${activeItem === "Favorites" ? "bg-gray-200 text-black" : "text-gray-500"}`} 
            onClick={() => setActiveItem("Favorites")}
          >
            <Heart size={20} /> Favorites
          </li>
          <li 
            className={`flex items-center gap-3 cursor-pointer hover:text-black p-2 rounded ${activeItem === "Watchlist" ? "bg-gray-200 text-black" : "text-gray-500"}`} 
            onClick={() => setActiveItem("Watchlist")}
          >
            <Star size={20} /> Watchlist
          </li>
          <li 
            className={`flex items-center gap-3 cursor-pointer hover:text-black p-2 rounded ${activeItem === "Setting" ? "bg-gray-200 text-black" : "text-gray-500"}`} 
            onClick={() => setActiveItem("Setting")}
          >
            <Settings size={20} /> Setting
          </li>
          <li 
            className={`flex items-center gap-3 cursor-pointer hover:text-black p-2 rounded relative ${activeItem === "Notifications" ? "bg-gray-200 text-black" : "text-gray-500"}`} 
            onClick={() => setActiveItem("Notifications")}
          >
            <Bell size={20} /> Notifications
            <span className="absolute right-0 top-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;