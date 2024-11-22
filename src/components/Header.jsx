
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-gray-300" >
            <div className='flex justify-between md:max-w-6xl mx-auto'>
            <h2 className='font-semibold  text-2xl py-5'>Welcome to Discount PRO , Save more with our deals!</h2>
            <div className='flex my-2 py-2 space-x-2'>
            <Link className=' rounded-lg btn btn-neutral ' to='/auth/login'>Login</Link>
            <Link  className=' rounded-lg btn btn-neutral ' to='/auth/register'>Register</Link>
            </div>
            </div>
            
            
        </div>
    );
};

export default Header;