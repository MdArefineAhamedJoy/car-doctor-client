import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const navigate = useNavigate();
  const url = `https://car-doctor-server-mdarefineahamedjoy.vercel.app/bookings?email=${user?.email}`;
  console.log(url)
  useEffect(() => {
    fetch(url,{
      method:"GET",
      headers:{
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`
      },
      body:JSON.stringify()
    })
    .then(res => res.json())
    .then(data => {
        if(!data.error){
            setBooking(data)
        }
        else{
            // logout and then navigate
            navigate('/');
        }
    })
  }, [url ,  navigate]);

  const handelDelete = (id) => {
    fetch(`https://car-doctor-server-mdarefineahamedjoy.vercel.app/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const find = booking.filter((book) => book._id !== id);
          setBooking(find);
        }
      });
  };
  const handelUpdate = (id) => {
    fetch(`https://car-doctor-server-mdarefineahamedjoy.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application /json",
      },
      body: JSON.stringify({ status:" confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = booking.filter(book => book._id !== id)
          const updatedBooking = booking.find(book => book._id === id)
          updatedBooking.status = 'confirm'
          const newBookings =[updatedBooking, ...remaining]
          setBooking(newBookings)
        }
      });
  };
  return (
    <div>
      <h2 className="text-5xl">Your Booking : {booking.length}</h2>
      <div className=" w-full">
        <table className="table w-full">
          <tbody>
            {booking.map((book) => (
              <BookingRow
                key={book._id}
                handelDelete={handelDelete}
                handelUpdate={handelUpdate}
                book={book}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
