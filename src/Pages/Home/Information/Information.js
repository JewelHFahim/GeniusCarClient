import React from 'react';
import { FaBusinessTime, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";


const Information = () => {

    return (
        <div className="hero bg-black my-14 rounded-xl">
          <div className="hero py-20 flex justify-around">
            <div className='text-left flex items-center'>
            <FaBusinessTime className='text-red-600 text-5xl mr-2'/>
            <div className="text-slate-300">
            <p >We are open monday-friday</p>
            <h1 className="text-2xl font-bold">7:00 am - 9:00 pm</h1>
            </div>
            </div>
            <div className='text-left flex items-center'>
            <FaPhoneAlt className='text-red-600 text-5xl mr-2'/>
            <div className="text-slate-300">
            <p className="">Have a question?</p>
            <h1 className="text-2xl font-bold">01911-209322</h1>
            </div>
            </div>
            <div className='text-left flex items-center'>
            <FaMapMarkedAlt className='text-red-600 text-5xl mr-2'/>
            <div className="text-slate-300">
            <p className="">Need a repair? our address</p>
            <h1 className="text-2xl font-bold">Liza Street, New York</h1>
            </div>
            </div>
          </div>
      </div>
    );
};

export default Information;