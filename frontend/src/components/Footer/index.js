import './Footer.css';

import React from 'react';

import githubLogo from '../../images/github1.svg';
import linkedInLogo from '../../images/linkedin.svg';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-container-inner">
        <div className="footer-developed-by">Developed by:</div>
        <div className="footer-developerList">
          <div className="footer-developer-name">
            <div>Abhishek Bornak</div>
            <div className="footer-image-links">
              <a
                href="https://github.com/starsabhi"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footerIconClass"
                  src={githubLogo}
                  height="23px"
                  alt="github"
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-bornak-semasna514865/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footerIconClass"
                  src={linkedInLogo}
                  height="23px"
                  alt="linkedIn"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
