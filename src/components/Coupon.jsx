import { NavLink } from "react-router-dom";

const Coupon = ({ coupon }) => {
    const { _id, brand_name, description, brand_logo, coupons } = coupon;
    const { discount } = coupons[0];

    return (
        <div className="card bg-emerald-100 w-72 shadow-xl mx-auto my-5">
  <figure className="px-5 pt-5">
    <img
      src={brand_logo}
      alt="logo"
      className="rounded-xl w-[200px] h-[150px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl">{brand_name}</h2>
    <p className="font-semibold">{description}</p>
  <h2 className="font-bold text-red-600 text-2xl">{discount}</h2>
    <div className="card-actions">
        
    <NavLink to={`/couponDetails/${_id}`}>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Details</button>
                </NavLink>
    </div>
  </div>
</div>
    );
};

export default Coupon;
