import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
const {userLogin,setUser} = useContext(AuthContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({name,email,password});
    userLogin(email,password)
    .then(result=>{
      const user =result.user;
      setUser(user);
    })
    .catch((error)=>{
      alert(error.code);
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-[5px]">Login</button>
        </div>
        </form>
        <p className="text-center font-semibold">Dont’t Have An Account ? <Link to="/auth/register" className="text-red-500">Register</Link></p>

      </div>
      </div>

    );
};

export default Login;