import Head from "next/head";
import Hero from "../components/hero";
import SectionText from "../components/sectionText";
import styled from "styled-components";
import { bgColorPrimary } from "../styles/colors.module.scss";
import SectionAvailableNow from "../components/sectionAvailableNow";
import axios from "axios";

const Home = ({ rents, error }) => {
	if (error) {
		return <div>An error occured: {error.message}</div>;
	}

	return (
		<div>
			<Head>
				<title>RentBuyParis | Rentals and sales of apartments in Paris</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HeroWrapper>
				<Hero
					nbRents={rents.data.filter((d) => d.attributes.isRent).length}
					nbGoods={rents.data.filter((d) => !d.attributes.isRent).length}
				/>
			</HeroWrapper>
			<SectionAvailableNow rents={rents} />

			<SectionText />
		</div>
	);
};

Home.getInitialProps = async (ctx) => {
	try {
		const qs = require("qs");
		const query = qs.stringify(
			{
				populate: "*",
			},
			{
				encodeValuesOnly: true,
			}
		);

		const res = await axios.get(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/rents?${query}`
		);
		const rents = res.data;
		return { rents };
	} catch (error) {
		return { error };
	}
};

const HeroWrapper = styled.div`
	@media screen and (min-width: 768px) {
		background-color: #e5f9ff;
		padding: 0rem 2rem 0rem 2rem;
	}

	@media screen and (min-width: 1024px) {
	}
	@media screen and (min-width: 1440px) {
		padding: 0rem 12rem 0rem 12rem;
	}
	@media screen and (min-width: 1800px) {
		padding: 0rem 20rem 0rem 20rem;
	}

	@media screen and (min-width: 2100px) {
		padding: 0rem 24rem 0rem 24rem;
	}

	@media screen and (min-width: 2550px) {
		padding: 0rem 30rem 0rem 30rem;
	}
`;

export default Home;
