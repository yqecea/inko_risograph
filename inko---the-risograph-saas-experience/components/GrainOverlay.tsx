
import React from 'react';

const GrainOverlay: React.FC = () => {
  return (
    <div className="grain-overlay pointer-events-none fixed inset-0 z-[9999]">
      <svg width="100%" height="100%">
        <filter id="noise">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.65" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" opacity="0.15" />
      </svg>
    </div>
  );
};

export default GrainOverlay;
