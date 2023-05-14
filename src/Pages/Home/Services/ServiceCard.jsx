import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id,price,title , img} = service
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl h-52"
        />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{title}</h2>  
        <div className="flex justify-between w-full items-center">
        <p>Price : ${price}</p>
         <Link to={`book/${_id}`}>
         <button className="">Book Now</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
