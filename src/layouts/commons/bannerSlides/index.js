import React from 'react';
import SearchResidence from '../searchs/residence';

const BannerSlides = () => {
  return (
    <>
      <section className="section-block section-banner p-0">
        <div className="slides header-banner"></div>
        <SearchResidence />
      </section>
    </>
  );
};

export default BannerSlides;
