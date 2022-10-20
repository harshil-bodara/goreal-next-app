
import Head from "next/head";
import Header from "./../Header";
import HeaderNews from "../HeaderNews";
import Footer from "../Footer";

const PageLayout = ({ children }) => {

	return (
		<div className="active-dark-mode">
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta http-equiv="X-UA-Compatible" content="ie=edge" />
				<meta http-equiv="Content-Language" content="en" />
				<meta name="description" content="If you are looking to buy Authentic, Powerful Instagram followers, likes and views there is no better place than Goread.io. We offer exclusive Instagram Power likes, followers, views for a price as low as $0.09" />
				<meta name="keywords" content="goread.io, buy instagram followers, instagram followers, instagram likes, buy instagram likes, buy followers, buying instagram followers, instagram followers buy, likes on instagram, buy real instagram followers, buy real instagram likes, buy instagram power likes, buy ig followers, buy likes instagram, buy likes on instagram, cheap instagram followers, buy followers on instagram,  get instagram likes, buy instagram followers cheap, real instagram followers, buy ig views, buying instagram video views" />
				<title>Buy Instagram Followers and Likes starting at $0.89 - Goread.io</title>

				{/* <!-- Favicon --> */}
				<link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.ico" />

				{/* <!-- CSS ============================================ --> */}
				<link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css" />
				<link rel="stylesheet" href="assets/css/plugins/animation.css" />
				<link rel="stylesheet" href="assets/css/plugins/feature.css" />
				<link rel="stylesheet" href="assets/css/plugins/magnify.min.css" />
				<link rel="stylesheet" href="assets/css/plugins/slick.css" />
				<link rel="stylesheet" href="assets/css/plugins/slick-theme.css" />
				<link rel="stylesheet" href="assets/css/plugins/lightbox.css" />
			</Head>
			<div className="page-wrapper">
				{/* <!--  Header Top Area  --> */}
				<HeaderNews />

				{/* <!-- Header Area  --> */}
				<Header />

				{children}

				{/* <!-- Footer Area  --> */}
				<Footer />

			</div>


			<script src="assets/js/vendor/modernizr.min.js"></script>
			<script src="assets/js/vendor/jquery.min.js"></script>
			<script src="assets/js/vendor/bootstrap.min.js"></script>
			<script src="assets/js/vendor/popper.min.js"></script>
			<script src="assets/js/vendor/waypoint.min.js"></script>
			<script src="assets/js/vendor/wow.min.js"></script>
			<script src="assets/js/vendor/counterup.min.js"></script>
			<script src="assets/js/vendor/feather.min.js"></script>
			<script src="assets/js/vendor/sal.min.js"></script>
			<script src="assets/js/vendor/masonry.js"></script>
			<script src="assets/js/vendor/imageloaded.js"></script>
			<script src="assets/js/vendor/magnify.min.js"></script>
			<script src="assets/js/vendor/lightbox.js"></script>
			<script src="assets/js/vendor/slick.min.js"></script>
			<script src="assets/js/vendor/easypie.js"></script>
			<script src="assets/js/vendor/text-type.js"></script>
			<script src="assets/js/vendor/jquery.style.swicher.js"></script>
			<script src="assets/js/vendor/js.cookie.js"></script>
			<script src="assets/js/vendor/jquery-one-page-nav.js"></script>
			{/* <!-- Main JS --> */}
			<script src="assets/js/main.js"></script>
		</div>
	)
}

export default PageLayout;