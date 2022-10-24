import Link from "next/link";

const About = () => {

	return (
		<div className="rwt-about-area rn-section-gap">
			<div className="container">
				<div className="row row--30 align-items-center">
					<div className="col-lg-5">
						<div className="thumbnail" data-sal="slide-right" data-sal-duration="700" data-sal-delay="300">
							<img className="w-100" src="assets/images/best_service.png" alt="" />
						</div>
					</div>
					<div className="col-lg-7 mt_md--40 mt_sm--40">
						<div className="content">
							<div className="section-title" data-sal="slide-left" data-sal-duration="700"
								data-sal-delay="300">
								<h4 className="subtitle"><span className="theme-gradient">GOREAD.IO</span></h4>
								<h2 className="title mt--10">See why we are the best!</h2>
								<p>When you <Link href="buy-instagram-followers"><a className="text-blue">buy Instagram
									followers</a></Link>, <Link href="buy-instagram-views"><a className="text-blue">buy
										Instagram views</a></Link> or, <Link href="buy-instagram-likes"><a className="text-blue">buy Instagram likes</a></Link> you can make a significant
									amount of money off the Instagram account – especially from ads. Digital marketers
									always look for new ways to reach their target audience. When you have – let’s say a
									million followers – advertisers will reach out to you and ask you to promote their
									products and services. There are many Instagrammers who have bought millions of
									authentic followers from Goread.io. You will be surprised to know that these
									Instagrammers are now earning in 5 figures simply by promoting third-party products.
									Having a large number of followers means you are powerful enough to bring about
									change. Today, hashtags started by politicians, sportspersons, and celebrities who
									have a method of going viral on this social media platform to reach a much wider
									audience.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About;