import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./HomePage.scss";
import profilPicture from "./seymapp.png";
function HomePage() {
	return (
		<div className="homePage">
			<div className="homeForm">
				<Row className="justify-content-md-center">
					<Col md={3} xs={12} sm={12}>
						<Image src={profilPicture} width="100%" roundedCircle />
					</Col>
					<Col md={3} xs={12} sm={12} style={{ textAlign: "center" }}>
						<br />
						<h2>Şeyma Nur Arnak</h2>
						<h3>Grafik Tasarımcı / Senarist</h3>
					</Col>
					<Col md={6} style={{ textAlign: "center" }}></Col>
				</Row>
				<Row md={1} style={{ marginTop: "1rem" }}>
					<Col xs={12} sm={12}>
						<h2>Hakkımda</h2>
						<hr style={{ height: "2px", backgroundColor: "white" }} />
					</Col>
					<Col xs={12} sm={12}>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release
						</p>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default HomePage;
