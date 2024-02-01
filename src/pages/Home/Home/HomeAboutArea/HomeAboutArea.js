import React from "react";
import { Link } from "react-router-dom";

const HomeAboutArea = () => {
  return (
    <>
      <section className="about-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5 about_left">
              {/* <div className="medical-icon-brand-2"> */}
              {/*   <img src="img/about/medical-brand-icon-border.png" alt="" /> */}
              {/* </div> */}
              <div className="about-left-side pos-rel mb-30">
                <div className="about-front-img">
                  <img src="img/about/about-img.jpg" alt="" />
                </div>
                <div className="about-shape">
                  <img src="img/about/about-shape.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-right-side pt-55 mb-30">
                <div className="about-title mb-20">
                  <h5>Hakkımda</h5>
                  <h1>Fatıma Zehra Bektaş Kimdir?</h1>
                </div>
                <div className="about-text">
                  <p>
                    Psikolog Fatıma Zehra Bektaş Ankara’da doğdu. Bilkent
                    Üniversitesi Psikoloji bölümünü yüksek onur öğrencisi olarak
                    5.likle bitirdi. Üniversitede okurken çeşitli gönüllülük
                    projelerinde yer aldı. Aynı zamanda çocuk gelişim
                    labaratuvarında 2 yıl boyunca görev aldı. Lina Kadın Sağlığı
                    Merkezinde yaptığı stajda Uzm. Psikologlar ile birlikte
                    ergenlik çağında olan ve anksiyete bozukluğundan dolayı
                    problemler yaşayan danışanlar takip edildi.{" "}
                    <Link to={"/hakkimda"}>Devamı için tıkla</Link>
                  </p>
                  <br />
                </div>
                <div className="about-author d-flex align-items-center">
                  <div className="author-ava">
                    <img src="img/about/author-ava.png" alt="" />
                  </div>
                  <div className="author-desination">
                    <h4>Fatıma Zehra Bektaş</h4>
                    <h6>Kurucu</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAboutArea;

