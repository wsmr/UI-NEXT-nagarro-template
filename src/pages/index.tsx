import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroBanner from '../components/home/HeroBanner';
import AboutSection from '../components/home/AboutSection';
import FeaturedStory from '../components/home/FeaturedStory';
import WhatsHotSection from '../components/home/WhatsHotSection';

const HomePage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <HeroBanner />
        <AboutSection />
        <FeaturedStory />
        <WhatsHotSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
