import React from 'react'

export default function ContactUs() {
  return (
    <div>
        <div class="main-content">
            <div class="rwt-contact-area rn-section-gap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 mb--40">
                            <div class="section-title text-center" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                                <h2 class="title w-600 mb--20">Contact Us</h2>
                                <p>Get in touch with us today, we’d love to hear from you!</p>
                            </div>
                        </div>
                    </div>
                    <div class="row row--15" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                        <div class="col-lg-12">
                            <div class="rn-contact-address mt_dec--30">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="rn-address">
                                            <div class="icon">
                                                <i class="feather-headphones"></i>
                                            </div>
                                            <div class="inner">
                                                <h4 class="title">Contact Phone Number</h4>
                                                <p><a href="#">+10988487XXX</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="rn-address">
                                            <div class="icon">
                                                <i class="feather-mail"></i>
                                            </div>
                                            <div class="inner">
                                                <h4 class="title">Our Email Address</h4>
                                                <p><a href="mailto:admin@goread.io">admin@goread.io</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="rn-address">
                                            <div class="icon">
                                                <i class="feather-map-pin"></i>
                                            </div>
                                            <div class="inner">
                                                <h4 class="title">Our Location</h4>
                                                <p> USA/UK</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt--40 row--15"  data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                        <div class="col-lg-7">
                            <form class="contact-form-1 rwt-dynamic-form" id="contact-form" method="POST" action="mail.php">
                                <div class="form-group">
                                    <input type="text" name="contact-name" id="contact-name" placeholder="Your Name" />
                                </div>
                                <div class="form-group">
                                    <input type="email" id="contact-email" name="contact-email" placeholder="Your Email" />
                                </div>

                                <div class="form-group">
                                    <input type="text" id="subject" name="subject" placeholder="Your Subject" />
                                </div>

                                <div class="form-group">
                                    <textarea name="contact-message" id="contact-message" placeholder="Your Message"></textarea>
                                </div>

                                <div class="form-group">
                                    <button name="submit" type="submit" id="submit" class="btn-default btn-large rn-btn">
                                        <span>Submit Now</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-5 mt_md--30 mt_sm--30">
                            <img src="/assets/images/best_service.png" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
