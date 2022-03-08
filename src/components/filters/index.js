import { useEffect } from "react";
import { Button, Checkbox, NumberInput, RangeSlider, Menu } from "@mantine/core";
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
	useEffect(() => {
		const rangeSliderMobile = document.getElementById("rangeSliderMobile");
		console.log(rangeSliderMobile);
		document.addEventListener('change', rangeSliderMobile, (e) => {
			e.preventDefault();
		}, { passive: false });
	}, [])

	return (
		<div>
			<div className={styles.mobile}>
				<Menu
					size={260}
					placement="center"
					closeOnItemClick={false}
					zIndex={10}
					control={
						<Button
							color="dark"
							radius={0}
							size="md"
							className={styles.button}
							leftIcon={<MdFilterAlt color="white" size={18} />}
						>
							Apply Filter
						</Button>
					}
				>
					<Menu.Label>Filters</Menu.Label>
					<Menu.Item>
						<Filter title="Quartier">
							<div style={{ display: "flex" }}>
								<div style={{ width: "4.5em", marginRight: "10px" }}>
									<NumberInput defaultValue={1} required min={1} max={20} />
								</div>
								<span style={{ minWidth: "max-content", alignSelf: "center" }}>
									ème arr (Trocadéro)
								</span>
							</div>
						</Filter>
					</Menu.Item>
					<Menu.Item>
						<Filter title="Prix">
							<Checkbox
								onChange={() => { }}
								checked={false}
								label="High - Low"
								style={{ marginBottom: "10px" }}
							/>
							<Checkbox
								onChange={() => { }}
								checked={false}
								label="Low - High"
								style={{ marginBottom: "10px" }}
							/>
						</Filter>
					</Menu.Item>
					<Menu.Item>
						<Filter title="Capacité">
							<Checkbox
								onChange={() => { }}
								checked={false}
								label="1 Guest"
								style={{ marginBottom: "10px" }}
							/>
							<Checkbox
								onChange={() => { }}
								checked={false}
								label="2 Guests"
								style={{ marginBottom: "10px" }}
							/>
							<Checkbox
								onChange={() => { }}
								checked={false}
								label="3 Guests"
								style={{ marginBottom: "10px" }}
							/>
							<Checkbox
								onChange={() => { }}
								checked={false}
								label="4 Guests"
								style={{ marginBottom: "10px" }}
							/>
						</Filter>
					</Menu.Item>
					<Menu.Item>
						<Filter title="Général">
							<Checkbox
								onChange={() => { }}
								checked={false}
								label="Parking"
								style={{ marginBottom: "10px" }}
							/>
							<Checkbox
								onChange={() => { }}
								checked={false}
								label="Elevator"
								style={{ marginBottom: "10px" }}
							/>
							<Checkbox
								onChange={() => { }}
								checked={false}
								label="Garden"
								style={{ marginBottom: "10px" }}
							/>
							<Checkbox
								onChange={() => { }}
								checked={false}
								label="Terrace / Balcony"
								style={{ marginBottom: "10px" }}
							/>
						</Filter>
					</Menu.Item>
				</Menu>
			</div>


			<div className={styles.desktop}>
				<Filter title="Quartier">
					<div style={{ display: "flex" }}>
						<div style={{ width: "4.5em", marginRight: "10px" }}>
							<NumberInput defaultValue={1} required min={1} max={20} />
						</div>
						<span style={{ minWidth: "max-content", alignSelf: "center" }}>
							ème arr (Trocadéro)
						</span>
					</div>
				</Filter>
				<Filter title="Prix">
					<RangeSlider
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
					/>
				</Filter>
				<Filter title="Capacité">
					<Checkbox
						onChange={() => { }}
						checked={false}
						label="1 Guest"
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						onChange={() => { }}
						checked={false}
						label="2 Guests"
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						onChange={() => { }}
						checked={false}
						label="3 Guests"
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						onChange={() => { }}
						checked={false}
						label="4 Guests"
						style={{ marginBottom: "10px" }}
					/>
				</Filter>
				<Filter title="Général">
					<Checkbox
						onChange={() => { }}
						checked={false}
						label="Parking"
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						onChange={() => { }}
						checked={false}
						label="Elevator"
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						onChange={() => { }}
						checked={false}
						label="Garden"
						style={{ marginBottom: "10px" }}
					/>
					<Checkbox
						onChange={() => { }}
						checked={false}
						label="Terrace / Balcony"
						style={{ marginBottom: "10px" }}
					/>
				</Filter>
			</div>
		</div>
	);
}
