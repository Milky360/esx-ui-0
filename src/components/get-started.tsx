"use client";

// Mark this component as a Client Component
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { Button } from "antd";

// Import useRouter from next/navigation

const GetStarted: React.FC = () => {
  const router = useRouter(); // Get the router instance
  const [hovered, setHovered] = useState(false); // State to track hover

  const handleDiscoverMore = () => {
    router.push("/discover-more"); // Use a function for navigation
  };

  return (
    <div className="">
      <Button
        style={{
          borderRadius: "50px",
          minWidth: "120px", // Minimum width for buttons
          padding: "20px",
          fontSize: "1rem",
          background: hovered
            ? "linear-gradient(to right, #103EBA, #103EBA)" // Gradient on hover (same color)
            : "linear-gradient(to right, #0045FF, #325FD6)", // Default gradient
          color: "#fff", // Text color
          transition: "background 0.3s ease", // Smooth transition for background
        }}
        onClick={handleDiscoverMore} // Use the handleDiscoverMore function
        onMouseEnter={() => setHovered(true)} // Set hovered state
        onMouseLeave={() => setHovered(false)} // Reset hovered state
        className={"hover:scale-105 hover:text-white hover:shadow-md"} // Apply hover effects
      >
        Get Started
      </Button>
    </div>
  );
};

export default GetStarted;
