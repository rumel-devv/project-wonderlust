"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {

  const handleLogout = async () => {
     await authClient.signOut()
  }
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const {data: session,} = authClient.useSession()
   const user = session?.user 

  const links = [
    { name: "Home", href: "/" },
    { name: "Destination", href: "/destination" },
    { name: "My Bookings", href: "/my-bookings" },
    { name: "Admin", href: "/admin" },
    { name: "Add destination", href: "/add-destination" },
  ];

  const renderLink = (link) => {
    const isActive = pathname === link.href;

    return (
      <Link
        key={link.name}
        href={link.href}
        className={`px-3 py-2 rounded-md transition-all duration-200 ${
          isActive
            ? "text-sky-500 font-semibold border-b-2 border-sky-500"
            : "text-gray-700 hover:text-sky-500"
        }`}
      >
        {link.name}
      </Link>
    );
  };

  return (
    <nav className="w-full bg-white shadow-md px-3 md:px-14 py-3">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between">
        {/* Left Links */}
        <div className="flex gap-3">{links.map(renderLink)}</div>

        {/* Center Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/assets/Wanderlast.png"
              width={150}
              height={150}
              className="w-35 h-auto"
              alt="logo"
            />
          </Link>
        </div>

        {/* Right Auth Buttons */}
       <div>

      { user ?    
        <div className="flex items-center gap-3">
          <h1> Hello MR. {user?.name} </h1>
          <Avatar>
        <Avatar.Image alt="John Doe" src={user?.image} />
        <Avatar.Fallback> {user?.name.charAt(0)} </Avatar.Fallback>
      </Avatar>
         <Link href="/login">
            <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white hover:text-gray-300">
              {" "}
             Sign Out
            </button>
          </Link>

        </div>  :
       
       <div className="flex gap-3">
         <Link href="/login">
            <button className="px-4 py-2 bg-black text-white hover:text-gray-300">
              {" "}
              Sign In
            </button>
          </Link>

          <Link href="/signup">
            <button className="px-4 py-2 bg-sky-500 text-white  hover:bg-sky-600">
              {" "}
              Sign Up{" "}
            </button>
          </Link>
        </div>

        }
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/Wanderlast.png"
            width={90}
            height={90}
            alt="logo"
            className="w-25 h-auto"
          />
        </Link>

        <button className="text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md ${
                  isActive
                    ? "text-sky-500 font-semibold bg-sky-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-2 mt-2">
            <Link
              href="/login"
              className="px-3 py-2 border rounded-md text-center"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className="px-3 py-2 bg-sky-500 text-white rounded-md text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
