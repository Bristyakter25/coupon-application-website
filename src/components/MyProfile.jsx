import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const MyProfile = () => {
  const { user } = useContext(AuthContext);

  // Check if user is not logged in
  if (!user) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-red-600">Access Denied</h2>
        <p>Please log in to access your profile.</p>
      </div>
    );
  }

  const { displayName, email, photoURL } = user;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cover Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Welcome to Your Profile</h1>
        <p className="text-lg mt-2">Your personal information and settings</p>
      </div>

      {/* User Card */}
      <div className="flex justify-center mt-10">
        <div className="bg-white shadow-lg rounded-lg w-96 p-6">
          <div className="flex flex-col items-center">
            {/* User Photo */}
            <img
              src={photoURL}
              alt="User Profile"
              className="w-32 h-32 rounded-full shadow-md"
            />

            {/* User Information */}
            <h2 className="mt-4 text-2xl font-semibold">{displayName || "User Name"}</h2>
            <p className="text-gray-600">{email || "No Email Available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
