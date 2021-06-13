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
						<p
							style={{
								fontSize: "0.9rem",
								lineHeight: "2rem",
							}}
						>
							Merhaba, ben Şeyma. İletişim tasarımı öğrencisiyim. Üniversitede
							aldığım grafik dersleri ve kendimi geliştirmemle kendi
							tasarımlarımı yapıyorum. Bu benim hobim ve en iyi yaptığım iş.
							Tasarımlarımı yaparken{" "}
							<span
								style={{
									fontWeight: "bold",
									fontStyle: "italic",
									fontSize: "larger",
								}}
							>
								Adobe Illustrator
							</span>{" "}
							ve{" "}
							<span
								style={{
									fontWeight: "bold",
									fontStyle: "italic",
									fontSize: "larger",
								}}
							>
								Adobe Photoshop
							</span>{" "}
							kullanıyorum. Boş zamanlarımın çoğunda fotoğraf çekiyorum ve
							senaryo yazmaya çalışıyorum. Çevremde gördüğüm şeylerin
							fotoğrafını çekmeyi ve senaryolaştırmayı çok seviyorum. Kendi
							alanımda kendimi geliştirmek için birçok farklı alanda eğitim
							almaya çalışıyorum. Gelecekte bu alanda en iyilerden olmak
							istiyorum.
						</p>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default HomePage;
