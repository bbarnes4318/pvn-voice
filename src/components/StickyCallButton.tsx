import React, { useEffect, useState } from 'react';
import { FaPhone } from 'react-icons/fa';

const StickyCallButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-lg transition-transform duration-300 md:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a href="tel:+19045128487" className="btn-call w-full justify-center">
        <FaPhone className="mr-2" />
        <span>Call (904) 512-8487</span>
      </a>
      <p className="mt-2 text-center text-xs text-gray-500">Ask about a traffic test</p>
    </div>
  );
};

export default StickyCallButton;
