"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Destination", href: "/destination" },
    { name: "My Bookings", href: "/my-bookings" },
    { name: "Admin", href: "/admin" },
  ];

  const dashLinks = [
    { name: "Profile", href: "/profile" },
    { name: "Login", href: "/login" },
    { name: "Sign Up", href: "/signup" },
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
    <nav className="w-full  bg-white shadow-md px-3 md:px-14 py-3">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between">

        {/* Left Links */}
        <div className="flex gap-3">
          {links.map(renderLink)}
        </div>

        {/* Center Logo */}
        <div className="flex justify-center">
            <Link href='/'>
          <Image
            src="/assets/Wanderlast.png"
            width={150}
            height={150}
            alt="logo"
          />
          </Link>
        </div>

        {/* Right Dash Links */}
        <div className="flex gap-3">
          {dashLinks.map(renderLink)}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex items-center justify-between">

      <Link href='/'>
        <Image
          src="/assets/Wanderlast.png"
          width={90}
          height={90}
          alt="logo"
        />

      </Link>
        <button
          className="text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-2">
          {[...links, ...dashLinks].map((link) => {
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;