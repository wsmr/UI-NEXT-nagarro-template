import React from 'react';
import { motion } from 'framer-motion';

interface WhatsHotSectionProps {
  // Props can be extended as needed
}

const WhatsHotSection: React.FC<WhatsHotSectionProps> = () => {
  const hotTopics = [
    {
      id: 1,
      title: 'Digital Transformation',
      description: 'See how we have helped industry leaders embrace digitalization and accelerate technology-led innovation.',
      link: '#'
    },
    {
      id: 2,
      title: 'AI & Machine Learning',
      description: 'Discover how our AI solutions are transforming businesses across industries.',
      link: '#'
    },
    {
      id: 3,
      title: 'Cloud Migration',
      description: 'Learn about our approach to seamless cloud transitions and optimization.',
      link: '#'
    }
  ];

  return (
    <section className="whats-hot">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="whats-hot__header"
        >
          <h2 className="whats-hot__title">What's hot</h2>
        </motion.div>

        <div className="whats-hot__grid">
          {hotTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="whats-hot__card"
            >
              <h3 className="whats-hot__card-title">{topic.title}</h3>
              <p className="whats-hot__card-description">{topic.description}</p>
              <a href={topic.link} className="whats-hot__card-link">
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsHotSection;
