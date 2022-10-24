import Link from "next/link";

const HeaderNews = () => {

	return (
		<div className="header-top-news">
			<div className="wrapper">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="inner">
								<div className="content">
									<span className="rn-badge">Subscribe for our offers, Upto 50% Off</span>
									<span className="news-text">Allow goread.io to send web push notifications to your desktop.</span>
								</div>
								<div className="right-button">
									<Link href="#">
										<a className="btn-read-more">
											<span className="text-pink">Allow</span>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="icon-close">
				<button className="close-button bgsection-activation">
					<i className="feather-x"></i>
				</button>
			</div>
		</div>
	)
}

export default HeaderNews;