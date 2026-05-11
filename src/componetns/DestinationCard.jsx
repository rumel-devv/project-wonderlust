import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import {
  FaLocationDot,
  FaCalendarDays,
  FaClock,
} from "react-icons/fa6";

const DestinationCard = ({ destination }) => {
  const {
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
   _id
  } = destination;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={destinationName}
          width={500}
          height={500}
          className="w-full h-[230px]  object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-sm font-semibold text-gray-800 shadow">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-2 space-y-2.5">
        
        {/* Country */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaLocationDot className="text-orange-500" />
          <span>{country}</span>
        </div>

        {/* Name + Price */}
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 leading-tight">
            {destinationName}
          </h2>

          <div className="bg-orange-50 px-4 py-2 rounded-2xl text-right">
            <h3 className="text-md font-bold text-orange-500">
              ${price}
            </h3>
          </div>
        </div>
        {/* Tour Info */}
        <div className="flex items-center justify-between border-t pt-4 text-sm text-gray-600">
          
          <div className="flex items-center gap-2">
            <FaClock className="text-orange-500" />
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaCalendarDays className="text-orange-500" />
            <span>{departureDate}</span>
          </div>
        </div>

        {/* Button */}
      <Link href={`/destination/${_id}`}>
        <button className="w-full mt-2 bg-black hover:bg-orange-500 transition-all duration-300 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2">
          Book Now
          <FaExternalLinkSquareAlt/>
        </button>
      </Link>
      </div>
    </div>
  );
};

export default DestinationCard;