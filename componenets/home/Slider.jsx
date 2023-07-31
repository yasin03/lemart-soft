import Link from "next/link";
import React from "react";

const Slider = () => {
  return (
    <>
      {/* page title start */}
      <div
        className="banner-area bg-relative banner-area-2 bg-cover"
        style={{ backgroundImage: 'url("./img/bg/8.png")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="banner-inner pe-xl-5">
                <h6
                  className="subtitle wow animated fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  Gelecek için tasarlıyoruz
                </h6>
                <h2
                  className="title wow animated fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                >
                  Dijital Dünyada <span>LemartSoft</span> ile Öne Geçin
                </h2>
                <p
                  className="content pe-xl-5 wow animated fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.5s"
                >
                  "Akıllı yazılım çözümleriyle dönüşümünüzü hızlandırın.
                  LemartSoft, özelleştirilebilir web siteleri, güçlü mobil
                  uygulamalar ve kusursuz yazılım projeleri sunar. İşletmenizi
                  dijital dünyada öne çıkarın ve geleceği şekillendirmek için
                  bugün adım atın."
                </p>
                <Link
                  className="btn btn-border-base wow animated fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                  href="/contact"y
                >
                  Daha Fazlası için <i className="fa fa-plus" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-9 wow animated fadeInRight"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <div className="banner-thumb-2 mt-4 mt-lg-0">
                <img
                  className="banner-animate-img banner-animate-img-4"
                  src="img/banner-2/3.png"
                  alt="img"
                />
                <div className="main-img-wrap">
                  <img
                    className="banner-animate-img banner-animate-img-1 left_image_bounce"
                    src="img/banner-2/4.png"
                    alt="img"
                  />
                  <img
                    className="banner-animate-img banner-animate-img-2 left_image_bounce"
                    src="img/banner-2/5.png"
                    alt="img"
                  />
                  <img
                    className="banner-animate-img banner-animate-img-3 top_image_bounce"
                    src="img/banner-2/2.png"
                    alt="img"
                  />
                  <img
                    className="main-img"
                    src="img/banner-2/1.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};

export default Slider;
