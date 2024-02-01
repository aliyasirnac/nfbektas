import React from 'react';
import HomeFiveSingleMedicalTab from '../../../components/HomeFiveSingleMedicalTab/HomeFiveSingleMedicalTab';
import {Baby} from 'lucide-react';

const HomeFiveMedicalTab = () => {
    return (
        <>
            <div className="medical-tab py-md-0 py-5 medical-tab-border">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="h5medical-tab-menu pos-rel">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                           href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">
                                            Çocuk ve Ergen Psikolojisi
                                        </a>
                                        <a className="nav-item nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                           href="#nav-profile" role="tab" aria-controls="nav-profile"
                                           aria-selected="false">
                                            {/*<i><img src="img/home5/tab/tab__menu__icon2.png"*/}
                                            {/*        alt=""/></i>*/}

                                            Gebe Psikolojisi
                                        </a>
                                        <a className="nav-item nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                           href="#nav-contact" role="tab" aria-controls="nav-contact"
                                           aria-selected="false">
                                            {/*<i><img src="img/home5/tab/tab__menu__icon3.png"*/}
                                            {/*        alt=""/></i>*/}
                                            Homeopati Tedavileri
                                        </a>
                                        <a
                                            className="nav-item nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                            href="#nav-contact" role="tab" aria-controls="nav-contact"
                                            aria-selected="false">
                                            {/*<i><img src="img/home5/tab/tab__menu__icon3.png"*/}
                                            {/*        alt=""/></i>*/}
                                            Bach Çiçekleri Tedavisi
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="h5medical-tab-body">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                         aria-labelledby="nav-home-tab">
                                        <HomeFiveSingleMedicalTab/>
                                    </div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                                         aria-labelledby="nav-profile-tab">
                                        <HomeFiveSingleMedicalTab/>
                                    </div>
                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                                         aria-labelledby="nav-contact-tab">
                                        <HomeFiveSingleMedicalTab/>
                                    </div>
                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                                         aria-labelledby="nav-contact-tab">
                                        <HomeFiveSingleMedicalTab/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeFiveMedicalTab;