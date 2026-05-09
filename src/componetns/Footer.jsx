import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-sky-600 to-sky-800 text-white">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-white/20 pb-12">

          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Wanderlust
            </h1>

            <p className="mt-5 text-white/80 max-w-lg leading-relaxed">
              Your gateway to unforgettable travel experiences, luxury stays,
              and adventures across the world.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <h3 className="uppercase tracking-widest text-sm mb-4 text-white/70">
                Subscribe Newsletter
              </h3>

              <div className="flex items-center bg-white rounded-xl overflow-hidden max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 text-gray-700 outline-none"
                />

                <button className="bg-black text-white px-5 py-3 hover:bg-gray-900 transition">
                  ↗
                </button>
              </div>
            </div>
          </div>

          {/* Right Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Quick Links
              </h3>

              <ul className="space-y-3 text-white/80">
                <li className="hover:text-white transition cursor-pointer">
                  Home
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  Destinations
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  My Bookings
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  Profile
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Support
              </h3>

              <ul className="space-y-3 text-white/80">
                <li className="hover:text-white transition cursor-pointer">
                  Help Center
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Contact
              </h3>

              <ul className="space-y-3 text-white/80">
                <li>+880 1789-000000</li>
                <li>info@wanderlust.com</li>
                <li>Dhaka, Bangladesh</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-8">

          <p className="text-sm text-white/70 text-center md:text-left">
            © 2026 Wanderlust. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">

            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-sky-700 transition cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-sky-700 transition cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-sky-700 transition cursor-pointer">
              <FaLinkedinIn />
            </div>

            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-sky-700 transition cursor-pointer">
              <FaXTwitter />
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;