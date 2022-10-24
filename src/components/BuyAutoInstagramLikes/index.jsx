import React from 'react'
import OfferCompo from '../OfferCompo'
import OffersHeader from '../OffersHeader'

const titleStyle = { color: "#F54E5D", fontSize: "24px" }
const Offers = [
    {
        count: "",
        title: "50 Likes Per Post",
        rate: 8.99,
        month: "per month",
        titleStyle
    },
    {
        count: "",
        title: "100 Likes Per Post",
        rate: 17.99,
        month: "per month",
        titleStyle
    },
    {
        count: "",
        title: "250 Likes Per Post",
        rate: 28.99,
        month: "per month",
        titleStyle
    },
]

export default function BuyAutoInstagramLikes() {
    return (
        <div>
            <div className="rwt-portfolio-area rn-section-gap masonary-wrapper-activation">
                <div className="container-fluid plr--30">
                    <OffersHeader description={"Select a package that you like and submit Order Now button"} title={"Buy Instagram Automatic Likes with Instant Delivery in 2022"} />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-items grid-metro3 mesonry-list">
                                <div className="resizer"></div>
                                {/* <!-- Start High Quality  --> */}
                                <div className="portfolio-4 cat--1">
                                    <div className="rwt-pricing-area rn-section-gap">
                                        <div className="wrapper plr--100 plr_md--15 plr_sm--15" style={{ marginTop: "-150px" }}>
                                            <div className="row row--0">
                                                {Offers.map(({ selected, ...offer }) => <OfferCompo offer={offer} selected={selected} />)}
                                            </div>
                                            <div className="row mt--40 row--15 mt--100 align-items-center" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                                                <div className="col-lg-3 mt_md--30 mt_sm--30">
                                                    <img src="/assets/images/header_top.png" />
                                                </div>
                                                <div className="col-lg-2"></div>
                                                <div className="col-lg-7" style={{ textAlign: "center" }}>
                                                    <form className="contact-form-1 rwt-dynamic-form" id="contact-form" method="POST" action="mail.php">
                                                        <div className="form-group">
                                                            <input type="text" name="contact-name" id="contact-name" placeholder="Your Instagram Name" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="email" id="contact-email" name="contact-email" placeholder="Your Email" />
                                                        </div>
                                                        <div>
                                                            <hr />
                                                            <h5 style={{ color: "#F75054" }}>PRICE: $0.00</h5>
                                                        </div>
                                                        <div className="form-group">
                                                            <button name="submit" type="submit" id="submit" className="btn-default btn-large rn-btn">
                                                                <span>Buy Now</span>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
