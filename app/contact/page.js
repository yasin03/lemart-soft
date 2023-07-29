import PageTitle from "@/componenets/common/PageTitle";
import React from "react";

const Page = () => {
  return (
    <>
      <PageTitle title="İletişim" />
      {/* contact area start */}
      <div className="contact-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="contact-page-inner bg-gray">
            <div className="section-title mb-4 pb-2">
              <h2 className="title">Bizimle İletişime Geçin</h2>
              <p className="content mb-0">
                LemartSoft ile iletişime geçmek için doğru yerdesiniz.
                Sorularınızı sormak, işbirliği tekliflerinde bulunmak veya
                hizmetlerimizle ilgili daha fazla bilgi almak için aşağıdaki
                iletişim bilgilerimizi kullanabilirsiniz. Sizden haber almak
                için sabırsızlanıyoruz! Ayrıca, aşağıdaki iletişim formunu
                doldurarak da bize mesaj gönderebilirsiniz. Size en kısa sürede
                geri dönüş yapacak ve ihtiyaçlarınıza uygun çözümler sunmaktan
                memnuniyet duyacağız. LemartSoft olarak, müşterilerimizle güçlü
                bir iletişim kurmayı ve ihtiyaçlarını anlamayı önemsiyoruz. Size
                en iyi hizmeti sunabilmek için buradayız. Bize ulaşın ve
                işletmenizin başarısı için birlikte çalışalım!"
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="single-input-inner">
                  <input type="text" placeholder="Ad Soyad" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="single-input-inner">
                  <input type="email" placeholder="Email" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="single-input-inner">
                  <input type="phone" placeholder="Telefon" />
                </div>
              </div>
              <div className="col-12">
                <div className="single-input-inner">
                  <textarea placeholder="Mesajınız" defaultValue={""} />
                </div>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-base border-radius-5">Gönder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact area end */}

      <>
        {/* contact list start */}
        <div className="contact-page-list">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 ">
                <div className="media single-contact-list shadow">
                  <div className="media-left">
                    <img src="img/icon/13.svg" alt="img" />
                  </div>
                  <div className="media-body">
                    <h5>Bizimle İletişime Geçin!</h5>
                    <a href="tel:+905554692447">
                      {" "}
                      <h6>0 555 469 24 47</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 ">
                <div className="media single-contact-list shadow">
                  <div className="media-left">
                    <img src="img/icon/14.svg" alt="img" />
                  </div>
                  <div className="media-body">
                    <h5>Email</h5>
                    <a href="mailto:lemartsoft@gmail.com">
                      <h6>lemartsoft@gmail.com</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="media single-contact-list shadow">
                  <div className="media-left">
                    <img src="img/icon/15.svg" alt="img" />
                  </div>
                  <div className="media-body">
                    <h5>Adres</h5>
                    <h6>Karaman Mah. Nergis Cad. No:4/B Afyonkarahisar</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact list start */}
        {/* map start */}
        <div className="contact-g-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26370.384577953533!2d30.50561583282432!3d38.7570234243583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cf17cffbd0a90f%3A0xed0817af585bbdb0!2sT%C3%BCrk%20Reklam!5e0!3m2!1str!2str!4v1688804484648!5m2!1str!2str"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        {/* map end */}
      </>
    </>
  );
};

export default Page;
