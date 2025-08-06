import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Optional: for styling

const FadeNavbar = () => {
  const [opacity, setOpacity] = useState(1);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setOpacity(0.3);
      } else {
        // Scrolling up
        setOpacity(1);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <nav className="fade-navbar" style={{ opacity }}>
      <h1>My Website</h1>
    </nav>
  );
};

export default FadeNavbar;
