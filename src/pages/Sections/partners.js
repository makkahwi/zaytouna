
import React, { Fragment } from 'react';
import { useTranslation } from "react-i18next";
import { Col, Row } from 'reactstrap';
import img1 from '../../images/clients/1.png';
import img2 from '../../images/clients/2.png';
import img3 from '../../images/clients/3.png';
import img4 from '../../images/clients/4.png';

function Partners() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <section className="section" id="partners">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-title mx-auto text-center">
                                <h2 className="font-weight-light">{t("Our Partners")}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="padding-t-30">
                        <Row>
                            <Col md="3">
                                <div className="client-images my-3 my-md-0">
                                    <img src={img1} alt="logo-img" className="mx-auto img-fluid d-block" />
                                </div>
                            </Col>

                            <Col md="3">
                                <div className="client-images my-3 my-md-0">
                                    <img src={img2} alt="logo-img" className="mx-auto img-fluid d-block" />
                                </div>
                            </Col>

                            <Col md="3">
                                <div className="client-images my-3 my-md-0">
                                    <img src={img3} alt="logo-img" className="mx-auto img-fluid d-block" />
                                </div>
                            </Col>

                            <Col md="3">
                                <div className="client-images my-3 my-md-0">
                                    <img src={img4} alt="logo-img" className="mx-auto img-fluid d-block" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </Fragment >
    );
}

export default Partners;


