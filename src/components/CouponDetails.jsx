import { useParams } from "react-router-dom";

const CouponDetails = ({ data }) => {
    const { id } = useParams(); // Extract the _id from the URL

    // Find the coupon in your data using the id
    const coupon = data.find((item) => item._id === id);

    if (!coupon) {
        return <p>Coupon not found.</p>;
    }

    const { brand_name, description, brand_logo, coupons } = coupon;
    const { coupon_code, expiry_date, condition, discount } = coupons[0];

    return (
        <div className="container mx-auto mt-10">
            <div className="border rounded-lg shadow-lg p-6 max-w-md mx-auto bg-white">
                <img src={brand_logo} alt={brand_name} className="w-full rounded-lg mb-4" />
                <h1 className="text-2xl font-bold mb-2">{brand_name}</h1>
                <p className="text-sm text-gray-600 mb-2">{description}</p>
                <p className="text-lg text-green-500 font-bold">{discount}</p>
                <p className="text-xs text-gray-500 mb-1">
                    <strong>Expires: </strong>{expiry_date}
                </p>
                <p className="text-xs text-gray-500">
                    <strong>Condition: </strong>{condition}
                </p>
                <p className="text-sm font-semibold mt-4">Coupon Code: {coupon_code}</p>
            </div>
        </div>
    );
};

export default CouponDetails;
