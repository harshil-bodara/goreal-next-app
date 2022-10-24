import React from 'react'
import Difference from '../Difference';
import OfferCompo from '../OfferCompo';
import CommentsOfferDetails from '../OfferDetails/CommentsOfferDetails';

const Offers = [
    {
        count: 10,
        title: "10 Instagram Comments",
        rate: 2.49
    },
    {
        count: 20,
        title: "20 Instagram Comments",
        rate: 5.49
    },
    {
        count: 50,
        title: "50 Instagram Comments",
        rate: 7.99
    },
    {
        count: 100,
        title: "100 Instagram Comments",
        rate: 12.99,
        selected: true
    }
]

export default function BuyInstagramComments() {

    return (
        <div>
            <div className="rwt-portfolio-area rn-section-gap masonary-wrapper-activation">
                <div className="container-fluid plr--30 insta-comments">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="breadcrumb-inner text-center">
                                <h1 className="title theme-gradient h2">Buy Instagram Comments with Instant Delivery in 2022</h1>
                                <p>Select a package that you like and submit Order Now button</p>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rwt-portfolio-filter filter-button-default messonry-button text-center mb--30">
                                <button data-filter=".cat--1" className="is-checked"><span className="filter-text">High-Quality Comments</span></button>
                                <button data-filter=".cat--2"><span className="filter-text">Active Comments</span></button>
                            </div>
                            <Difference quality={"These are Comments with profile pictures but no further uploads on their account. Auto-refill is enabled within the warranty."}
                                premium={"New Premium Comments are for those who are serious about their instagram growth. These are guaranteed with very little to NO drop!"} />
                            <div className="portfolio-items grid-metro3 mesonry-list">
                                <div className="resizer"></div>

                                {/* <!-- Start High Quality  --> */}
                                <CommentsOfferDetails offer={Offers} />
                                {/* <!-- Start Active Followers  --> */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
