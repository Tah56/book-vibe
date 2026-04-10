import React from "react";
import bookImg from "../../assets/hero_img.jpg"
import { Link } from "react-router";
const HeroBar = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
        src={bookImg}
          className=" rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-6xl font-bold mb-10">Books to freshen up your bookshelf</h1>
          <Link to={"/listed"}>
          
          <button className="btn bg-[#23BE0A] text-white">View The List</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBar;
