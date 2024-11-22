import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className='text-2xl'>Not Found Page!!!</h2>
            <div className="btn text-2xl">
            <NavLink  to='/'>Go to Back.</NavLink>
            </div>
           
        </div>
    );
};

export default ErrorPage;