import Link from "next/link";

const Slider = () => {

	return (
		<div className="slider-area slider-style-6 shape-right height-750">
			<div className="container">
				<div className="row row--30 align-items-center">
					<div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
						<div className="inner text-start">
							<h1 className="title color-white" data-sal="slide-up"
								data-sal-duration="700">Super Real Instagram followers, likes, power likes, views,
								comments, saves in Minutes</h1>
							<p className="description color-white" data-sal="slide-up"
								data-sal-duration="700" data-sal-delay="100">Instagram is one of the best social media
								platforms to reach millions of followers. Buying active and real Instagram followers
								will allow you to increase your network of followers naturally. Not only this but you
								will also save your precious time and get the job done in an effortless manner.</p>
							<div className="button-group d-flex">
								<Link href="buy-instagram-followers"><a className="btn-default btn-medium btn-icon btn-border" data-sal="slide-up" data-sal-duration="700" data-sal-delay="200" target="_blank" >Buy Instagram Followers</a></Link>
								<Link href="buy-instagram-likes"><a className="btn-default btn-medium btn-icon btn-border" data-sal="slide-up" data-sal-duration="700" data-sal-delay="300" target="_blank">Buy Instagram Likes</a></Link>
								<Link href="buy-instagram-views"><a className="btn-default btn-medium btn-icon btn-border" data-sal="slide-up" data-sal-duration="700" data-sal-delay="400" target="_blank">Buy Instagram Views</a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-5 order-1 order-lg-2 mt-5" data-sal="slide-up"
						data-sal-duration="700" data-sal-delay="100">
						<div className="thumbnail">
							<img src="assets/images/header_top.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Slider;