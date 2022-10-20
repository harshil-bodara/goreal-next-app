import Link from "next/link";

const Copyright = () => {

	return (
		<>
			<div className="copyright-area copyright-style-one">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-8 col-sm-12 col-12">
							<div className="copyright-left">
								<ul className="ft-menu link-hover">
									<li>
										<Link href="terms-and-condition"><a>Terms And Condition</a></Link>
									</li>
									<li>
										<Link href="contact"><a>Contact Us</a></Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6 col-md-4 col-sm-12 col-12">
							<div className="copyright-right text-center text-lg-end">
								<p className="copyright-text">Copyright © 2022</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="rn-back-top">
				<i className="feather-arrow-up"></i>
			</div>
		</>
	)
}

export default Copyright;