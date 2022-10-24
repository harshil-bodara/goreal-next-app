import React from 'react'
import Difference from '../Difference'
import CustomeCommentOfferDetails from '../OfferDetails/CustomeCommentOfferDetails'
import OffersHeader from '../OffersHeader'

const Offers = [
    {
        count: 15,
        title: "15 Custom Comments",
        rate: 2.99
    },
    {
        count: 25,
        title: "25 Custom Comments",
        rate: 4.99
    },
    {
        count: 50,
        title: "50 Custom Comments",
        rate: 8.99
    },
    {
        count: 100,
        title: "100 Custom Comments",
        rate: 14.99,
    }
]

export default function BuyCustomInstagramComments() {

    return (
        <div>
            <div className="rwt-portfolio-area rn-section-gap masonary-wrapper-activation">
                <div className="container-fluid plr--30">
                    <OffersHeader description={"Select a package that you like and submit Order Now button"} title={"Custom Instagram Comments with Instant Delivery in 2022"} />
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
                                <CustomeCommentOfferDetails index={1} offer={Offers}/>
                                <CustomeCommentOfferDetails index={2}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
