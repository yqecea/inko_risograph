
import React from 'react';
import ShowcaseSectionExtended from './ShowcaseSectionExtended';

const ShowcaseSectionWrapper: React.FC = () => {
  return (
    <section className="bg-riso-paper py-24">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-syne font-black uppercase tracking-tighter">
          The Machine <br /> <span className="text-riso-pink italic font-serif normal-case">Behind the Ink.</span>
        </h2>
      </div>
      <ShowcaseSectionExtended />
    </section>
  );
};

export default ShowcaseSectionWrapper;
