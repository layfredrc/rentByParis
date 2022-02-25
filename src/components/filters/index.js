import { Button, Checkbox, NumberInput, RangerSlider } from "@mantine/core";
import { MdFilterAlt } from "react-icons/md";

// Components
import Filter from "../filter";

// Style
import styles from "./index.module.css";

const marks = [
	{ value: 0, label: "0€" },
	{ value: 100, label: "100k€" },
];

export default function Filters() {
	return (
		<div>
			<div className={styles.mobile}>
				<Button
					color="dark"
					radius={0}
					size="md"
					style={{ padding: "0 60px" }}
					leftIcon={<MdFilterAlt color="white" size={18} />}
				>
					Appliquer des filtres
				</Button>
			</div>
			<div className={styles.desktop}>
				<Filter title="Quartier">
					<div style={{ display: "flex" }}>
						<div style={{ width: "4.5em", marginRight: "10px" }}>
							<NumberInput defaultValue={0} required />
						</div>
						<span style={{ minWidth: "max-content", alignSelf: "center" }}>
							ème arr (Trocadéro)
						</span>
					</div>
				</Filter>
				<Filter title="Prix">
					<div></div>
					{/* <RangerSlider
						defaultValue={[20, 80]}
						marks={marks}
						color="#3EA6C7"
						label={(value) => `${value}k €`}
						styles={(theme) => ({
							label: {
								backgroundColor: theme.white,
								color: theme.black,
							},
						})}
					/> */}
				</Filter>
				<Filter title="Capacité">
					<Checkbox
						checked={false}
						label="1 personne"
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						checked={false}
						label="2 personnes"
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						checked={false}
						label="3 personnes"
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						checked={false}
						label="4 personnes"
						style={{ marginBottom: "10px" }}
					/>
				</Filter>
				<Filter title="Général">
					<Checkbox
						checked={false}
						label="Parking"
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						checked={false}
						label="Ascenseur"
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						checked={false}
						label="Animaux autorisés"
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						checked={false}
						label="Terrasses / Balcons"
						style={{ marginBottom: "10px" }}
					/>
				</Filter>
			</div>
		</div>
	);
}