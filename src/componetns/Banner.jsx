import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div
      className="
        bg-[url('/assets/banner.png')]
        bg-cover
        bg-center
        text-white
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        px-4
        py-10
        relative
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          Discover Your <br /> Next Adventure
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-2xl text-white/90 mt-5 max-w-3xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          <button
            className="
              uppercase
              bg-cyan-500
              hover:bg-cyan-600
              transition-all
              duration-300
              px-6
              py-3
              rounded-xl
              font-medium
              w-full sm:w-auto
            "
          >
            Explore Now
          </button>

          <button
            className="
              uppercase
              bg-white/20
              hover:bg-white/30
              backdrop-blur-md
              transition-all
              duration-300
              px-6
              py-3
              rounded-xl
              font-medium
              border
              border-white/20
              w-full sm:w-auto
            "
          >
            View Destination
          </button>
        </div>

        {/* Search Box */}
        <div
          className="
            w-full
            max-w-6xl
            mt-12
            bg-white/20
            backdrop-blur-lg
            border
            border-white/20
            rounded-2xl
            p-5
            shadow-2xl
          "
        >
          <div className="flex flex-col md:flex-row  items-center justify-between gap-5">
            {/* Location */}
            <div className="flex-1 w-full text-left">
              <h3 className="text-md font-semibold">Location</h3>

              <p className="text-xs text-white/70 mt-1">Address, City or Zip</p>
            </div>

            <Separator
              variant="tertiary"
              orientation="vertical"
              className="hidden lg:block h-12"
            />

            {/* Date */}
            <div className="flex-1 w-full text-left">
              <h3 className="text-md font-semibold">Date/Duration</h3>

              <p className="text-xs text-white/70 mt-1">Anytime / 3 Days</p>
            </div>

            <Separator
              variant="tertiary"
              orientation="vertical"
              className="hidden lg:block h-12"
            />

            {/* Budget */}
            <div className="flex-1 w-full text-left">
              <h3 className="text-md font-semibold">Budget</h3>

              <p className="text-xs text-white/70 mt-1">$0 - $3000</p>
            </div>

            <Separator
              variant="tertiary"
              orientation="vertical"
              className="hidden lg:block h-12"
            />

            {/* People */}
            <div className="flex-1 w-full text-left">
              <h3 className="text-md font-semibold">People</h3>

              <p className="text-xs text-white/70 mt-1">5 - 10 Persons</p>
            </div>

            {/* Search Button */}
            <button
              className="
                bg-cyan-500
                hover:bg-cyan-600
                transition-all
                duration-300
                text-white
                font-medium
                px-6
                py-3
                rounded-xl
                shadow-md
                w-full
                lg:w-auto
              "
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
