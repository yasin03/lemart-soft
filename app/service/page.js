import PageTitle from "@/componenets/common/PageTitle";
import React from "react";

const Page = () => {
  return (
    <>
      <PageTitle title="Hizmetlerimiz" />
      {/* service area start */}
      <div className="service-area bg-relative pd-top-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-4">
                  <img src="img/icon/17.svg" alt="img" />
                </div>
                <div className="details">
                  <h5 className="mb-3">Web Tasarımı ve Geliştirme</h5>
                  <p className="content mb-3">
                    LemartSoft olarak, modern ve etkileyici web tasarımlarıyla
                    işletmenizin dijital varlığını güçlendiriyoruz.
                    İhtiyaçlarınıza özel web siteleri oluşturarak markanızı
                    çevrimiçi platformlarda ön plana çıkarıyoruz.
                  </p>
                  <a className="read-more-text" href="service-details.html">
                    Read More <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="img/icon/16.svg" alt="img" />
                </div>
                <div className="details">
                  <h5 className="mb-3">Mobil Uygulama Geliştirme</h5>
                  <p className="content mb-3">
                    Akıllı mobil uygulamalarımızla işletmenizi mobil dünyada
                    etkileyici bir şekilde temsil ediyoruz. Kullanıcı dostu
                    arayüzler ve özelleştirilmiş işlevlerle müşterilerinize
                    benzersiz bir mobil deneyim sunmanızı sağlıyoruz.
                  </p>
                  <a className="read-more-text" href="service-details.html">
                    Read More <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="img/icon/20.svg" alt="img" />
                </div>
                <div className="details">
                  <h5 className="mb-3">Yazılım Çözümleri ve Danışmanlık</h5>
                  <p className="content mb-3">
                    Yazılım çözümlerimiz ve danışmanlık hizmetlerimizle
                    işletmenizin dijital dönüşümünü destekliyoruz.
                    İhtiyaçlarınıza uygun yazılım projeleri geliştirerek
                    verimliliği artırmanıza ve rekabette öne çıkmanıza yardımcı
                    oluyoruz.
                  </p>
                  <a className="read-more-text" href="service-details.html">
                    Read More <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default Page;
