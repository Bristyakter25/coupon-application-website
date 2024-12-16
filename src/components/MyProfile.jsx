import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const MyProfile = () => {
  const { user } = useContext(AuthContext);


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
        <h1 className="text-4xl font-bold">Welcome to My Profile</h1>
        <p className="text-lg mt-2">My personal information and settings</p>
      </div>


      <div className="flex justify-center mt-10">
        <div className="bg-base-100 shadow-lg rounded-lg w-96 p-6">
          <div className="flex flex-col items-center">
            {/* User Photo */}
            <img
              src={photoURL}
              alt="User Profile"
              className="w-32 h-32 rounded-full shadow-md"
            />

         
            <h2 className="mt-4 text-3xl font-bold">{displayName }</h2>
            <p className="text-gray-600 text-xl font-semibold">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
