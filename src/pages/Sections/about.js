
import React, { Fragment } from 'react';
import { useTranslation } from "react-i18next";
import { Col } from 'reactstrap';


function About() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <section className="section bg-light text-justify" id="about">
                <div className="container">
                    <div className="row margin-t-30">
                        <Col lg="6" className="margin-t-20">
                            <div className="services-box">
                                <div className="media">
                                    <i className="pe-7s-diamond px-2"></i>
                                    <div className="media-body ml-4">
                                        <h4>{t("Vision")}</h4>
                                        <p className="pt-2 text-muted">{t("Becoming the second home for the Palestinian & Arab families in Malaysia.")}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" className="margin-t-20">
                            <div className="services-box">
                                <div className="media">
                                    <i className="pe-7s-plane px-2"></i>
                                    <div className="media-body ml-4">
                                        <h4>{t("Mission")}</h4>
                                        <p className="pt-2 text-muted">{t("Pioneering Women & Children Support in Malaysia Through Creative & Fruitful Methods.")}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" className="margin-t-20">
                            <div className="services-box">
                                <div className="media">
                                    <i className="pe-7s-arc px-2"></i>
                                    <div className="media-body ml-4">
                                        <h4>{t("Goals")}</h4>
                                        <p className="pt-2 text-muted">
                                            <ul className="text-muted margin-t-30 features-item-list">
                                                <li className="">{t("Effectively participate in local activities & events.")}</li>
                                                <li className="">{t("Build the relations with Malaysian women & children associations.")}</li>
                                                <li className="">{t("Qualify & train adult members in organizational work & social services.")}</li>
                                                <li className="">{t("Enhance the profssional & craftsmanship skills.")}</li>
                                                <li className="">{t("Provoke & embrace children skills.")}</li>
                                                <li className="">{t("Organize cultural, social & recreational events.")}</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" className="margin-t-20">
                            <div className="services-box">
                                <div className="media">
                                    <i className="pe-7s-umbrella px-2"></i>
                                    <div className="media-body ml-4">
                                        <h4>{t("Values")}</h4>
                                        <p className="pt-2 text-muted">
                                            <ul className="text-muted margin-t-30 features-item-list">
                                                <li className="">{t("Initiation")}</li>
                                                <li className="">{t("Creativeness")}</li>
                                                <li className="">{t("Collaboration")}</li>
                                                <li className="">{t("Institutionalize")}</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
export default About;


