import React, { Fragment, useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import LogoAr from '../../assets/images/LogoArW.png';
import LogoEn from '../../assets/images/logoEnW.png';
import ScrollspyNav from './Scrollspy';

function Header() {

    const [isOpen, setIsOpen] = useState(false)
    const { t, i18n } = useTranslation();
    const [logo, setLogo] = useState(LogoEn)

    useEffect(() => {
        i18n.dir() === 'ltr' ? setLogo(LogoEn) : setLogo(LogoAr)
    }, [t, i18n])

    const languageChange = () => {
        if (i18n.language === "en") {
            i18n.changeLanguage("ar");
        } else {
            i18n.changeLanguage("en");
        }
    };

    return (
        <Fragment>
            <div id="is-sticky">
                <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar">
                    <div className="container">
                        <Link className="navbar-brand logo text-uppercase" to="/" style={{ width: "25%" }}>
                            <img src={logo} alt="macbook" className="img-fluid" />
                        </Link>

                        <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)} type="button">
                            <i className="mdi mdi-menu"></i>
                        </button>

                        <div className={isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display: isOpen ? "inline-grid" : "" }} id="navbarCollapse">

                            <ScrollspyNav
                                scrollTargetIds={["home", "intro", "about", "team", "partners", "news", "contact"]}
                                activeNavClass="active"
                                scrollDuration="800"
                                headerBackground="true"
                                className={isOpen ? "navbar-nav ml-0 float-left" : "navbar-nav navbar-center"} >

                                <ul className={isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                    <li className="nav-item active"><a href="#home" className="nav-link">{t("Home")}</a></li>
                                    <li className="nav-item"><a href="#intro" className="nav-link">{t("Intro")}</a></li>
                                    <li className="nav-item"><a href="#about" className="nav-link">{t("About")}</a></li>
                                    <li className="nav-item"><a href="#team" className="nav-link">{t("Team")}</a> </li>
                                    <li className="nav-item"><a href="#partners" className="nav-link">{t("Partners")}</a> </li>
                                    <li className="nav-item"><a href="#news" className="nav-link">{t("News")}</a></li>
                                    <li className="nav-item"><a href="#contact" className="nav-link">{t("Contact")}</a> </li>
                                    <li className="nav-item"><Link onClick={() => languageChange()} className="nav-link">{t("Other Lang")}</Link> </li>
                                </ul>

                            </ScrollspyNav>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment >
    );
}

export default Header;


