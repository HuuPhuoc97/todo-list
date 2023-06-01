import React from 'react';
import HeaderTop from './headertop';
import Navigator from '../navigator';
// import BannerSlides from '../bannerSlides';

const Header = () => {
  return (
    <>
      <header className="section-header header">
        <HeaderTop />
        <Navigator />
      </header>
    </>
  );
};

export default Header;
