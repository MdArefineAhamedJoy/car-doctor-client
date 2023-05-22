import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const search = useRef()
  const [services, setServices] = useState([]);
  const [sec , setSec] = useState('')
  const [asc, setASc] = useState(true);
  useEffect(() => {
    fetch(`https://car-doctor-server-mdarefineahamedjoy.vercel.app/services?search=${sec}&short=${asc ? 'asc' : 'dsc'}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc,sec]);
 
  const handelSearch = ()=>{
    console.log(search.current.value)
    setSec(search.current.value)
  }

  return (
    <div className="mt-28">
      <div className="text-center">
        <p className="text-[#FF3811] font-bold">Service</p>
        <h2 className="text-5xl font-bold pb-5">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
        <div className="form-control">
          <div className="input-group">
            <input
              ref={search}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handelSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => setASc(!asc)}>
          {asc ? "Price : Low To High" : "Price : High To Low "}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-6">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline btn-error mt-12 mb-36">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
