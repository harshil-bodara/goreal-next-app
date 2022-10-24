import React from 'react'
import Difference from '../Difference';
import OfferCompo from '../OfferCompo';
import ViewOfferDetails from '../OfferDetails/ViewOfferDetails';
import OffersHeader from '../OffersHeader';


const Offers=[
	{
		count:500,
		title:"500 Instagram Views",
        rate:0.89
	},
	{
		count:1000,
		title:"100 Instagram Views",
        rate:1.59
	},
	{
		count:2500,
		title:"2500 Instagram Views",
        rate:3.59
	},
	{
		count:5000,
		title:"5000 Instagram Followers",
        rate:6.99,
		selected:true
	}
]

export default function BuyInstagramViews() {

    return (
        <>
            {/* <!-- Start Portfolio Area  --> */}
            <div className="rwt-portfolio-area rn-section-gap masonary-wrapper-activation">
                <div className="container-fluid plr--30">
                <OffersHeader description={"Select a package that you like and submit Order Now button"} title={"Buy Instagram Views with Instant Delivery in 2022"} />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rwt-portfolio-filter filter-button-default messonry-button text-center mb--30">
                                <button data-filter=".cat--1" className="is-checked"><span className="filter-text">High-Quality Views</span></button>
                                <button data-filter=".cat--2"><span className="filter-text">Active Views</span></button>
                            </div>
                             <Difference quality={"These are Views with profile pictures but no further uploads on their account. Auto-refill is enabled within the warranty."} premium={"New Premium Views are for those who are serious about their instagram growth. These are guaranteed with very little to NO drop!"} />
                            <div className="portfolio-items grid-metro3 mesonry-list">
                                <div className="resizer"></div>
                                {/* <!-- Start High Quality  --> */}
                                <ViewOfferDetails offer={Offers} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
