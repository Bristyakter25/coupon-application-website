import pic1 from "../assets/deals and coupons.jpg";
import pic2 from "../assets/best offers.jpg";
import pic3 from "../assets/save money.jpg";

const Cards = () => {
  return (
    <div className="grid grid-cols-3 border-4 gap-2 my-5">
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row ">
          <img
            src={pic1}
            className="w-[150px]  rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold">Deals and Coupons</h1>
            <p className="py-4">
              Unlock incredible savings with our exclusive coupons and deals!
              Whether you're grabbing essentials, our platform connects you with
              the latest offers from top brands. Don’t miss out—shop more, spend
              less!
            </p>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row ">
          <img
            src={pic2}
            className="w-[150px]  rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold">Find Best Offers</h1>
            <p className="py-4">
              Discover incredible deals and discounts on your favorite brands!
              Whether you're shopping for fashion, electronics, beauty, or
              groceries, find the best offers tailored just for you.
            </p>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row ">
          <img
            src={pic3}
            className="w-[150px]  rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold">Save Money</h1>
            <p className="py-4">
              Maximize your savings with unbeatable deals and exclusive coupons.
              Shop smarter and keep more money in your pocket while enjoying the
              best products at the lowest prices. Start saving today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
