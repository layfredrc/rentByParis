import styled from "styled-components";
import {
	SectionTitle,
	CircleBackground,
	SectionTitleContainer,
} from "../accomodationServices";

import { FiCheck } from "react-icons/fi";
import { MdOutlineClose, MdDoNotDisturbAlt } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function RoomAmenities({ accomodation }) {
	const { attributes } = accomodation || {};
	console.log(attributes)
	const { amenities } = attributes;
	const {
		bed_linen,
		children_friendly,
		coffee_maker,
		dishwasher,
		draft_hood,
		drying_machine,
		elevator,
		internet,
		iron_ironing_board,
		kettle,
		microwave,
		oven,
		refrigerator,
		toaster,
		tv_set,
		washing_machine,
	} = amenities;
	console.log(amenities);
	return (
		<Wrapper>
			<SectionTitleContainer>
				<CircleBackground />
				<SectionTitle>Room Amenities</SectionTitle>
			</SectionTitleContainer>
			<RoomAmenitiesContainer>
				<div className='general'>
					<h3>General</h3>
					<ul>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} />
							Air conditionning
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Smoke-free
							property
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Heating
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Soundproof
							rooms
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Elevator
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Toilets
						</li>
					</ul>
				</div>
				<div className='outdoors'>
					<h3>Outdoors</h3>
					<ul>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Terrace /
							Balcony
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Garden
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Parking
						</li>
					</ul>
				</div>
				<div className='devices'>
					<h3>Devices & Equipment</h3>
					<ul>
						<li>
							{tv_set ? (<FiCheck size={15} style={{ marginRight: "5px" }} />) : (<MdOutlineClose size={15} style={{ marginRight: "5px" }} />)} TV set
						</li>
						<li>
							{refrigerator ? (<FiCheck size={15} style={{ marginRight: "5px" }} />) : (<MdOutlineClose size={15} style={{ marginRight: "5px" }} />)} Refrigerator
						</li>
						<li>
							{toaster ? (<FiCheck size={15} style={{ marginRight: "5px" }} />) : (<MdOutlineClose size={15} style={{ marginRight: "5px" }} />)} Toaster
						</li>
						<li>
							{oven ? (<FiCheck size={15} style={{ marginRight: "5px" }} />) : (<MdOutlineClose size={15} style={{ marginRight: "5px" }} />)} Oven
						</li>
						<li>
							{kettle ? (<FiCheck size={15} style={{ marginRight: "5px" }} />) : (<MdOutlineClose size={15} style={{ marginRight: "5px" }} />)} Kettle
						</li>
						<li>
							{microwave ? (<FiCheck size={15} style={{ marginRight: "5px" }} />) : (<MdOutlineClose size={15} style={{ marginRight: "5px" }} />)} Microwave
						</li>
						<li>
							{coffee_maker ? (<FiCheck size={15} style={{ marginRight: "5px" }} />) : (<MdOutlineClose size={15} style={{ marginRight: "5px" }} />)} Coffee maker
						</li>
						<li>
							{dishwasher ? (<FiCheck size={15} style={{ marginRight: "5px" }} />) : (<MdOutlineClose size={15} style={{ marginRight: "5px" }} />)} Dish washer
						</li>
						<li>
							{washing_machine ? (<FiCheck size={15} style={{ marginRight: "5px" }} />) : (<MdOutlineClose size={15} style={{ marginRight: "5px" }} />)} Washing
							machine
						</li>
						<li>
							{iron_ironing_board ? (<FiCheck size={15} style={{ marginRight: "5px" }} />) : (<MdOutlineClose size={15} style={{ marginRight: "5px" }} />)} Iron /
							Ironing board
						</li>
						<li>
							{iron_ironing_board ? (<FiCheck size={15} style={{ marginRight: "5px" }} />) : (<MdOutlineClose size={15} style={{ marginRight: "5px" }} />)} Vacuum
							cleaner
						</li>
						<li>
							{iron_ironing_board ? (<FiCheck size={15} style={{ marginRight: "5px" }} />) : (<MdOutlineClose size={15} style={{ marginRight: "5px" }} />)} Hair dryer
						</li>
					</ul>
				</div>
				<div className='rules'>
					<h3>House rules</h3>
					<ul>
						<li>
							<MdDoNotDisturbAlt size={15} style={{ marginRight: "5px" }} /> No
							parties
						</li>
						<li>
							<MdDoNotDisturbAlt size={15} style={{ marginRight: "5px" }} />
							Pets not allowed
						</li>
						<li>
							<MdDoNotDisturbAlt size={15} style={{ marginRight: "5px" }} />
							Guests not allowed
						</li>
					</ul>
				</div>
				<div className='front-desk'>
					<h3>Front Desk Services</h3>
					<ul>
						<li>
							<AiOutlineExclamationCircle
								size={15}
								style={{ marginRight: "5px" }}
							/>
							Check in
						</li>
						<li>
							<AiOutlineExclamationCircle
								size={15}
								style={{ marginRight: "5px" }}
							/>
							Check out
						</li>
						<li>
							<AiOutlineExclamationCircle
								size={15}
								style={{ marginRight: "5px" }}
							/>
							Cleaning
						</li>
					</ul>
				</div>
			</RoomAmenitiesContainer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	padding: 2rem;
`;

const RoomAmenitiesContainer = styled.div`
	padding: 2rem;
	border: 1px solid #d4d4d4;
	border-radius: 10px;

	div {
		margin-bottom: 1rem;
	}

	h3 {
		font-size: 16px;
		font-weight: 600;
		line-height: 2;

		@media screen and (min-width: 1024px) {
			font-size: 20px;
		}
	}

	li {
		line-height: 1.8;
		font-weight: 400;
	}

	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 20px;
		height: 400px;
		.rules {
			transform: translateY(-10rem);
		}

		.front-desk {
			transform: translateY(-10rem);
		}

		.devices {
			transform: translateX(2rem);
		}
	}
`;
