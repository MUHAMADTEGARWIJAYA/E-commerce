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
    photo: "https://via.placeholder.com/100"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newPhoto = URL.createObjectURL(e.target.files[0]);
      setUser({ ...user, photo: newPhoto });
    }
  };

  return (
    <div className="w-7xl min-h-screen flex">
    <div className="w-5xl min-h-[300px]  mx-auto p-6  shadow-md rounded-lg">
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <div className="relative w-24 h-24">
          <img
            src={user.photo}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <label
            htmlFor="photo-upload"
            className="absolute bottom-0 right-0 bg-orange-500 text-white p-1 rounded-full cursor-pointer"
          >
            <Pencil size={16} />
          </label>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{user.name} {user.fullName}</h2>
          <p className="text-gray-500">{user.location}</p>
        </div>
      </div>

      {/* Profile Form */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(user).filter(([key]) => key !== "photo").map(([key, value]) => (
          <div key={key}>
            <label className="block text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type="text"
              name={key}
              value={value as string}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
            />
          </div>
        ))}
      </div>

      {/* Edit Button */}
      <button
        onClick={() => setIsEditing(!isEditing)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {isEditing ? "Save Profile" : "Edit Profile"}
      </button>
    </div>
    </div>
  );
};

export default UserProfile;
