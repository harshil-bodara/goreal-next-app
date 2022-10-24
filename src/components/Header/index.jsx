import Link from "next/link";

const Header = () => {

	return [
		(<div key={0} className="rn-header header-default header-transparent header-sticky">
			<div className="container position-relative">
				<div className="row align-items-center row--0">
					<div className="col-lg-3 col-md-6 col-4">
						<div className="logo">
							<Link href="/">
								<a>
									<img className="logo-light" src="assets/images/goreadiologo.png" alt="Goread Logo" />
									<img className="logo-dark" src="assets/images/goreadiologo.png" alt="Goread Logo" />
								</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-9 col-md-6 col-8 position-static">
						<div className="header-right">
							<nav className="mainmenu-nav d-none d-lg-block">
								<ul className="mainmenu">
									<li className="has-droupdown has-menu-child-item"><Link href="/"><a>Home</a></Link></li>
									<li><Link href="buy-instagram-followers"><a>Buy Instagram Followers</a></Link></li>
									<li><Link href="buy-instagram-likes"><a>Buy Instagram Likes</a></Link></li>
									<li><Link href="buy-instagram-views"><a>Buy Instagram Views</a></Link></li>
									<li className="has-droupdown has-menu-child-item"><Link href="/#"><a>Other Services</a></Link>
										<ul className="submenu">
											<li><Link href="buy-instagram-comments"><a>Buy Instagram Comments</a></Link></li>
											<li><Link href="buy-instagram-growth"><a>Buy Instagram Growth</a></Link></li>
											<li><Link href="buy-auto-instagram-likes"><a>Buy Auto Instagram Likes</a></Link></li>
											<li><Link href="buy-auto-instagram-followers"><a>Buy Auto Instagram Followers</a></Link></li>
											<li><Link href="buy-custom-instagram-comments"><a>Buy Custom Instagram Comments</a></Link></li>
											<li><Link href="buy-instagram-story-views"><a>Buy Instagram Story Views</a></Link></li>
										</ul>
									</li>
									<li><Link href="blog"><a>Blog</a></Link></li>
									<li><Link href="faq"><a>FAQ</a></Link></li>
									<li><Link href="contact"><a>Contact</a></Link></li>
									<div id="my_switcher" className="my_switcher">
										<ul>
											<li>
												<a href="javascript: void(0);" data-theme="light" className="setColor light">
													<img className="sun-image" src="assets/images/sun.png" alt="Sun images" />
												</a>
											</li>
											<li>
												<a href="javascript: void(0);" data-theme="dark" className="setColor dark">
													<img className="Victor Image" src="assets/images/sun.png" alt="Vector Images" />
												</a>
											</li>
										</ul>
									</div>
								</ul>
							</nav>

							{/* <!-- Start Mobile-Menu-Bar --> */}
							<div className="mobile-menu-bar ml--5 d-block d-lg-none">
								<div className="hamberger">
									<button className="hamberger-button">
										<i className="feather-menu"></i>
									</button>
								</div>
							</div>
							{/* <!-- Start Mobile-Menu-Bar --> */}

						</div>
					</div>
				</div>
			</div>
		</div>),
		(<div key={1} className="popup-mobile-menu">
			<div className="inner">
				<div className="header-top">
					<div className="logo">
						<Link href="/">
							<a>
								<img className="logo-light" src="assets/images/goreadiologo.png" alt="Goread Logo" />
								<img className="logo-dark" src="assets/images/goreadiologo.png" alt="Goread Logo" />
							</a>
						</Link>
					</div>
					<div className="close-menu">
						<button className="close-button">
							<i className="feather-x"></i>
						</button>
					</div>
				</div>
				<ul className="mainmenu">
					<li className="has-droupdown has-menu-child-item"><Link href="/"><a>Home</a></Link></li>
					<li><Link href="buy-instagram-followers"><a>Buy Instagram Followers</a></Link></li>
					<li><Link href="buy-instagram-likes"><a>Buy Instagram Likes</a></Link></li>
					<li><Link href="buy-instagram-views"><a>Buy Instagram Views</a></Link></li>
					<li className="has-droupdown has-menu-child-item"><Link href="#"><a>Other Services</a></Link>
						<ul className="submenu">
							<li><Link href="buy-instagram-comments"><a>Buy Instagram Comments</a></Link></li>
							<li><Link href="buy-instagram-growth"><a>Buy Instagram Growth</a></Link></li>
							<li><Link href="buy-auto-instagram-likes"><a>Buy Automatic Instagram Likes</a></Link></li>
							<li><Link href="#"><a>Buy Auto Instagram Followers</a></Link></li>
							<li><Link href="buy-custom-instagram-comments"><a>Buy Custom Instagram Comments</a></Link></li>
							<li><Link href="buy-instagram-story-views"><a>Buy Instagram Story Views</a></Link></li>
						</ul>
					</li>
					<li><Link href="blog"><a>Blog</a></Link></li>
					<li><Link href="faq"><a>FAQ</a></Link></li>
					<li><Link href="contact"><a>Contact</a></Link></li>
					<div id="my_switcher" className="my_switcher">
						<ul>
							<li>
								<a href="javascript: void(0);" data-theme="light" className="setColor light">
									<img className="sun-image" src="assets/images/sun.png" alt="Sun images" />
								</a>
							</li>
							<li>
								<a href="javascript: void(0);" data-theme="dark" className="setColor dark">
									<img className="Victor Image" src="assets/images/sun.png" alt="Vector Images" />
								</a>
							</li>
						</ul>
					</div>
				</ul>
			</div>
		</div>),
		(<div key={2}>
			<div className="rn-gradient-circle"></div>
			<div className="rn-gradient-circle theme-pink"></div>
		</div>)
	]
}

export default Header;