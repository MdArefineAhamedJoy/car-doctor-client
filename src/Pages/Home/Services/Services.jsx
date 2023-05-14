import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services , setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-28'>
            <div className='text-center'>
                <p className='text-[#FF3811] font-bold'>Service</p>
                <h2 className='text-5xl font-bold pb-5'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-12 gap-6'>
                {
                    services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard> )
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline btn-error mt-12 mb-36">More Services</button>
            </div>
        </div>
    );
};

export default Services;