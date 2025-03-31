// src/components/DarkModeToggle.js
import React from 'react';
//import { useAppContext } from '../context/Context';
//import { CartState } from "../context/Context";
import { CartState } from "../context/Context"; // Correct path if Context.js is inside src/context/

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = CartState();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
