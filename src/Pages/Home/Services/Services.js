import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [search, setSearch] = useState('');
  const searchRef = useRef();


// https://genius-car-server-pied.vercel.app
  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState(true)
  useEffect(() => {
    fetch(`http://localhost:5000/services?search=${search}&order=${ isAsc ? 'asc' : 'desc'}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isAsc, search]);


  const handleSearch = () =>{
    setSearch(searchRef.current.value);
    console.log(searchRef.current.value);
  }



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
            <input type="text" ref={searchRef} placeholder="search" className="input input-bordered input-accent input-sm mr-1" />
            <button onClick={handleSearch} className="btn btn-sm" >Search</button>
            <button className="btn btn-sm btn-outline ml-4 " onClick={()=>setIsAsc(!isAsc)} >{isAsc ? 'desc' : 'asc'}</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center my-10">
        <button className="btn btn-outline text-[#FF3811] border-[#FF3811]">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
