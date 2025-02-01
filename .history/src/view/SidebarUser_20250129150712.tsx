import { useState } from "react";
import { Bell, Heart, Star, User, Settings, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Toggle Button */}
      <button 
        className="p-2 m-2 md:hidden" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-5 transition-transform md:relative md:translate-x-0", 
          { "-translate-x-full": !isOpen }
        )}
      >
        <h2 className="text-xl font-semibold mb-6">User Profile</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-gray-700 cursor-pointer hover:text-black">
            <User size={20} /> User info
          </li>
          <li className="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black">
            <Heart size={20} /> Favorites
          </li>
          <li className="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black">
            <Star size={20} /> Watchlist
          </li>
          <li className="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black">
            <Settings size={20} /> Setting
          </li>
          <li className="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black relative">
            <Bell size={20} /> Notifications
            <span className="absolute right-0 top-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
