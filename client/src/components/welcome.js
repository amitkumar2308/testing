import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const images = [
  'https://picsum.photos/800/300?random=1',
  'https://picsum.photos/800/300?random=2',
  'https://picsum.photos/800/300?random=3',
  'https://picsum.photos/800/300?random=4',
  'https://picsum.photos/800/300?random=5',
];

const WelcomeSection = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const { transform, opacity } = useSpring({
    transform: `translateX(-${index * (100 / 3)}%)`, // Adjust for three visible cards
    opacity: 1,
    config: { tension: 100, friction: 40 },
  });

  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-center justify-center py-10 px-4">
      <div className="text-center mb-12">
        <h1 className="text-white text-4xl font-bold">
          Welcome to Bishop Cotton Boys School
        </h1>
        <p className="text-white mt-4 max-w-2xl mx-auto">
          After standing tall for 155 glorious years, Bishop Cotton Boys' School
          has won the accolades of the "Eton of the East" and stands out as
          Bangalore's leading school, one of India's top-ranked schools.
        </p>
      </div>

      <div className="carousel-container relative w-full overflow-hidden">
        <button onClick={prevSlide} className="carousel-button left">
          &#10094; {/* Left arrow */}
        </button>

        <animated.div
          className="carousel"
          style={{
            transform,
            opacity,
            display: 'flex',
            width: `${images.length * (100 / 3)}%`, // Adjust width to fit three cards
          }}
        >
          {images.map((image, i) => (
            <animated.div
              key={i}
              className="carousel-slide"
              style={{
                width: '33.33%', // Make each card take 1/3 of the carousel width
                flexShrink: 0,
                height: '300px',
                background: `url(${image}) center/cover no-repeat`,
                borderRadius: '10px',
                margin: '0 10px',
              }}
            />
          ))}
        </animated.div>

        <button onClick={nextSlide} className="carousel-button right">
          &#10095; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection;
