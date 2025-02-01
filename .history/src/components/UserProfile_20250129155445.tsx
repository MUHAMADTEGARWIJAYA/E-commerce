import { useState } from "react";
import { Pencil } from "lucide-react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Sara",
    fullName: "Tancredi",
    email: "SaraTancredi@gmail.com",
    phone: "(+98) 9123728167",
    location: "New York, USA",
    postalCode: "23728167",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <div className="relative w-24 h-24">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="absolute bottom-0 right-0 bg-orange-500 text-white p-1 rounded-full"
          >
            <Pencil size={16} />
          </button>
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold">{user.name} {user.fullName}</h2>
          <p className="text-gray-500">{user.location}</p>
        </div>
      </div>

      {/* Profile Form */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(user).map(([key, value]) => (
          <div key={key}>
            <label className="block text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type="text"
              name={key}
              value={value}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
            />
          </div>
        ))}
      </div>

      {/* Edit Button */}
      {isEditing && (
        <button
          onClick={() => setIsEditing(false)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Save Profile
        </button>
      )}
    </div>
  );
};

export default UserProfile;
