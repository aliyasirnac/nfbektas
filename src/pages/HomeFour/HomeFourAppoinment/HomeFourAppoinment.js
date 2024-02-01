import React from 'react';
import { Link } from 'react-router-dom';
import SingleAppoinmentInputField from '../../../components/SingleAppoinmentInputField/SingleAppoinmentInputField';

const HomeFourAppoinment = () => {
   return (
      <>
         <section className=" pos-rel">
            {/*<div className="h4appoinment-thumb"></div>*/}
            <div className="container-fluid fix">
               <div className="">
                  <div className="h4appoinment-wrapper">
                     <div className="about-title mb-50">
                        <h5 className="pink-color">Randevu Al</h5>
                        <h1>Terapiye başlamak için <br/> Randevu alın</h1>
                     </div>
                     <form className="h4appoinment-form mb-15">
                        <div className="row">

                           <SingleAppoinmentInputField placeholderText="İsminizi giriniz" icon="fal fa-user" />
                           <SingleAppoinmentInputField placeholderText="E-posta adresinizi giriniz" icon="far fa-envelope-open" />
                           <SingleAppoinmentInputField placeholderText="Telefon numaranızı giriniz" icon="fal fa-phone" />
                           {/*<SingleAppoinmentInputField placeholderText="Choose A Services" icon="fal fa-file-medical-alt" />*/}

                        </div>
                     </form>
                     <div className="h4appoinment-button">
                        <Link to="/contact" className="primary_btn btn-icon ml-0"  style={{animationDelay:'0.6s'}} tabIndex="0"><span>+</span>Randevu al</Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeFourAppoinment;