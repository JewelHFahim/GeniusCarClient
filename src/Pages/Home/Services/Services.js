import React, { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="hero mt-10 mb-4">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <p className="font-bold text-lg text-[#FF3811]"> Services </p>
            <h1 className="text-3xl font-bold pt-3">Our Service Area</h1>
            <p className="py-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
      </div>
      <div className="text-center my-10">
      <button className="btn btn-outline text-[#FF3811] border-[#FF3811]">More Services</button>
      </div>
    </div>
  );
};

export default Services;
