import React from "react";
import Bookings from "./Bookings";

const BookingRow = ({ book ,handelDelete,handelUpdate}) => {
  const { date, email, image, price, service, serviceName , _id ,status} = book;

  return (
    <tr>
      <th>
        <label>
          <button onClick={()=>handelDelete(_id)} className="btn btn-sm btn-circle btn-outline">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-6">
          <div className="avatar">
            <div className="mask rounded-md w-36 h-28">
              <img src={image} alt={service} />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">{service}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>${price}</td>
      <td>{date}</td>
      <th>
       {
      ( status === "confirm") ? <span className="text-2xl text-green-500 font-bold">Confirmed</span>:
        <button onClick={()=>handelUpdate(_id)} className="btn btn-ghost btn-sm  bg-[#FF3811]">Place Confirm</button>}

      </th>
    </tr>
  );
};

export default BookingRow;
