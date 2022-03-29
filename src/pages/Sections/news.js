
import React, { Fragment } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import img3 from '../../images/blog/img-3.jpg';


function News() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <section className="section bg-light" id="news">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="section-title text-center">{t("Latest Activites")}</h1>
                            <div className="section-title-border margin-t-20"></div>
                            <p className="section-subtitle text-muted text-center font-secondary padding-t-30">{t("Follow our social media pages for latest works & activities")}</p>
                        </div>
                    </div>
                    <div className="row margin-t-30" style={{ fontSize: "20vh" }} >
                        <div className="col-lg-4">
                            <div className="blog-box margin-t-30 text-center" >
                                <a target="_blank" href="https://facebook.com/AlzaytounaClub"><i className="mdi mdi-facebook"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-box margin-t-30 text-center" >
                                <a target="_blank" href="https://www.instagram.com/zaytounaclub"><i className="mdi mdi-instagram text-warning"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-box margin-t-30 text-center">
                                <a target="_blank" href="https://www.youtube.com/channel/UC-ymAKgtbmumecjBHTdnzZQ"><i className="mdi mdi-youtube text-danger"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment >
    );
}

export default News;


