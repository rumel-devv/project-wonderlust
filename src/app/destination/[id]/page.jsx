import BookingCard from "@/componetns/BookingCard";
import DeleteModal from "@/componetns/DeleteModal";
import EditeModal from "@/componetns/EditeModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import {
  FaArrowLeft,
  FaLocationDot,
  FaCalendarDays,
  FaClock,
  FaTag,
} from "react-icons/fa6";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const token = await auth.api.getToken({
    headers: await headers()
  })

  console.log('Headers',token);

  const res = await fetch(`http://localhost:8000/destination/${id}`, {
    cache: "no-store", headers:{
      authorization:`Bearer ${token.token}`
    }
  });
  const destination = await res.json();
  
  const {
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = destination;
console.log('destination',destinationName);

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto py-10">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-5 md:items-center">
        
        {/* Back Button */}
        <Link
          href="/destination"
          className="flex gap-2 items-center text-gray-600 hover:text-black transition"
        >
          <FaArrowLeft className="text-lg" />
          <h1 className="font-medium">Back to destination</h1>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
         <EditeModal destination={destination} />
         <DeleteModal destination={destination}/>
        </div>
      </div>

      {/* Banner Image */}
      <div className="relative overflow-hidden rounded-3xl mt-8">
        
        <Image
          src={imageUrl}
          alt="destination name"
          width={1400}
          height={800}
          className="w-full h-[500px] object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Destination Info */}
        <div className="absolute bottom-8 left-8 text-white">
          
          <div className="flex items-center gap-2 mb-3">
            <FaLocationDot />
            <span>{country}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            {destinationName}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mt-8">
        
        {/* Left Details */}
        <div className="lg:col-span-7 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          
          <h2 className="text-2xl font-bold mb-6">
            Tour Details
          </h2>

          {/* Details Cards */}
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            
            {/* Country */}
            <div className="flex items-center gap-4 bg-orange-50 p-5 rounded-2xl">
              <FaLocationDot className="text-orange-500 text-2xl" />

              <div>
                <p className="text-sm text-gray-500">
                  Country
                </p>

                <h3 className="font-semibold text-lg">
                  {country}
                </h3>
              </div>
            </div>

            {/* Category */}
            <div className="flex items-center gap-4 bg-orange-50 p-5 rounded-2xl">
              <FaTag className="text-orange-500 text-2xl" />

              <div>
                <p className="text-sm text-gray-500">
                  Category
                </p>

                <h3 className="font-semibold text-lg">
                  {category}
                </h3>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-4 bg-orange-50 p-5 rounded-2xl">
              <FaClock className="text-orange-500 text-2xl" />

              <div>
                <p className="text-sm text-gray-500">
                  Duration
                </p>

                <h3 className="font-semibold text-lg">
                  {duration}
                </h3>
              </div>
            </div>

            {/* Departure */}
            <div className="flex items-center gap-4 bg-orange-50 p-5 rounded-2xl">
              <FaCalendarDays className="text-orange-500 text-2xl" />

              <div>
                <p className="text-sm text-gray-500">
                  Departure Date
                </p>

                <h3 className="font-semibold text-lg">
                  {departureDate}
                </h3>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              About Destination
            </h2>

            <p className="text-gray-600 leading-8 text-[17px]">
              {description}
            </p>
          </div>
        </div>

        {/* Right Booking Card */}
   
         <BookingCard destination={destination} />
      </div>
    </div>
  );
};

export default DestinationDetailsPage;