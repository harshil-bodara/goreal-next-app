import Link from "next/link";
import Copyright from "../Copyright";

const Footer = () => {

	return [(
		<footer key={0} className="rn-footer footer-style-default variation-two">
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="rn-footer-widget">
								<h4 className="title">Quick Links</h4>
								<div className="inner">
									<ul className="footer-link link-hover">
										<li><Link href="/"><a>Home</a></Link></li>
										<li><Link href="faq"><a>FAQs</a></Link></li>
										<li><Link href="blog"><a>Blog</a></Link></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="rn-footer-widget">
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="rn-footer-widget">
								<h4 className="title">Information</h4>
								<h6 className="subtitle" style={{ fontSize: "12px" }}>We are not authorized, endorsed, or sponsored by Instagram. USA/UK Based Company</h6>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="rn-footer-widget">
								<h4 className="title">Contact Informations</h4>
								<div className="inner">
									<h6 className="subtitle" style={{ fontSize: "12px" }}>Tel: +10988487XXX <br />
										E-mail: admin@goread.io <br />
										Company: Goread.io is not affiliated with Instagram, Facebook, or any Instagram third-party partners in any way.</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	), <Copyright key={1} />]
}

export default Footer;