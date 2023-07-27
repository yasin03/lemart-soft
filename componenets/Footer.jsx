import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      {/* footer area start */}
      <footer className="footer-area footer-area-2 bg-gray mt-0 pd-top-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img src="img/logo.png" alt="img" />
                </div>
                <div className="details">
                  <p>
                    İnovasyonla Geleceği Şekillendiriyoruz! Araştırma,
                    yaratıcılık ve teknolojiyi bir araya getirerek, sınırları
                    zorluyoruz. Müşterilerimize yenilikçi çözümler sunarak,
                    işletmelerin büyümesine ve rekabet avantajı elde etmesine
                    destek oluyoruz. LemartSoft olarak, her adımda özgün
                    fikirlerimiz ve en son teknolojileri kullanarak inovasyona
                    liderlik ediyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Sayfalar</h4>
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fas fa-chevron-right" /> Ana Sayfa
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <i className="fas fa-chevron-right" /> Hakkımızda
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <i className="fas fa-chevron-right" /> Hizmetlerimiz
                    </Link>
                  </li>
                  <li>
                    <Link href="/project">
                      <i className="fas fa-chevron-right" /> Projelerimiz
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fas fa-chevron-right" /> İletişim
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Hizmetlerimiz</h4>
                <ul>
                  <li>
                    <Link href="/service">
                      <i className="fas fa-chevron-right" /> UI/UX Tasarım
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <i className="fas fa-chevron-right" /> Web Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <i className="fas fa-chevron-right" /> Web Sitesi
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <i className="fas fa-chevron-right" /> Mobil Uygulama
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <i className="fas fa-chevron-right" /> Yazılım Çözümleri
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Bizimle İletişime Geçin!</h4>
                <div className="widget widget_contact">
                  <ul className="details">
                    <li>
                      <i className="fa fa-map-marker-alt" />
                      Karaman Mah. No:4/B Merkez/AFYONKARAHİSAR
                    </li>
                    <li className="mt-3">
                      <a href="tel:+905554692447">
                        <i className="fa fa-phone-alt" />
                        +90 (555) 469 24 47
                      </a>
                    </li>
                    <li className="mt-2">
                      <a href="mailto:lemartsoft@gmail.com">
                        <i className="fas fa-envelope" />
                        lemartsoft@gmail.com
                      </a>
                    </li>
                  </ul>
                  <ul className="social-media mt-4">
                    <li>
                      <a href="https://www.instagram.com/lemartsoft/">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/lemartsoft/">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/lemartsoft/">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/lemartsoft/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© LemartSoft 2023 | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-lg-end">
                <a href="/">Trams &amp; Condition</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>
  );
};

export default Footer;
