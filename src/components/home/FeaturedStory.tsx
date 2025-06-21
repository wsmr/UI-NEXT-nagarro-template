import React from 'react';
import { motion } from 'framer-motion';

interface FeaturedStoryProps {
  // Props can be extended as needed
}

const FeaturedStory: React.FC<FeaturedStoryProps> = () => {
  return (
    <section className="featured-story">
      <div className="container">
        <div className="featured-story__grid">
          <motion.div
            className="featured-story__content"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="featured-story__title">
              Paul Frank's iconic character, Bunny Girl, gets a 3D makeover
            </h2>
            <p className="featured-story__subtitle">How we helped</p>
            <p className="featured-story__description">
              We recreated Paul Frank's beloved Bunny Girl in a fresh, 3D look, 
              blending classic charm with modern design for a new generation of fans.
            </p>
            <a href="#" className="featured-story__button">
              Read the story
            </a>
          </motion.div>
          
          <motion.div
            className="featured-story__image"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* 
              PLACEHOLDER: Bunny Girl 3D character images
              Original: Two images of colorful 3D character with pink/purple background
              Dimensions: approx. 600x400px each
            */}
            <div className="featured-story__image-container">
              <div className="featured-story__image-placeholder bunny-girl-1"></div>
              <div className="featured-story__image-placeholder bunny-girl-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;
