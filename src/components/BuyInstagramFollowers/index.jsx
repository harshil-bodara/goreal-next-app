import React from 'react'
import Difference from '../Difference';
import OfferCompo from '../OfferCompo';
import FollowersOfferDetails from '../OfferDetails/FollowersOfferDetails';
import OffersHeader from "../OffersHeader";


const Offers = [
    {
        count: 50,
        title: "50 Instagram Followers",
        rate: 0.89
    },
    {
        count: 60,
        title: "Cheap Instagram Followers $1",
        rate: "1.00"

    },
    {
        count: 100,
        title: "100 Instagram Followers",
        rate: 1.89

    },
    {
        count: 300,
        title: "300 Instagram Followers",
        rate: 2.99,
        selected: true
    }
]

const realFollowers = [
    {
        count: 800,
        title: "800 Real Instagram Followers",
        rate: 15.99

    },
    {
        count: 2000,
        title: "2000 Real Instagram Followers",
        rate: 39.99

    },
    {
        count: 6000,
        title: "6000 Real Instagram Followers",
        rate: 2.99

    },
    {
        count: 12000,
        title: "12000 Instagram Followers",
        selected: true,
        rate: 199.99

    }
]


export default function BuyInstagramFollowers() {

    return (
        <div className="rwt-portfolio-area rn-section-gap masonary-wrapper-activation">
            <div className="container-fluid plr--30">
                <OffersHeader description={"Select a package that you like and submit Order Now button"} title={"Buy Instagram Followers with Instant Delivery in 2022"} />
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rwt-portfolio-filter filter-button-default messonry-button text-center mb--30">
                            <button data-filter=".cat--1" className="is-checked"><span className="filter-text">High-Quality Followers</span></button>
                            <button data-filter=".cat--2"><span className="filter-text">Active Followers</span></button>
                        </div>
                        <Difference quality={"These are Followers with profile pictures but no further uploads on their account. Auto-refill is enabled within the warranty."}
                            premium={"New Premium Followers are for those who are serious about their instagram growth. These are guaranteed with very little to NO drop!"} />
                        <div className="portfolio-items grid-metro3 mesonry-list">
                            <div className="resizer"></div>
                            {/* <!-- Start High Quality  --> */}
                            <FollowersOfferDetails index={1} offers={Offers} />
                            <FollowersOfferDetails index={2} offers={realFollowers} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
