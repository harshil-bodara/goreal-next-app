import React from 'react'
import Difference from '../Difference'
import LikeOfferDetails from '../OfferDetails/LikeOfferDetails'
import OffersHeader from "../OffersHeader"

const Offers = [
    {
        count: 50,
        title: "50 Instagram Likes",
        rate: 0.89
    },
    {
        count: 100,
        title: "100 Instagram Likes",
        rate: 0.99
    },
    {
        count: 300,
        title: "300 Instagram Likes",
        rate: 2.59
    },
    {
        count: 500,
        title: "500 Instagram Likes",
        rate: 4.99,
        selected: true
    }
]

const RealLikes = [
    {
        count: 200,
        title: "200 Real Instagram Likes",
        rate: 6.99
    },
    {
        count: 1500,
        title: "1500 Real Instagram Likes",
        rate: 19.99
    },
    {
        count: 3000,
        title: "3000 Real Instagram Likes",
        rate: 34.99
    },
    {
        count: 8000,
        title: "8000 Real Instagram Likes",
        rate: 79.99,
        selected: true
    }
]

export default function BuyInstagramLikes() {
    return (
        <div>
            <div className="rwt-portfolio-area rn-section-gap masonary-wrapper-activation">
                <div className="container-fluid plr--30">
                    <OffersHeader description={"Select a package that you like and submit Order Now button"} title={"Buy Instagram Likes with Instant Delivery in 2022"} />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rwt-portfolio-filter filter-button-default messonry-button text-center mb--30">
                                <button data-filter=".cat--1" className="is-checked"><span className="filter-text">High-Quality Likes</span></button>
                                <button data-filter=".cat--2"><span className="filter-text">Active Likes</span></button>
                            </div>
                            <Difference quality={"These are Views with profile pictures but no further uploads on their account. Auto-refill is enabled within the warranty."} premium={"New Premium Likes are for those who are serious about their instagram growth. These are guaranteed with very little to NO drop!"} />
                            <div className="portfolio-items grid-metro3 mesonry-list">
                                <div className="resizer"></div>

                                {/* <!-- Start High Quality  --> */}
                                <LikeOfferDetails index={1} offer={Offers} />
                                <LikeOfferDetails index={2} offer={RealLikes}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
