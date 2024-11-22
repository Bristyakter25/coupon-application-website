import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

  const {createNewUser,setUser} = useContext(AuthContext);

 const  handleSubmit =(e) => {
  e.preventDefault();

    const form = new FormData(e.target)
    const name = form.get("name");
    const photo = form.get("photo")
    const email = form.get("email")
    const password = form.get("password")
    console.log({name,photo,email,password});

  createNewUser(email,password)
  .then((result) => {
  const user = result.user;
  setUser(user);
  console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });
   
  
 }
    return (
        <div className=" flex justify-center items-center ">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
            <h2 className="p-10 font-semibold text-2xl text-center">Register your account</h2>
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
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
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
          <button className="btn btn-neutral rounded-[5px]">Register</button>
        </div>
        </form>
        <p className="text-center font-semibold">Already Have An Account ? <Link to="/auth/login" className="text-red-500">Login</Link></p>

      </div>
      </div>
    );
};

export default Register;