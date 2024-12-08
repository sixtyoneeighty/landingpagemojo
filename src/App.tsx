import React from 'react';
import { ArrowRight } from 'lucide-react';
import VideoBackground from './components/VideoBackground';
import Button from './components/Button';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <VideoBackground />
      
      {/* Overlay with content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-100">
            Dr. Mojo
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-amber-50">
            Your AI Radiologist
          </p>
          <p className="text-lg sm:text-xl mb-12 text-amber-50/90 max-w-2xl mx-auto">
            Providing a fast and detailed analysis of your medical images
          </p>
          <Button>
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
