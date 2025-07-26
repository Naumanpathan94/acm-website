import React from 'react';
import { useMediaQuery } from 'react-responsive';
import RaitACMWebsite from './RaitACMWebsite';
import './App.css';

export default function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  
  return (
    <div className="app-container">
      <RaitACMWebsite 
        isMobile={isMobile}
        isTablet={isTablet}
      />
    </div>
  );
}
