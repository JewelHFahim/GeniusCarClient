import React from "react";
import { useContext } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";
import CheckOutHeader from "./CheckOutHeader/CheckOutHeader";

const Checkout = () => {
  const service = useLoaderData();

  const { user } = useContext(UserContext);
  const { _id, title, img, price, description } = service;

  const handleCheckout = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregister";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    // if(phone < 10){
    //     alert('Phone Number atleast 11 digit');
    // }
    // else{

    // }

    fetch("https://genius-car-server-pied.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged > 0) {
          alert("Order Placed Successfully");
          form.reset();
        }
        <Navigate to="/orders"></Navigate>;
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="">
      <CheckOutHeader></CheckOutHeader>
      <form onSubmit={handleCheckout} className="my-24">
        <div className="w-3/4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              className="input input-bordered defaultValue={user?.firstName}"
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="input input-bordered defaultValue={user?.lastName}"
            />
            <input
              name="phone"
              type="number"
              placeholder="Your Number"
              className="input input-bordered required:"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <textarea
            name="message"
            className="textarea textarea-success w-full h-28 mt-5"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="btn w-full mt-5 bg-[#FF3811] border-0"
          >
            Order Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
