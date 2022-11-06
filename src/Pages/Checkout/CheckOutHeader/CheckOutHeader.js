import React from "react";
import './CheckOutHeader.css'
import image from "../../../assets/images/checkout/checkout.png";

const CheckOutHeader = () => {
  return (
      <div className="hero my-10 bg-base-200 relative">
        <div className="checkout-img">
          <img src={image} alt="" className="w-full rounded-xl" />
        </div>
        <div>
        <h1 className="text-white text-5xl font-semibold absolute left-10 top-1/2">Check Out</h1>
        </div>
        <div className="bg-[#FF3811] absolute bottom-0 text-white font-medium px-5 py-2">Home/Check out</div>
      </div>
  );
};

export default CheckOutHeader;
 