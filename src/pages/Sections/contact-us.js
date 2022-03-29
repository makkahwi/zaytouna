
import { AvField, AvForm } from 'availity-reactstrap-validation';
import React, { Fragment } from 'react';
import { useTranslation } from "react-i18next";

function ContatUs() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <section className="section text-justify" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="section-title text-center">{t("Get In Touch")}</h1>
                            <div className="section-title-border margin-t-20"></div>
                            <p className="section-subtitle text-muted text-center font-secondary padding-t-30">{t("We thrive with any contribution that helps us to move forward.")}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mt-4 pt-4">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <p className="mt-4"><span className="h5">{t("Email")}</span><br /> <span className="text-muted d-block mt-2"><a href="mailto:ZaytunahClub@Gmail.com">ZaytunahClub@Gmail.com</a></span></p>
                                    </div>
                                    <div className="col-lg-4">
                                        <p className="mt-4"><span className="h5">{t("Phone No")}</span><br /> <span className="text-muted d-block mt-2"><a href="https://wa.me/60182809046" target="_blank">+60-18-280-9046</a></span></p>
                                    </div>
                                    <div className="col-lg-4">
                                        <p className="mt-4"><span className="h5">{t("Working Hours")}</span><br /> <span className="text-muted d-block mt-2">{t("Mon")} - {t("Fri")} | 9:00{t("AM")} - 5:00{t("PM")}</span></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="mt-4 pt-4">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497.9508407489929!2d101.720634!3d3.197562!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3649f8e1335a649f!2salzaytouna%20club!5e0!3m2!1sen!2sus!4v1632736265651!5m2!1sen!2sus" width="100%" height="250" allowfullscreen="" loading="lazy"></iframe>
                                <p className="mt-4"><span className="h5">{t("Address")}</span><br /> <a target="_blank" href="https://maps.google.com/maps?ll=3.197562,101.720634&z=20&t=m&hl=en&gl=US&mapclient=embed&cid=3911931397460878495"> <span className="text-muted d-block mt-2">No. 23-1, Jalan 10/23a, Medan Makmur<br />53200 Kuala Lumpur</span></a></p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-form mt-4 pt-4">
                                <div id="message"></div>
                                <AvForm id="contact-form" onSubmit={e => console.log(e)}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group mt-2">
                                                <AvField type="text" name="name" className="form-control" placeholder={t("Your name*")} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group mt-2">
                                                <AvField type="email" name="email" className="form-control" placeholder={t("Your email*")} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group mt-2">
                                                <AvField type="text" name="subject" className="form-control" placeholder={t("Your Subject*")} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group mt-2">
                                                <AvField type="textarea" name="comments" id="comments" rows="4" className="form-control" placeholder={t("Your message...")} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 text-right">
                                            <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value={t("Send Message")} />
                                            <div id="simple-msg"></div>
                                        </div>
                                    </div>
                                </AvForm>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment >
    );
}

export default ContatUs;


