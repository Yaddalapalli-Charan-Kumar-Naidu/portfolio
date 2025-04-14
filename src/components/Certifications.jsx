import React, { useState } from 'react';
import { certifications } from "../constants";
import TitleHeader from './TitleHeader';
import GlowCard from './GlowCard';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);  // Tooltip visibility state

  const handleViewCertificate = (imgPath) => {
    setSelectedCert(imgPath);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <div id="certifications" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader 
          title="My Certifications" 
          sub="Certificates I've earned from various platforms" 
        />

        <div className="overflow-x-auto mt-16" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex flex-row gap-6 w-max">
            {certifications.map(({ imgPath, title, institution, date, link }, index) => (
              <div key={title + index} className="min-w-[300px] flex-shrink-0 relative group">
                {/* Tooltip */}
                {tooltipVisible && (
                  <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-xs py-1 px-2 rounded opacity-100 transition-opacity duration-300 z-10">
                    View Certificate
                  </div>
                )}
                <button
                  onClick={() => handleViewCertificate(imgPath)}
                  onMouseEnter={showTooltip} 
                  onMouseLeave={hideTooltip} // Hide tooltip on mouse leave
                  className="cursor-pointer"
                  
                >
                  <GlowCard card={{ title }}>
                    <div className="flex flex-col items-center gap-3">
                      <img src={imgPath} alt={title} className="w-full h-[40vh] object-contain" />
                      <div className="text-center">
                        <p className="font-bold">{title}</p>
                        <p className="text-sm text-gray-500">{institution}</p>
                        <p className="text-xs text-gray-400">{date}</p>
                      </div>
                    </div>
                  </GlowCard>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
            <div className="bg-gray-300 rounded-lg shadow-lg p-5 max-w-5xl w-full relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-3xl"
              >
                &times;
              </button>
              <img 
                src={selectedCert} 
                alt="Certificate" 
                className="w-full h-[60vh] object-contain rounded-md" 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certifications;
