import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect,} from "react";
import { AuthContext } from "../provider/AuthProvider";
import CopyToClipboard from "react-copy-to-clipboard";
import Swal from "sweetalert2";



const CouponDetails = ({}) => {
  const { id } = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); 
  


  useEffect(() => {
    if (!user) {
      navigate("/auth/login", { state: { from: `/couponDetails/${id}` } });
    }
  }, [user, navigate, id]);

  const handleCopy = () => {
    Swal.fire({
        title: "Good job!",
        text: "You Successfully Copied the Code!",
        icon: "success"
      });
  };


  const coupon = data.find((coupon) => coupon._id === id);

  

 
  const { brand_name, description,brand_logo,shop_link,coupons, } = coupon;
  const {coupon_code,condition,expiry_date,discount} = coupons[0]
 
  return (
    <div>
        <h2 className="text-center font-bold  text-2xl">Coupon Details</h2>
    <div className="card bg-teal-100 lg:w-[500px] w-[400px] shadow-xl my-5 mx-auto p-4">
  <figure>
    <img
      src={brand_logo}
      alt="Brands"  className=" rounded-2xl "/>
  </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-bold">{brand_name}</h2>
    <p className="font-semibold text-xl">{description}</p>
    <p className="font-semibold text-xl">Discount : {discount}</p>
    <p className="font-semibold text-xl">Expiry-Date : {expiry_date}</p>
    <p className="font-semibold text-xl">Condition : {condition}</p>
   
   
   <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>

<div className="my-4">
          <span className="font-mono text-red-400 bg-gray-200 px-4 py-2 rounded-lg text-lg">
            {coupon_code}
          </span>
          <CopyToClipboard text={coupon_code} onCopy={handleCopy}>
            <button className="ml-4 px-4 py-2 bg-sky-500 glass text-white rounded-lg hover:bg-blue-600 transition">
              Copy Code
            </button>
          </CopyToClipboard>
        </div>
  
    <div className="card-actions justify-end">
      <a href={shop_link} className="btn glass bg-sky-300">Use Now!</a>
    </div>
  </div>
</div>
</div>
  );
};

export default CouponDetails;
