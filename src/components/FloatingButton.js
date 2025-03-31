// src/components/FloatingButton.js
import React from 'react';
import './FloatingButton.css'; // CSS for styling

const FloatingButton = () => {
  return (
    <button className="floating-button" onClick={() => window.scrollTo(0, 0)}>
      ↑
    </button>
  );
};

export default FloatingButton;
