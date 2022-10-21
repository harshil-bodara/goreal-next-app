const FAQAskQuestions = () => {
    return (
        <div class="main-content">
            {/* <!-- Start Accordion-1 Area  --> */}
            <div class="rn-accordion-area rn-section-gap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="section-title text-center" data-sal="slide-up" data-sal-duration="700"
                                data-sal-delay="100">
                                <h4 class="subtitle "><span class="theme-gradient">FAQ</span></h4>
                                <h2 class="title w-600 mb--20">Frequently Asked Questions</h2>
                                <p>Quickly find out if we've already addressed your query</p>
                            </div>
                        </div>
                    </div>
                    <div class="row mt--35 row--20">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="rn-accordion-style  accordion">
                                <div class="accordion" id="accordionExamplea">
                                    <div class="accordion-item card" data-sal="slide-up" data-sal-duration="700"
                                        data-sal-delay="100">
                                        <h2 class="accordion-header card-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                                What is the maximum amount of followers i can buy?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show"
                                            aria-labelledby="headingOne" data-bs-parent="#accordionExamplea">
                                            <div class="accordion-body card-body">
                                                You can buy Instagram followers from 50-100000 quantity. If you want to
                                                order custom amount. You can <a href="contact.html"
                                                    style={{ color: "#059DFF" }}>contact us.</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item card" data-sal="slide-up" data-sal-duration="700"
                                        data-sal-delay="100">
                                        <h2 class="accordion-header card-header" id="headingTwo">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                                I did not receive my order yet, What should i do now?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse"
                                            aria-labelledby="headingTwo" data-bs-parent="#accordionExamplea">
                                            <div class="accordion-body card-body">
                                                Make sure if you have followed these guidelines properly. <br /> <br />
                                                - <strong>Instagram</strong> account must be <strong>public.</strong>
                                                <br />
                                                - Double check your Instagram username. <br />
                                                - Please don't change Instagram username before order completion. <br />
                                                - The <strong>Instagram account or post</strong>, still exists and has
                                                <strong>not been removed.</strong> <br />
                                                - The video follows Instagram’s policies and has <strong>not been
                                                    removed.</strong> <br />
                                                - <strong>Allow 12-48 hours</strong> for completion of order delivery.
                                                <br /> <br />
                                                If you need further assistance, you may contact us via email -
                                                <strong>admin@goread.io</strong> or using our <a href="contact.html"
                                                    style={{ color: "#059DFF" }}>contact us</a> page.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item card" data-sal="slide-up" data-sal-duration="700"
                                        data-sal-delay="100">
                                        <h2 class="accordion-header card-header" id="headingThree">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                Why are some of my followers unfollow me?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse"
                                            aria-labelledby="headingThree" data-bs-parent="#accordionExamplea">
                                            <div class="accordion-body card-body">
                                                Sometimes Instagram may ban accounts that users mark as spam or fake.
                                                This causes your follower counts to drop. It only happens in vary rare
                                                occasion. If you experience any followers drop within first 28 days of
                                                your purchase, we will offer you a free refill. Just send us a refill
                                                request using our contact us page
                                                <br />Cheers!!
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

export default FAQAskQuestions;