"use client";

import { authClient } from "@/lib/auth-client";
import { DateField, Label } from "@heroui/react";
import React, { useState } from "react";

const BookingCard = ({ destination }) => {
    const [departureDate, setdepartureDate] = useState(null);
      const {data: session,} = authClient.useSession()
       const user = session?.user 
       console.log("departureDate",new Date(departureDate));
       console.log('user in book card',user);
  const {
    destinationName,
    country,
    category,
    price,
    duration,
    imageUrl,
    description,
  } = destination;

  const handleBooking = () => {
    const bookingData = {
          userId:user.id,
          userName:user.name,
          userImage:user.image,
          destinationName,
          country,
          category,
          price,
          departureDate: new Date(departureDate)
    }
  }


  return (
    <div className="lg:col-span-3 space-y-6">

      {/* PRICE CARD */}
      <div className="sticky top-10 bg-white border border-gray-200 rounded-3xl p-6 shadow-md">

        <p className="text-gray-500 text-sm mb-2">
          Starting From
        </p>

        <h1 className="text-3xl font-bold text-orange-500 mb-6">
          ${price}
        </h1>

        {/* Date Field */}
        <div className="mb-5">
           <DateField onChange={setdepartureDate} value={departureDate} className="w-[256px]" name="date">
        <Label>Birth date</Label>
        <DateField.Group>
          <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
        </DateField.Group>
      </DateField>
        </div>

        {/* Info */}
        <div className="space-y-4 border-y border-gray-200 py-5">

          <div className="flex justify-between items-center">
            <span className="text-gray-500">Duration</span>
            <span className="font-semibold">{duration}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-500">Category</span>
            <span className="font-semibold">{category}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-500">Departure</span>
            <span className="font-semibold">{departureDate}</span>
          </div>

        </div>

        {/* Button */}
        <button onClick={handleBooking} className="w-full bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white py-2 font-semibold mt-6 rounded-md">
          Book Now
        </button>

      </div>
    </div>
  );
};

export default BookingCard;