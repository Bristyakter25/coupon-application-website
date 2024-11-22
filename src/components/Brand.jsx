import { useEffect, useState } from "react";



const Brand = () => {
    const [brands, setBrands] = useState([]);



    useEffect(() => {
        fetch('./couponsData.json')
            .then(res => res.json())
            .then(data => setBrands(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    
    return (
        <div>
    <h2 className="text-3xl font-bold text-blue-400 text-center my-5">Get Information About the Brands!!!</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {brands.map(({  description,brand_name,brand_logo,coupons},_id ) => (
                    <div key={brands._id} className="p-5 border rounded shadow">
                        <img className="w-full h-[200px] rounded-lg" src={brand_logo} alt="" />

                        <h3 className="text-2xl font-semibold my-3 text-blue-600 text-center">
                            {brand_name}
                        </h3>
                        <p className="text-center text-gray-600 my-2 text-xl font-semibold">{description}</p>
                        <div className="rating">
                        <div className="rating">
                        <div className="rating">
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                       
                        </div>
                       
                    </div>
                </div>
            </div>
                ))}
            </div>

            
        </div>
    );
};

export default Brand;