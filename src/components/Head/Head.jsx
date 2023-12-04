import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Head() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>AutoMarket</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </HelmetProvider>
  );
}

export default Head;
