
import React, { useEffect, useState } from 'react';

const KeyMetricsSection = () => {
  const [currentMetric, setCurrentMetric] = useState({ value: '85', unit: '%', text: 'Reduction in out-of-stock' });

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.getElementById('section-1').getBoundingClientRect();
      const section2 = document.getElementById('section-2').getBoundingClientRect();
      const section3 = document.getElementById('section-3').getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      if (section1.top <= viewportHeight / 2 && section1.bottom >= viewportHeight / 2) {
        setCurrentMetric({ value: '85', unit: '%', text: 'Reduction in out-of-stock' });
      } else if (section2.top <= viewportHeight / 2 && section2.bottom >= viewportHeight / 2) {
        setCurrentMetric({ value: '25', unit: 'Days', text: 'Reduction in cash recovery time' });
      } else if (section3.top <= viewportHeight / 2 && section3.bottom >= viewportHeight / 2) {
        setCurrentMetric({ value: '15', unit: '%', text: 'Growth in revenue' });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <div className="sticky top-0 flex flex-col items-center justify-center h-screen text-center">
        <div className="text-center">
          <div className="text-6xl mt-10  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500">
            {currentMetric.value}
            <span>{currentMetric.unit}</span>
          </div>
          <div className="text-3xl mt-10 font-poppins">{currentMetric.text}</div>
        </div>
      </div>
      <div id="section-1" className="observe-section h-screen"></div>
      <div id="section-2" className="observe-section h-screen"></div>
      <div id="section-3" className="observe-section h-screen"></div>
    </div>
  );
};

export default KeyMetricsSection;

