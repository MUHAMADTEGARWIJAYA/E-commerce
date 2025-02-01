import { useState, useEffect } from "react";
import { Bell, Heart, Star, User, Settings, Menu } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("User info");

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !(e.target as Element).closest(".sidebar") && !(e.target as Element).closest(".menu-button")) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex xl:min-h-screen">
      {/* Toggle Button */}
      <button 
        className="p-2 m-2 md:hidden menu-button" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-5 transition-transform md:relative md:translate-x-0 sidebar ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h2 className="text-xl font-semibold mb-6">User Profile</h2>
        <ul className="space-y-4">
          <li 
            className={`flex items-center gap-3 cursor-pointer hover:text-black p-2 rounded ${activeItem === "User info" ? "bg-green-200 text-red-300" : "text-gray-700"}`} 
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
           
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
