import React from 'react';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ 
        backgroundImage: 'url("/placeholder.png")', // You can replace this with your own image
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
