import { useEffect, useState } from "react";

const CouponDetails = () => {
  const [couponsData, setCouponsData] = useState([]); // State for storing JSON data
  const [showCoupons, setShowCoupons] = useState(false); // State for toggling coupon visibility

  // Fetch JSON data
  useEffect(() => {
    fetch('./couponsData.json') // Ensure this path is correct
      .then((res) => res.json())
      .then((data) => setCouponsData(data))
      .catch((error) => console.error("Error loading JSON data:", error));
  }, []);

  // Handle Button Click to toggle coupons
  const toggleCoupons = () => {
    setShowCoupons((prev) => !prev);
  };

  return (
    <div className="p-5">
      {couponsData.map(({ _id, brand_name, rating, description, brand_logo, coupons }, _id) => (
        <div key={_id} className="mb-5 border p-4 rounded">
          <div className="flex items-center gap-4">
            <img
              src={brand_logo}
              alt={brand_name}
              className="w-16 h-16 rounded"
            />
            <div>
              <h2 className="text-xl font-bold">{brand_name}</h2>
              <p className="text-gray-500">{description}</p>
              <p className="text-sm text-yellow-500">Rating: {rating}</p>
            </div>
          </div>
          <button
            onClick={toggleCoupons}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            {showCoupons ? "Hide Coupons" : "View Coupons"}
          </button>
          {showCoupons && (
            <div className="mt-4 p-4 border rounded bg-gray-50">
              <h3 className="text-lg font-bold">Coupons</h3>
              {coupons.map(({ coupon_code, discount, expiry_date, condition }, i) => (
                <div key={i} className="mt-2 p-2 border rounded">
                  <p>
                    <span className="font-semibold">Code:</span> {coupon_code}
                  </p>
                  <p>
                    <span className="font-semibold">Discount:</span> {discount}
                  </p>
                  <p>
                    <span className="font-semibold">Expiry:</span> {expiry_date}
                  </p>
                  <p>
                    <span className="font-semibold">Condition:</span> {condition}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CouponDetails;
