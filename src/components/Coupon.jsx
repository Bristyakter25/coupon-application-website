

const Coupon = ({ coupon }) => {
    const { brand_name, description, brand_logo, coupons } = coupon;

    
    const { coupon_code, expiry_date, condition,discount } = coupons[0];

    return (
        <div className="border rounded-lg shadow-lg p-4 w-72 bg-white mb-10">
            {/* Background Image */}
            <div
                className="relative w-full h-40 bg-cover bg-center rounded-md overflow-hidden"
                style={{ backgroundImage: `url(${brand_logo})` }}
            >
                {/* Coupon Code Overlay */}
                <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-2xl text-black p-2 rounded-lg shadow-md">
                    <p className="text-[20px] text-red-500 font-semibold">{discount}</p>
                </div>
            </div>

            {/* Coupon Details */}
            <div className="mt-4 text-center">
                <h2 className="text-lg font-bold mb-2">{brand_name}</h2>
                <p className="text-sm text-gray-600 mb-2">{description}</p>
                <p>{coupon_code}</p>
              
                <p className="text-xs text-gray-500 mb-1">
                    <strong>Expires: </strong>{expiry_date}
                </p>
                <p className="text-xs text-gray-500">
                    <strong>Condition: </strong>{condition}
                </p>
            </div>
        </div>
    );
};

export default Coupon;
