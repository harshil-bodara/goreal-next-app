import React from 'react'

export default function ContactUs() {
  return (
    <div>
        <div className="main-content">
            <div className="rwt-contact-area rn-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb--40">
                            <div className="section-title text-center" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                                <h2 className="title w-600 mb--20">Contact Us</h2>
                                <p>Get in touch with us today, we’d love to hear from you!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row row--15" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                        <div className="col-lg-12">
                            <div className="rn-contact-address mt_dec--30">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="rn-address">
                                            <div className="icon">
                                                <i className="feather-headphones"></i>
                                            </div>
                                            <div className="inner">
                                                <h4 className="title">Contact Phone Number</h4>
                                                <p><a href="#">+10988487XXX</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="rn-address">
                                            <div className="icon">
                                                <i className="feather-mail"></i>
                                            </div>
                                            <div className="inner">
                                                <h4 className="title">Our Email Address</h4>
                                                <p><a href="mailto:admin@goread.io">admin@goread.io</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="rn-address">
                                            <div className="icon">
                                                <i className="feather-map-pin"></i>
                                            </div>
                                            <div className="inner">
                                                <h4 className="title">Our Location</h4>
                                                <p> USA/UK</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--40 row--15"  data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                        <div className="col-lg-7">
                            <form className="contact-form-1 rwt-dynamic-form" id="contact-form" method="POST" action="mail.php">
                                <div className="form-group">
                                    <input type="text" name="contact-name" id="contact-name" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" id="contact-email" name="contact-email" placeholder="Your Email" />
                                </div>

                                <div className="form-group">
                                    <input type="text" id="subject" name="subject" placeholder="Your Subject" />
                                </div>

                                <div className="form-group">
                                    <textarea name="contact-message" id="contact-message" placeholder="Your Message"></textarea>
                                </div>

                                <div className="form-group">
                                    <button name="submit" type="submit" id="submit" className="btn-default btn-large rn-btn">
                                        <span>Submit Now</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5 mt_md--30 mt_sm--30">
                            <img src="/assets/images/best_service.png" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
