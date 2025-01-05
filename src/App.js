import React from 'react';
import sword from './assets/sword.svg'; // Replace with your sword image path

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Split Background Halves */}
      <div className="bg-left absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
      <div className="bg-right absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-purple-500 to-blue-500"></div>

      {/* Sword Animation */}
      <img
        src={sword}
        alt="Sword"
        className="sword absolute top-0 left-1/2 transform -translate-x-1/2 w-40 animate-slice"
      />

      {/* Main Menu (Initially Hidden) */}
      <div className="main-menu opacity-0 animate-reveal flex flex-col items-center justify-center text-white absolute inset-0">
        <h1 className="text-6xl font-bold">Welcome to SwordApp!</h1>
        <p className="text-2xl mt-4">Your anime sword-themed portfolio begins here.</p>
      </div>
    </div>
  );
}

export default App;
