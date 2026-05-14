import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaLocationDot } from "react-icons/fa6";

const DestinationMarque = async () => {
  const res = await fetch("http://localhost:8000/destination");

  const destinations = await res.json();
  console.log(destinations);

  return (
    <section className="py-16 bg-[#f8fafc]">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-cyan-500 font-semibold tracking-widest uppercase">
          Explore The World
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
          Trending Destinations
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover breathtaking places around the world and make unforgettable
          memories with Wonderlust.
        </p>
      </div>

      {/* Marquee */}
      <Marquee
        pauseOnClick={true}
        speed={70}
        gradient={false}
      >
      {destinations.map((destination) => (
  <Link
    href={`/destination/${destination._id}`}
    key={destination._id}
    className="relative mx-4 rounded-3xl overflow-hidden group shadow-xl block"
  >
    {/* Image */}
    <Image
      src={destination.imageUrl}
      width={350}
      height={450}
      alt={destination.destinationName}
      className="w-[320px] h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {/* Overlay */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 p-6 text-white z-10">
      <div className="flex items-center gap-2 text-sm mb-2">
        <FaLocationDot className="text-cyan-400 text-xl" />

        <span className="text-lg">{destination.country}</span>
      </div>
      <p className="text-sm text-gray-200 mt-2">
        Starting from $ {destination.price || 5000}
      </p>
    </div>
  </Link>
))}
      </Marquee>
    </section>
  );
};

export default DestinationMarque;