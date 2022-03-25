import Head from "next/head";

// Lib
import { loadAccomodation } from "../../lib/loadAccomodation";
import { loadAccomodations } from "../../lib/loadAccomodations";
import { motion } from "framer-motion";
import { pageAnimation } from "../../lib/animation";
// Components
import AccomodationDetail from "../../components/accomodation";


const Accomodation = ({ accomodation }) => {
	return (
		<>
			<Head>
				<title>RentBuyParis</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
				<AccomodationDetail accomodation={accomodation} />
			</motion.div>
		</>
	);
};

export async function getStaticProps({ params }) {
	const accomodation = await loadAccomodation(params.id);
	return { props: { accomodation }, revalidate: 10, };
}

export async function getStaticPaths() {
	const accomodations = await loadAccomodations();
	const paths = accomodations?.data.map((item) => {
		return { params: { id: `${item.id}` } };
	});

	return {
		paths,
		fallback: false,
	};
}

export default Accomodation;
