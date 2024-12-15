import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";


const Login = () => {
const {userLogin,setUser} = useContext(AuthContext);
const navigate = useNavigate();
const [error, setError] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError();
    
    console.log({name,email,password});
    userLogin(email,password)
    .then(result=>{
      const user =result.user;
      setUser(user);
      navigate("/"); 
    })
    .catch((error)=>{
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
       
      });
    })

  }

    return (
       <div className=" flex justify-center items-center ">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
            <h2 className="p-10 font-semibold text-2xl text-center">Login Your Account</h2>
            <p className="border-y-2 w-[396px] mx-auto"></p>
        <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Your Name</span>
            </label>
            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
          </div>
          
          <div className="form-control">
              <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />
            
          </div>
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-[5px]">Login</button>
        </div>
        </form>
        <p className="text-center font-semibold">Dont’t Have An Account ? <Link to="/auth/register" className="text-red-500">Register</Link></p>
        <SocialLogin></SocialLogin>

      </div>
      </div>

    );
};

export default Login;