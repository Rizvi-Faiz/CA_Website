import { useState, useEffect } from 'react';
import About from './About';

const FullScreenCarousel = () => {
  // California-themed images from the internet
  // const images = [
  //   '/api/placeholder/1920/1080', // Since external images aren't allowed in this environment
  //   '/api/placeholder/1920/1080', // I've kept placeholder images here, but provided real URLs in comments below
  //   '/api/placeholder/1920/1080',
  //   '/api/placeholder/1920/1080',
  // ];
  
  // In your actual code, replace the placeholders with these URLs:
  const images = [
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f', // Professional accountant working
    'https://images.unsplash.com/photo-1554224154-22dec7ec8818', // Financial documents/analysis
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85', // Business meeting
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab', // Modern office building
  ];

  const captions = [
    'Professional Accounting Services',
    'Financial Analysis & Reporting',
    'Strategic Business Consulting',
    'Corporate Tax Planning'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const slideInterval = setInterval(() => {
      // Start fade out
      setFadeState('fade-out');
      
      // After fade out completes, change slide and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeState('fade-in');
      }, 500); // Half of the transition duration
      
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [images.length]);

  const goToSlide = (index) => {
    setFadeState('fade-out');
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeState('fade-in');
    }, 500);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Current slide with fade effect */}
      <div 
        className={`absolute w-full h-full transition-opacity duration-1000 ${
          fadeState === 'fade-in' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={images[currentIndex]}
          alt={captions[currentIndex]}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-white text-xl font-bold bg-black bg-opacity-50 inline-block px-4 py-2 rounded">
            {captions[currentIndex]}
          </p>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400 bg-opacity-70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Arrow navigation */}
      <button 
        onClick={() => {
          goToSlide((currentIndex - 1 + images.length) % images.length);
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={() => {
          goToSlide((currentIndex + 1) % images.length);
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="font-sans">
      <FullScreenCarousel />
      <About />
    </div>
  );
};

export default App;