"use client"
import React, { useRef, useEffect, useState } from 'react';

// Custom Hook for Intersection Observer
const useOnScreen = (options) => {
  const ref = useRef();
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};

const AboutSection = () => {
  const [titleRef, titleVisible] = useOnScreen({ threshold: 0.1 });
  const [descRef, descVisible] = useOnScreen({ threshold: 0.10 });
  const [facultyRef, facultyVisible] = useOnScreen({ threshold: 0.5 });
  const [materialRef, materialVisible] = useOnScreen({ threshold: 0.5 });
  const [successRef, successVisible] = useOnScreen({ threshold: 0.5 });

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        
        {/* Section Title with Fade-In Effect */}
        <h2
          ref={titleRef}
          className={`text-3xl font-bold text-gray-800 text-center transition-opacity duration-700 ${
            titleVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          About Spardha Sarathi KAS Academy
        </h2>
        
        {/* Section Description with Delay Fade-In Effect */}
        <p
          ref={descRef}
          className={`mt-4 text-lg text-gray-600 text-center transition-opacity duration-700 delay-200 ${
            descVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Spardha Sarathi KAS Academy is committed to empowering future leaders by providing top-notch coaching and resources tailored to KAS aspirants. Our mission is to foster excellence in education and help students achieve their career goals.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Experienced Faculty Card with Zoom-In Effect */}
          <div
            ref={facultyRef}
            className={`text-center transform transition duration-700 ${
              facultyVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <img 
              src="/college-mates.jpg" 
              alt="Experienced Faculty" 
              className="mx-auto h-44 w-44 rounded-full" 
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Experienced Faculty
            </h3>
            <p className="mt-2 text-gray-600">
              Learn from the best with our seasoned educators.
            </p>
          </div>
          
          {/* Comprehensive Study Material Card with Zoom-In Effect */}
          <div
            ref={materialRef}
            className={`text-center transform transition duration-700 delay-300 ${
              materialVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <img 
              src="/public-examination.jpg" 
              alt="Study Material" 
              className="mx-auto h-44 w-44 rounded-full" 
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Comprehensive Study Material
            </h3>
            <p className="mt-2 text-gray-600">
              Access extensive resources to guide your studies.
            </p>
          </div>
          
          {/* Success Stories Card with Zoom-In Effect */}
          <div
            ref={successRef}
            className={`text-center transform transition duration-700 delay-500 ${
              successVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <img 
              src="/454964-PFLG0R-800.jpg" 
              alt="Success Stories" 
              className="mx-auto h-44 w-44 rounded-full" 
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Proven Success Stories
            </h3>
            <p className="mt-2 text-gray-600">
              Join a community of successful KAS achievers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
