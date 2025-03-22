import { useState, useEffect } from 'react';

const FullScreenCarousel = () => {
  const images = [
    'https://via.placeholder.com/1920x1080/FF5733/FFFFFF?text=Image+1',
    'https://via.placeholder.com/1920x1080/33FF57/FFFFFF?text=Image+2',
    'https://via.placeholder.com/1920x1080/3357FF/FFFFFF?text=Image+3',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-80 overflow-hidden mb-0"> {/* Adjusted height to h-80 */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-80 flex-shrink-0"> {/* Adjusted height here as well */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Optional indicator navigation (uncomment if you want to include) */}
      {/* <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

const NextComponent = () => {
  return (
    <div className="bg-gray-200 p-8">
      <h1 className="text-5xl font-bold">About Us</h1>
      <br></br>
      <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan mollis potenti luctus felis nibh vivamus. Nullam dignissim lacinia vivamus lectus class magna morbi gravida. Eu et ridiculus tempor donec nascetur himenaeos leo magnis tristique. Congue dolor velit magnis; elit libero ad magnis amet. Imperdiet efficitur sit cubilia torquent ultrices amet. Porttitor massa mattis eros ut luctus metus finibus vehicula. Pharetra nulla phasellus nec litora ante commodo. Adipiscing dui sapien natoque hac morbi duis.

Facilisi elementum tincidunt feugiat quam lobortis aliquet. Sollicitudin nam inceptos sem augue dis sit dignissim at dolor. Nisi aliquet per habitant pulvinar tincidunt maximus. Praesent nostra arcu cras nisi ullamcorper ultrices habitant. Nulla etiam vestibulum lobortis ac; volutpat class. Quisque luctus mi fringilla bibendum, lorem massa.</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="font-sans">
      <FullScreenCarousel />
      <NextComponent /> {/* No gap between components */}
    </div>
  );
};

export default App;
