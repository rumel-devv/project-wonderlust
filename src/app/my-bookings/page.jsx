import DelteDialog from "@/componetns/AlertDialog";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
    const token = await auth.api.getToken({
    headers: await headers()
  })
  const user = session.user;
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/bookings/${user?.id}`,{
    headers:{
      authorization:`Bearer ${token?.token}`
    }
  }
  );
  // console.log('my bookings',token);
  const bookings = await res.json();
  // console.log(bookings);
  return (
    <div className="w-9/12 mx-auto my-8">
      <h1 className="text-2xl font-bold text-center my-4">My bookings</h1>
      <div className="space-y-3">
        {bookings.map((booking) => (
         <div
  key={booking._id}
  className="w-full flex items-center justify-between gap-4 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm"
>
  
  {/* Left Side */}
  <div className="flex items-center gap-4">

    {/* Image */}
     <Image
    src={booking?.imageUrl}
    alt={booking?.destinationName}
    width={120}
    height={120}
    className="w-28 h-24 object-cover rounded-xl"
  />

    {/* Info */}
    <div className="space-y-1">

      <h1 className="text-xl font-bold text-gray-800">
        {booking?.destinationName}
      </h1>

      <p className="text-sm text-gray-500">
        {booking?.country}
      </p>

      <div className="flex items-center gap-3 text-sm text-gray-600">
        <span>{booking?.category}</span>
        <span>•</span>
        <span>{booking?.duration}</span>
      </div>

      <p className="text-sky-500 font-semibold">
        ${booking?.price}
      </p>

    </div>
  </div>

  {/* Right Side */}
   <DelteDialog bookingId={booking._id} />
</div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
