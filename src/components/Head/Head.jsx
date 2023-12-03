import React from 'react';
import { Helmet } from 'react-helmet';

function Head() {
  return (
    <Helmet>
      <title>AutoMarket</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

export default Head;
