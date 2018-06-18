import React from 'react';

const Footer = () => (
  <footer className="app__footer">
    <div className="app__container">
      <div className="app__footer__github">
        <iframe
          title="GitHub Stars"
          src=""
          frameBorder="0"
          scrolling="0" width="110px" height="20px"
        />
        <iframe
          title="GitHub Follow"
          src=""
          frameBorder="0"
          scrolling="0" width="130px" height="20px"
        />
      </div>
    </div>
  </footer>
);

export default Footer;
