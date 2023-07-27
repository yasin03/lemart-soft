import React from 'react'

const ContactSection = () => {
  return (
    <>
      {/* contact-inner-1 start */}
      <div className="contact-area">
        <div className="container">
          <div className="contact-inner-1">
            <img
              className="top_image_bounce animate-img-1"
              src="img/banner/2.png"
              alt="img"
            />
            <img
              className="top_image_bounce animate-img-2"
              src="img/about/6.png"
              alt="img"
            />
            <div className="row">
              <div
                className="col-lg-8 wow animated fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <img className="w-100" src="img/bg/4.png" alt="img" />
              </div>
              <div
                className="col-lg-4 wow animated fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <div className="section-title mb-0">
                  <h6 className="sub-title">BİZİMLE İLETİŞİME GEÇİN</h6>
                  <h2 className="title">
                    Vizyonunuzu <span>Hayata</span> Geçiriyoruz
                  </h2>
                  <p className="content">
                    LemartSoft ile işbirliği için hemen bağlantı kurun. Size
                    özel çözümlerimizle işinizi bir adım öne taşımak için
                    sabırsızlıkla bekliyoruz.
                  </p>
                  <form className="mt-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Ad Soyad" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Telefon" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Başlık" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <textarea placeholder="Mesaj" defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-12">
                        <a
                          className="btn btn-black mt-0 w-100 border-radius-5"
                          href="#"
                        >
                          Gönder
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact-inner-1 end */}
    </>
  );
}

export default ContactSection