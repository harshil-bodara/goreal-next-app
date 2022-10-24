import Link from "next/link";

const Service = () => {

	return (
		<div className="rn-service-area rn-section-gap ">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title text-center" data-sal="slide-up" data-sal-duration="700"
							data-sal-delay="100">
							<h4 className="subtitle ">
								<span className="theme-gradient">What we can do for you</span>
							</h4>
							<h2 className="title w-600 mb--20">Services We Offer</h2>
						</div>
					</div>
				</div>
				<div className="row row--15 service-wrapper">
					<div className="col-lg-4 col-md-6 col-sm-6 col-12" data-sal="slide-up" data-sal-duration="700">
						<div className="service service__style--2 text-center">
							<div className="inner">
								<div className="image">
									<img src="assets/images/1.png" alt="" width="250" height="300" />
								</div>
								<div className="content">
									<h4 className="title">
										<Link href="#"><a>Fast Delivery</a></Link>
									</h4>
									<p className="description b1 color-gray mb--0 font-16">We’re lightning
										fast! As soon as your sign up and make your first payment, we begin boosting
										your Instagram account and finding new followers, likes, views for your account
										in a matter of minutes. New followers come in at a fast pace as we continue
										boosting your posts until your purchased amount is reached.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6 col-12" data-sal="slide-up" data-sal-duration="700"
						data-sal-delay="100">
						<div className="service service__style--2 text-center">
							<div className="inner">
								<div className="image">
									<img src="assets/images/4.png" alt="" width="250" height="300" />
								</div>
								<div className="content">
									<h4 className="title">
										<Link href="#"><a>High Quality Services</a></Link>
									</h4>
									<p className="description b1 color-gray mb--0 font-16">We only give you
										the highest quality Instagram followers, likes, views. Quality is one of our
										most important goals at Goread.io. We always make sure that your Instagram
										followers are long-lasting, reliable, and that the packages are affordable.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6 col-12" data-sal="slide-up" data-sal-duration="700"
						data-sal-delay="200">
						<div className="service service__style--2 text-center">
							<div className="inner">
								<div className="image">
									<img src="assets/images/3.png" alt="" width="250" height="300" />
								</div>
								<div className="content">
									<h4 className="title">
										<Link href="#"><a>Our Guarantee</a></Link>
									</h4>
									<p className="description b1 color-gray mb--0 font-16">Satisfaction is
										our number one priority! If you are not happy, you will receive a 100% money
										back. This is why we stand high and remain the best place to buy all Instagram
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row row--15 service-wrapper">
					<div className="col-lg-4 col-md-6 col-sm-6 col-12" data-sal="slide-up" data-sal-duration="700">
						<div className="service service__style--2 text-center">
							<div className="inner">
								<div className="image">
									<img src="assets/images/2.png" alt="" width="250" height="300" />
								</div>
								<div className="content">
									<h4 className="title">
										<Link href="#"><a>Privacy & Safety</a></Link>
									</h4>
									<p className="description b1 color-gray mb--0 font-16">We don’t require
										your password. When people follow an account on Instagram, they don’t ask your
										account’s password. So, naturally, we don’t need yours either.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6 col-12" data-sal="slide-up" data-sal-duration="700"
						data-sal-delay="100">
						<div className="service service__style--2 text-center">
							<div className="inner">
								<div className="image">
									<img src="assets/images/5.png" alt="" width="250" height="300" />
								</div>
								<div className="content">
									<h4 className="title">
										<Link href="#"><a>24/7 Help</a></Link>
									</h4>
									<p className="description b1 color-gray mb--0 font-16">Technical
										support for all our services 24/7 to help you. If you have some query, drop an
										email to our support team. We are delighted to assist you</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6 col-12" data-sal="slide-up" data-sal-duration="700"
						data-sal-delay="200">
						<div className="service service__style--2 text-center">
							<div className="inner">
								<div className="image">
									<img src="assets/images/6.png" alt="" width="250" height="300" />
								</div>
								<div className="content">
									<h4 className="title">
										<Link href="#"><a>Secure Payments</a></Link>
									</h4>
									<p className="description b1 color-gray mb--0 font-16">We accept all
										Visa, Master, AMEX, Diners club, Maestro Credit and Debit card payments</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Service;