import Head from "next/head";
import AccomodationDetail from "../../components/accomodation";

import { loadAccomodation } from "../../lib/loadAccomodation";
import { loadAccomodations } from "../../lib/loadAccomodations";

const Accomodation = ({ accomodation }) => {
	console.log(accomodation);
	return (
		<div>
			<Head>
				<title>RentBuyParis</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<AccomodationDetail accomodation={accomodation.data} />
			</main>
		</div>
	);
};

export async function getStaticProps({ params }) {
	const accomodation = await loadAccomodation(params.id);
	return { props: { accomodation } };
}

export async function getStaticPaths() {
	const accomodations = await loadAccomodations();
	const paths = accomodations.data.map((item) => {
		return { params: { id: `${item.id}` } };
	});

	return {
		paths,
		fallback: true,
	};
}

export default Accomodation;
