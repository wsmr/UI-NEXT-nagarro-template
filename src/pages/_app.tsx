import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import '../styles/components/header.scss';
import '../styles/components/hero-banner.scss';
import '../styles/components/about-section.scss';
import '../styles/components/featured-story.scss';
import '../styles/components/whats-hot.scss';
import '../styles/components/footer.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
