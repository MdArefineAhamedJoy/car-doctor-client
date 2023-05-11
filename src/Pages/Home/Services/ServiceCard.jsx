import React from "react";

const ServiceCard = ({service}) => {
    const {price,title , img} = service
    console.log(service)
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
          <button className="">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
