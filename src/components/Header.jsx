import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const Header = () => {
const {user} = useContext(AuthContext);
    return (
        <div className="bg-gray-300 w-full" >
            <div className='p-4'>
            {user ? (
          <h1 className="text-xl text-center font-semibold">
            Welcome, {user.displayName}!
          </h1>
        ) : (
          <h1 className="text-xl font-semibold text-center">Welcome to Discount PRO!</h1>
        )}
            </div>
            
            
        </div>
    );
};

export default Header;