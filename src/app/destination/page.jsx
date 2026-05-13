import DestinationCard from "@/componetns/DestinationCard";
import React from "react";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:8000/destination");
  const destinations = await res.json();
  return (
    <div className="w-9/12 mx-auto py-6 space-y-6">
      <h1 className="text-xl font-bold">Choose Your destination....</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
