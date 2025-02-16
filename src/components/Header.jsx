/* eslint-disable no-unused-vars */
import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logoSpotify} alt="Logomarca do Spotify" />
      <a className="header-link" href="/">
        <h1>Spotify</h1>
      </a>
    </div>
  );
};

export default Header;
