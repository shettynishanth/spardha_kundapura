// components/HeroSection.js
"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 h-screen flex items-center justify-center text-center new-amsterdam-regular">
      <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-center p-4">
        
        {/* Logo Image with Hover Effect */}
        <Image 
          src="/Spardha-1.jpg" 
          alt="Spardha Sarathi Logo" 
          width={250} 
          height={150} 
          className="mb-4 transform transition duration-500 hover:scale-110" 
        />

        {/* Headline with Hover Effect */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 transform transition duration-500 hover:scale-105 hover:text-gray-300">
          Spardha Sarathi KAS Academy<br/>Kundapura
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-white mb-6 transform transition duration-500 hover:scale-105 hover:text-gray-300">
        Elevating Your Preparation Journey
        </p>

        {/* Description */}
        <p className="text-white text-lg mb-6 transform transition duration-500 hover:scale-105 hover:text-gray-300">
        Our upcoming website is on the horizon, designed to deliver essential information on our courses, events, and expert faculty.<br/> Prepare to access a wealth of resources tailored for IAS & KAS aspirants. We look forward to unveiling our platform soon. Stay connected for updates!
        </p>

        {/* Countdown Timer Component with Hover Effect */}
        <div className="bg-white text-indigo-600 font-bold rounded-full py-2 px-4 inline-block transform transition duration-500 hover:bg-indigo-600 hover:text-white hover:scale-105">
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
};

const CountdownTimer = () => {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    setCurrentTime(new Date());

    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  if (!currentTime) {
    return null; // While waiting for the component to mount, render nothing or a placeholder
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div>
      <div>{formatTime(currentTime)} {formatDate(currentTime)}</div>
    </div>
  );
};

export default HeroSection;
