import React from "react";

const AboutSection = () => {
  return (
    <>
      {/* about area start */}
      <div className="about-area pd-top-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-thumb-inner pe-xl-5 me-xl-5 wow animated fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <img
                  className="animate-img-1 top_image_bounce"
                  src="img/about/2.png"
                  alt="img"
                />
                <img
                  className="animate-img-2 left_image_bounce"
                  src="img/about/3.png"
                  alt="img"
                />
                <img
                  className="animate-img-3 top_image_bounce"
                  src="img/banner/5.svg"
                  alt="img"
                />
                <img
                  className="main-img"
                  src="img/about/1.png"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6 wow animated fadeInRight"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <div className="section-title mt-5 mt-lg-0">
                <h6 className="sub-title">HAKKIMIZDA</h6>
                <h2 className="title">
                  LemartSoft - <span>Dijital Dönüşümünüz</span> İçin Kusursuz
                  Yazılım Hizmetleri Sunar
                </h2>
                <p className="content mb-4 mb-xl-5">
                  "Dijital dünyada öne çıkmak için LemartSoft'un sunduğu en iyi,
                  en kaliteli ve modern hizmetlerle tanışın. Uzman ekibimiz,
                  yenilikçi çözümler ve son teknolojilerle işletmenizin
                  sınırlarını zorluyor. Özelleştirilebilir web siteleri, akıllı
                  mobil uygulamalar ve kusursuz yazılım projeleri ile işinizi
                  bir adım öne taşıyoruz. Size özel stratejilerimiz ve
                  etkileyici tasarımlarımızla rekabetinizi geride bırakın.
                  Geleceğe hazır olun, LemartSoft ile işletmenizi dönüştürün."
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <img src="img/icon/3.png" alt="img" />
                      </div>
                      <div className="details">
                        <h5>Özelleştirilmiş Çözümler</h5>
                        <p>
                          LemartSoft olarak, işinizi özenle şekillendiriyoruz.
                          İhtiyaçlarınızı anlayarak özelleştirilmiş çözümler
                          sunuyoruz ve sizin hedeflerinizi gerçekleştirmek için
                          elimizden geleni yapıyoruz.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <img src="img/icon/2.png" alt="img" />
                      </div>
                      <div className="details">
                        <h5>İşbirliği ve İletişim Odaklı</h5>
                        <p>
                          İşbirliği ve iletişimde mükemmeliyeti benimsiyoruz.
                          Sizinle yakın bir işbirliği içinde çalışarak,
                          ihtiyaçlarınızı anlamak ve beklentilerinizi aşmak için
                          çaba gösteriyoruz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about area end */}
    </>
  );
};

export default AboutSection;
