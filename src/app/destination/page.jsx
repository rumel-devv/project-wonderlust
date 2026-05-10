import DestinationCard from "@/componetns/DestinationCard";
import React from "react";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:8000/destination");
  const destinations = await res.json();
  console.log("destination data", destinations);
  return (
    <div className="w-9/10 mx-auto py-6">
      <h1>All destinations..</h1>

      <div>
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
