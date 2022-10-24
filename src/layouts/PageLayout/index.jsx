
import Head from "next/head";
import Header from "../../components/Header";
import HeaderNews from "../../components/HeaderNews";
import Footer from "../../components/Footer";

const PageLayout = ({ children }) => {

	return (
		<div className="active-dark-mode">
			<div className="page-wrapper">
				{/* <!--  Header Top Area  --> */}
				<HeaderNews />

				{/* <!-- Header Area  --> */}
				<Header />

				{children}

				{/* <!-- Footer Area  --> */}
				<Footer />

			</div>
		</div>
	)
}

export default PageLayout;