import React from "react";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-link">
            <ul>
              <li className="nav-list">
                <HashLink to="/" className="nav-link">
                Home
                </HashLink>
              </li>
              <li className="nav-list">
                <HashLink to="/white-paper" className="nav-link">
                White Paper
                </HashLink>
              </li>
              <li className="nav-list">
                <HashLink to="/referral" className="nav-link">
                Referral
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="footer-social-media">
            <a href="https://www.facebook.com/" target="_blank"><img src="images/facebook.svg" alt="" /></a>
            <a href="https://www.facebook.com/" target="_blank"><img src="images/twitter-2.svg" alt="" /></a>
            <a href="https://www.facebook.com/" target="_blank"><img src="images/google.svg" alt="" /></a>
            <a href="https://www.facebook.com/" target="_blank"><img src="images/chat.svg" alt="" /></a>
          </div>
          <div className="footer-item-dis">
            <p>© Goose Wealth Creation All Rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
