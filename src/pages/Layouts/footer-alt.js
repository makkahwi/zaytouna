
import React, { Fragment } from 'react';
import { useTranslation } from "react-i18next";

function FooterAlt() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <div className="footer-alt">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="float-left pull-none">
                                <p className="copy-rights text-muted mb-3 mb-sm-0">{new Date().getFullYear()} © {t("Al-Zaytouna Club")} {t("For Women & Children")} | {t("Designed & Developed by")} <a target="_blank" href="https://arromi.net">{t("Arromi Creatives")}</a></p>
                            </div>
                            <div className="float-right pull-none ">
                                <ul className="list-inline social m-0">
                                    <li className="list-inline-item"><a target="_blank" href="https://facebook.com/AlzaytounaClub" className="social-icon"><i className="mdi mdi-facebook"></i></a></li>
                                    <li className="list-inline-item"><a target="_blank" href="https://www.youtube.com/channel/UC-ymAKgtbmumecjBHTdnzZQ" className="social-icon"><i className="mdi mdi-youtube"></i></a></li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default FooterAlt;


