import Head from "next/head";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      {/* navbar start */}
      <nav className="navbar navbar-area navbar-area-2 navbar-expand-lg">
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <button
              className="menu toggle-btn d-block d-lg-none"
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo">
            <Link href="/">
              <img src="img/logo.png" alt="LemartSoft" />
            </Link>
          </div>
         
          <div className="collapse navbar-collapse" id="itech_main_menu">
            <ul className="navbar-nav menu-open text-lg-center ps-lg-5">
              <li>
                <Link href="/">Ana Sayfa</Link>
              </li>
              <li>
                <Link href="/about">Hakkımızda</Link>
              </li>
              <li>
                <Link href="/service">Hizmetlerimiz</Link>
              </li>
              <li>
                <Link href="/project">Projelerimiz</Link>
              </li>
              <li>
                <Link href="/contact">İletişim</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop align-self-center">
            <a className="navbar-phone" href="tel:+905554692447">
              <span className="icon">
                <img src="img/icon/1.png" alt="img" />
              </span>
              <span>Yazılıma mı ihtiyacınız var?</span>
              <h5>+90(555) 469 24 47</h5>
            </a>
          </div>
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
};

export default Header;
