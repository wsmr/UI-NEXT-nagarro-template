import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

interface HeroBannerProps {
  // Props can be extended as needed
}

const HeroBanner: React.FC<HeroBannerProps> = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <SlideArrow direction="prev" />,
    nextArrow: <SlideArrow direction="next" />,
  };

  // Tabs for the slider
  const tabs = [
    { id: 'fluidic', label: 'Fluidic Enterprise' },
    { id: 'ar24', label: 'AR\'24/Q1\'25' },
    { id: 'customer', label: 'Customer speak' },
    { id: 't-suite', label: 'T-suite' }
  ];

  // Slider content
  const slides = [
    {
      id: 'slide1',
      title: 'Nagarro releases FY 2024 and Q1 2025 statements',
      buttonText: 'Know more',
      buttonLink: '#',
      backgroundClass: 'bg-gradient-1'
    },
    {
      id: 'slide2',
      title: 'Fluidic Enterprise: Adapt to change with agility',
      buttonText: 'Learn more',
      buttonLink: '#',
      backgroundClass: 'bg-gradient-2'
    },
    {
      id: 'slide3',
      title: 'Hear what our customers have to say',
      buttonText: 'Read testimonials',
      buttonLink: '#',
      backgroundClass: 'bg-gradient-3'
    },
    {
      id: 'slide4',
      title: 'T-suite: Technology leadership insights',
      buttonText: 'Explore',
      buttonLink: '#',
      backgroundClass: 'bg-gradient-4'
    }
  ];

  return (
    <section className="hero-banner">
      {/* 
        PLACEHOLDER: Dynamic background with gradient waves
        Original: Animated gradient background with fluid, wave-like motion
        Colors: Teal, purple, and dark blue gradients
      */}
      <div className="hero-banner__background">
        <div className="wave-animation"></div>
      </div>

      <div className="container">
        <div className="hero-banner__content">
          <Slider {...settings} className="hero-banner__slider">
            {slides.map((slide) => (
              <div key={slide.id} className="hero-banner__slide">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="slide-content"
                >
                  <h1>{slide.title}</h1>
                  <a href={slide.buttonLink} className="hero-button">
                    {slide.buttonText}
                  </a>
                </motion.div>
              </div>
            ))}
          </Slider>

          <div className="hero-banner__tabs">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`tab-button ${index === 0 ? 'active' : ''}`}
                onClick={() => {/* Would handle tab switching */}}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom arrow component for the slider
const SlideArrow = ({ direction, onClick }: { direction: 'prev' | 'next', onClick?: () => void }) => {
  return (
    <button 
      className={`slide-arrow ${direction === 'prev' ? 'slide-arrow--prev' : 'slide-arrow--next'}`}
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
    >
      {direction === 'prev' ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
};

export default HeroBanner;
