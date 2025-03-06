import React, { useEffect, useState } from "react";

const DummyScreen = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex h-[300vh] bg-gray-100 p-10">
        {/* Left Side Content */}
        <div className="w-full bg-white p-6 shadow-md">
          <h1 className="text-2xl font-bold">Left Side Content</h1>
          <p className="mt-4">
            {Array(100).fill("Scroll down to see the effect. ").join(" ")}
          </p>
        </div>

        {/* Right Side Card */}
        <div className=" flex justify-center sticky top-3 right-5 z-20">
          <div
            className={`h-[100vh] w-80 bg-blue-500 text-white p-6 rounded-lg shadow-lg transition-all duration-300 ${
              sticky ? "sticky top-[90px]" : "mt-10"
            }`}
          >
            <h2 className="text-xl font-semibold">Sticky Card</h2>
            <p className="mt-2">
              This card will become sticky when you scroll.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold">Left Side Content</h1>
        <p className="mt-4">
          {Array(100).fill("Scroll down to see the effect. ").join(" ")}
        </p>
      </div>
    </>
  );
};

export default DummyScreen;
