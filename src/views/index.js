import React, { Fragment, useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

//Layout css
import '../assets/css/colors/red.css';
import Wave1Img from '../assets/images/wave-shape/wave1.png';
import Wave2Img from '../assets/images/wave-shape/wave2.png';
import Wave3Img from '../assets/images/wave-shape/wave3.png';

// Layouts
import FooterAlt from './Layouts/footer-alt';
import Header from './Layouts/header';

// Content
import About from './Sections/about';
import ContactUs from './Sections/contact-us';
import Intro from './Sections/intro';
import News from './Sections/news';
import Partners from './Sections/partners';
import Team from './Sections/team';

function Index() {
    const { t, i18n } = useTranslation();
    const [font, setFont] = useState("FontEn")

    useEffect(() => {
        i18n.dir() === 'ltr' ? setFont("FontEn") : setFont("FontAr")
    }, [t, i18n])

    useEffect(() => {

        const scrollNavigation = () => {
            var doc = document.documentElement;
            var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
            if (top > 80) {
                document.getElementById('nav-bar').classList.add('sticky-dark');
                document.getElementById('is-sticky').classList.add('is-sticky');
            }
            else {
                document.getElementById('nav-bar').classList.remove('sticky-dark');
                document.getElementById('is-sticky').classList.remove('is-sticky');
            }
        }

        const componentDidMount = () => {
            document.body.classList = "";
            window.addEventListener("scroll", scrollNavigation, true);
            //   Waves.init();
        }

        componentDidMount()

    }, [])

    return (
        <Fragment>

            {/*  Header */}
            <Header />

            {/* Home Section */}
            <section className="section bg-home home-half" id="home" >
                <div className="bg-overlay"></div>
                <div className="container" style={{ padding: "15vh 0 15vh 0" }}>
                    <div className="row">
                        <div className="col-lg-12 text-white text-center">
                            <div style={{ fontFamily: font }}>
                                <h1 className="home-title">{t("Al-Zaytouna Club")}</h1>
                                <h4 className="home-small-title">{t("For Women & Children")}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wave-effect wave-anim">
                    <div className="waves-shape shape-one">
                        <div className="wave wave-one" style={{ backgroundImage: `url(${Wave1Img})` }}></div>
                    </div>
                    <div className="waves-shape shape-two">
                        <div className="wave wave-two" style={{ backgroundImage: `url(${Wave2Img})` }}></div>
                    </div>
                    <div className="waves-shape shape-three">
                        <div className="wave wave-three" style={{ backgroundImage: `url(${Wave3Img})` }}></div>
                    </div>
                </div>

            </section>

            {/* Intro */}
            <Intro />

            {/* About */}
            <About />

            {/* Team */}
            <Team />

            {/* Partners */}
            <Partners />

            {/* News */}
            <News />

            {/* ContactUs */}
            <ContactUs />

            {/* Footer Alt */}
            <FooterAlt />

        </Fragment >
    );
}

export default Index;


