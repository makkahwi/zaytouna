
import React, { Fragment, useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import LogoAr from '../../images/LogoAr.png';
import LogoEn from '../../images/logoEn.png';


function Intro() {
    const { t, i18n } = useTranslation();
    const [logo, setLogo] = useState(LogoEn)

    useEffect(() => {
        i18n.dir() === 'ltr' ? setLogo(LogoEn) : setLogo(LogoAr)
    }, [t, i18n])

    return (
        <Fragment>
            <section className="section" id="intro">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="features-box mt-5 mt-lg-0 text-justify">
                                <h3>{t("A non-profit club for cultural, educational and social affairs")}</h3>
                                <p className="text-muted text-justify web-desc">{t("Founded in 2016 by an initiative of female academics, intellectuals and activists in women affairs. The first club in Malaysia which cares for the affairs of Palestinian and Arab women & children, works to enhance females adminstranal, technical and professional qualification, beside embracing and encouraging the creative capabilities of children throughout various kinds of activities in collaboration with a group of professionals in the field.")}</p>
                                {/* <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                                    <li className="">{t("We put a lot of effort in design.")}</li>
                                    <li className="">{t("The most important ingredient of successful website.")}</li>
                                    <li className="">{t("Submit Your Orgnization.")}</li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="features-img mx-auto mr-lg-0 text-center">
                                <img src={logo} alt="macbook" className="img-fluid" style={{ width: "70%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    );
}

export default Intro;


