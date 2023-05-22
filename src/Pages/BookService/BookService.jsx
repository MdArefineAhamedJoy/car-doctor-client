import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';



const BookService = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData();
    const {title,price,_id,img} = service ;
    console.log()
    const handelBooking = event =>{
        console.log('handel is click')
        event.preventDefault()
        const form = event.target ;
        const name = form.name.value
        const email = form.email.value
        const date = form.date.value

        const booking = {
            serviceName : name,
            email,
            date,
            image:img,
            service:title,
            price: price ,
            service_id: _id
        }
        console.log(booking)
        fetch(`https://car-doctor-server-mdarefineahamedjoy.vercel.app/bookings`,{
            method:'POST',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                Swal.fire({
                    title: 'success',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Thanks '
                  })
            }
        })
    }
   
    return (
        <div>
        <h1>{service.title}</h1>
        <form onSubmit={handelBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder="First Name"
                name='name'
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name='date'
                placeholder="Date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                defaultValue={"$"+price}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                name='email'
                defaultValue={user?.email}
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    );
};

export default BookService;