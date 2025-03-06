import React, { useEffect, useState } from "react";

const StickyCard = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const cardOffset = document.getElementById("stickyCard").offsetTop;

      if (scrollTop >= cardOffset - 30) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-[500vh] bg-gray-100 pt-5">
      <div
        id="stickyCard"
        className={`w-[300px] h-[500px] bg-white shadow-lg rounded-lg p-5 transition-all duration-300 ${
          isSticky
            ? "fixed top-[30px] right-[50px]"
            : "absolute right-[50px] top-0"
        }`}
      >
        <h2 className="text-lg font-semibold">Sticky Card</h2>
        <p className="text-gray-600">This card stops at 30px when scrolling.</p>
      </div>
    </div>
  );
};

export default StickyCard;
