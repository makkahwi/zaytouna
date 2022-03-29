
import React, { Fragment } from 'react';
import { useTranslation } from "react-i18next";
import img1 from '../../images/team/img-1.jpg';
import img2 from '../../images/team/img-2.jpg';
import img3 from '../../images/team/img-3.jpg';
import img4 from '../../images/team/img-4.jpg';

function Team() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <section className="section" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-title mx-auto text-center">
                                <h2 className="font-weight-light">{t("Our Team")}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row margin-t-50">
                        <div className="col-lg-3 col-sm-6">
                            <div className="team-box text-center">
                                <div className="team-wrapper">
                                    <div className="team-member">
                                        <img alt="" src={img1} className="img-fluid rounded" />
                                    </div>
                                </div>
                                <h4 className="team-name">{t("Julia Johnson")}</h4>
                                <p className="text-uppercase team-designation">{t("CEO")}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="team-box text-center">
                                <div className="team-wrapper">
                                    <div className="team-member">
                                        <img alt="" src={img2} className="img-fluid rounded" />
                                    </div>
                                </div>
                                <h4 className="team-name">{t("Elaine Stclair")}</h4>
                                <p className="text-uppercase team-designation">{t("Administrative Affairs")}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="team-box text-center">
                                <div className="team-wrapper">
                                    <div className="team-member">
                                        <img alt="" src={img3} className="img-fluid rounded" />
                                    </div>
                                </div>
                                <h4 className="team-name">{t("Wanda Arthur")}</h4>
                                <p className="text-uppercase team-designation">{t("Public Relations")}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="team-box text-center">
                                <div className="team-wrapper">
                                    <div className="team-member">
                                        <img alt="" src={img4} className="img-fluid rounded" />
                                    </div>
                                </div>
                                <h4 className="team-name">{t("Angelina Stemple")}</h4>
                                <p className="text-uppercase team-designation">{t("Activities Manager")}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </Fragment >
    );
}

export default Team;


