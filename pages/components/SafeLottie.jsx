// components/SafeLottie.js
import dynamic from 'next/dynamic';
import React from 'react';

// Mengimpor lottie-react di dalam dynamic import
// Ini memastikan kodenya hanya dijalankan di browser
const Lottie = dynamic(
  () => import('lottie-react'),
  { ssr: false }
);

const SafeLottie = ({ animationData, ...rest }) => {
  if (!animationData) {
    return null;
  }
  
  return (
    <Lottie animationData={animationData} {...rest} />
  );
};

export default SafeLottie;