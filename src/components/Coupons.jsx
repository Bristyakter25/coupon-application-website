import { useEffect, useState } from "react";
import Coupon from "./Coupon";
import TopBrands from "./TopBrands"; // Import TopBrands
import { NavLink } from "react-router-dom";

const Coupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Coupons");

  useEffect(() => {
    fetch("./couponsData.json")
      .then((res) => res.json())
      .then((data) => {
        
        const saleCoupons = data.filter((coupon) => coupon.isSaleOn);
        setCoupons(saleCoupons);
      });
  }, []);

  const filteredCoupons =
    selectedCategory === "All Coupons"
      ? coupons
      : coupons.filter((coupon) => coupon.category === selectedCategory);

  return (
    <div>
      <NavLink to="/brand">
        <TopBrands coupons={filteredCoupons} />
      </NavLink>

      <h2 className="my-5 text-center text-4xl font-bold text-teal-700">
        Brands on Sale
      </h2>

      <div className="lg:flex gap-14 my-5 mx-auto">
        <div className="bg-[#FFFFFF] p-5 w-[200px] mx-auto h-[450px] border border-[#09080F1A]">
          <ul
            onClick={() => setSelectedCategory("All Coupons")}
            className={`cursor-pointer bg-[#09080F0D] rounded-3xl mt-4 mb-6 text-center w-[150px] p-2 ${
              selectedCategory === "All Coupons"
                ? "bg-[#9538E2] text-white"
                : ""
            }`}
          >
            All Coupons
          </ul>
         
          <ul
            onClick={() => setSelectedCategory("Fashion")}
            className={`cursor-pointer bg-[#09080F0D] rounded-3xl mb-6 text-center w-[150px] p-2 ${
              selectedCategory === "Fashion" ? "bg-[#9538E2] text-white" : ""
            }`}
          >
            Fashion
          </ul>
          <ul
            onClick={() => setSelectedCategory("Electronics")}
            className={`cursor-pointer bg-[#09080F0D] rounded-3xl mb-6 text-center w-[150px] p-2 ${
              selectedCategory === "Electronics"
                ? "bg-[#9538E2] text-white"
                : ""
            }`}
          >
            Electronics
          </ul>
          <ul
            onClick={() => setSelectedCategory("Kids")}
            className={`cursor-pointer bg-[#09080F0D] rounded-3xl mb-6 text-center w-[150px] p-2 ${
              selectedCategory === "Kids" ? "bg-[#9538E2] text-white" : ""
            }`}
          >
            Kids
          </ul>
          <ul
            onClick={() => setSelectedCategory("Beauty")}
            className={`cursor-pointer bg-[#09080F0D] rounded-3xl mb-6 text-center w-[150px] p-2 ${
              selectedCategory === "Beauty" ? "bg-[#9538E2] text-white" : ""
            }`}
          >
            Beauty
          </ul>
          <ul
            onClick={() => setSelectedCategory("Groceries")}
            className={`cursor-pointer bg-[#09080F0D] rounded-3xl mb-6 text-center w-[150px] p-2 ${
              selectedCategory === "Groceries" ? "bg-[#9538E2] text-white" : ""
            }`}
          >
            Groceries
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">
          {filteredCoupons.length > 0 ? (
            filteredCoupons.map((coupon) => (
              <Coupon coupon={coupon} key={coupon._id} />
            ))
          ) : (
            <p>No Coupons Available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coupons;
