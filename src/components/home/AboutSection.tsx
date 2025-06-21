import React from 'react';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  // Props can be extended as needed
}

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-section__content"
        >
          <p className="about-section__text">
            With around 17,500 Nagarrians in 39 countries,
            Nagarro drives business value and engineering
            excellence in over 1000 clients globally. The company
            is distinguished by its entrepreneurial, agile, and
            global character, as well as its CARING values and
            mindset.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
