/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { useTronContext } from "../Context/useContext";

function Header() {
  const [navActive, setNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, [navActive]);

  const { getTronweb, walletConnected } = useTronContext();

  return (
    // <!-- =====================Navigation=========== -->
    <header className="header">
      <div className="container">
        <nav className="navigation">
          <div className="logo logo-nav">
            <Link to="/" className="logo-link">
              <img src="/images/logo.svg" alt="" />
            </Link>
          </div>

          <div className={`menu ${sidebarActive ? "active" : ""}`}>
            <div className="close-menu" onClick={() => setSidebarActive(false)}>
              <img src="./images/close.svg" alt="" />
            </div>
            <ul className="menu-nav-ul">
              <li className="nav-list">
                <HashLink to="/" className="nav-link" onClick={_toggleSidebar}>
                  Home
                </HashLink>
              </li>
              <li className="nav-list">
                <HashLink
                  to="/white-paper"
                  className="nav-link"
                  onClick={_toggleSidebar}
                >
                  White Paper
                </HashLink>
              </li>
              <li className="nav-list">
                <HashLink
                  to="/referral"
                  className="nav-link"
                  onClick={_toggleSidebar}
                >
                  Referral
                </HashLink>
              </li>
              <li className="nav-list social-media-links">
                <div className="social-link-item">
                  <a href="#" target="_blank">
                    <img src="images/opensea.svg" alt="" />
                  </a>
                </div>
                <div className="social-link-item">
                  <a href="#" target="_blank">
                    <img src="images/twitter.svg" alt="" />
                  </a>
                </div>
                <div className="social-link-item">
                  <a href="#" target="_blank">
                    <img src="images/discord.svg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                {walletConnected ? (
                  <div>
                    <button
                      onClick={getTronweb}
                      className="custom-btn connect-wallet-btn"
                    >
                      Connected
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={getTronweb}
                      className="custom-btn connect-wallet-btn"
                    >
                      Connect Wallet
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className="show-nav" onClick={_toggleSidebar}>
            <img src="./images/menu.svg" alt="" />
          </div>
        </nav>
      </div>
    </header>
    // {/* <!-- =====================Navigation end =========== --> */}
  );
}
export default Header;
