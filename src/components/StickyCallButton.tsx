import React, { useState, useEffect } from 'react';
import { FaPhone } from 'react-icons/fa';

const StickyCallButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after user has scrolled down a bit
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-lg border-t border-gray-200 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a 
        href="tel:+19045128487" 
        className="btn-call w-full justify-center"
      >
        <FaPhone className="mr-2 animate-pulse" />
        <span>Call (904) 512-8487 Now</span>
      </a>
      <p className="text-center text-xs text-gray-500 mt-2">
        Free consultation • Start your trial today
      </p>
    </div>
  );
};

export default StickyCallButton; 