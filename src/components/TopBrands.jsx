import React from 'react';
import Marquee from 'react-fast-marquee';

const TopBrands = ({ coupons }) => {
    return (
        <div >
            <h2 className='text-center font-bold text-teal-700 my-10 text-4xl'>Top Brands</h2>
            <div className='flex gap-2 items-center p-2 bg-base-200'>
            <p className='bg-[#D72050] text-base-100 px-3 py-1'>Top Brands</p>
            <Marquee pauseOnHover={true} className='space-x-10 '>
               
                {coupons.map((coupon) => (
                    <p className='space-x-4 mr-5 text-xl font-semibold' key={coupon._id}>{coupon.brand_name}</p>
                ))}
            </Marquee>
            </div>
        </div>
    );
};

export default TopBrands;
