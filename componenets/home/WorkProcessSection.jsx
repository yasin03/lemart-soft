import React from 'react'

const WorkProcessSection = () => {
  return (
    <>
      {/* work-process-area start */}
      <div className="work-process-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">BASİT VE ETKİLİ ÇALIŞMA SÜRECİMİZ</h6>
            <h2 className="title">
              Sorunsuz ve Yaratıcı Çalışma Sürecimizle
              <span>Başarıyı</span> Yakalayın
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="img/icon/9.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">Adım 01</p>
                  <h5 className="mb-3">Analiz Etme</h5>
                  <p className="content">
                    Projenizi analiz ediyor, hedeflerinizi belirliyor ve
                    ihtiyaçlarınızı anlıyoruz. Bu adımı, size en iyi çözümleri
                    sunmak için gerekli olan sağlam bir temel oluşturmak için
                    gerçekleştiriyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="img/icon/10.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">Adım 02</p>
                  <h5 className="mb-3">Tasarlama ve Planlama</h5>
                  <p className="content">
                    Dikkatli bir tasarım ve planlama süreciyle projenizi hayata
                    geçiriyoruz. İhtiyaçlarınıza ve marka kimliğinize uygun
                    özgün tasarımlar oluşturarak size özelleştirilmiş bir
                    deneyim sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="img/icon/11.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">Adım 03</p>
                  <h5 className="mb-3">Geliştirme ve Uygulama</h5>
                  <p className="content">
                    Deneyimli ekiplerimiz, tasarımınızı hayata geçirmek için
                    ileri teknolojileri kullanarak geliştirme ve uygulama
                    sürecini yürütüyor. Her aşamada kalite ve işlevsellik
                    standartlarını sağlamak için titizlikle çalışıyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="img/icon/12.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">Adım 04</p>
                  <h5 className="mb-3">Test ve Teslimat</h5>
                  <p className="content">
                    Tamamlanan projenizi kapsamlı bir şekilde test ediyor ve
                    sizin için en iyi sonuçları sağlamak için gerekli
                    düzeltmeleri yapıyoruz. Son olarak, projenizi sizinle
                    birlikte değerlendiriyor ve zamanında teslim ediyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* work-process-area end */}
    </>
  );
}

export default WorkProcessSection