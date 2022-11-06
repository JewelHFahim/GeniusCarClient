import React from "react";
import './BannerItem.css'

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="img-gradient">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-8 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Affordable
          <br /> Price For Car <br /> Servising
        </h1>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-8 w-3/5 top-1/2 ">
        <p className="text-xl text-white">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo soluta
          repellat facilis! Laborum tempora error cum maxime dolores possimus
          officiis.
        </p>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-8 top-3/4">
        <button className="btn bg-[#FF3811] mr-5">Discover More</button>
        <button className="btn btn-outline border border-[#FF3811] text-[#FF3811] hover:border-base-200">Latest Project</button>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0 ">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle hover:bg-[#FF3811] mr-5"
        >
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle hover:bg-[#FF3811]">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
