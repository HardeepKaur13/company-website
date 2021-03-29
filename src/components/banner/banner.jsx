import React from 'react';
import './banner.css';

function banner() {
  return (

    <div className="bannercontrol">
      <Bgimage />

    </div>
  );
}

const Bgimage = () => (
  <div className="banner-img">

    <img src="./image/banner.jfif" alt="" />
    <Bgtext />
  </div>
);

const Bgtext = () => (
  <div className="bg-text">
    <p className="small-letter">
      MENS MOVIE LIBRARY
      <br />
      <h1 className="big-letter">Best Movies</h1>
      <br />
      <p className="last-letter">OF ALL TIME</p>
    </p>
  </div>
);

export default banner;
