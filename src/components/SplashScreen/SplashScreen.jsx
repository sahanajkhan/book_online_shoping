import React, { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';
import './SplashScreen.css';

const SplashScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out slightly before the component unmounts in App.jsx
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <BookOpen className="splash-logo-icon" size={64} />
        <h1 className="splash-logo-text">LuminaBooks</h1>
        <div className="splash-loader"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
