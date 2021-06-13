import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";
import photoData from "./photoData";
function ImageCards() {
	return (
		<>
			<h1 style={{ color: "white", textDecoration: "underline" }}>
				Fotoğraflarım
			</h1>
			<br />
			<br />
			<SRLWrapper>
				<Row md={3} xs={1} sm={1}>
					{photoData.map((photo) => (
						<Col className="photos">
							<Image src={photo.url} rounded fluid />
						</Col>
					))}
				</Row>
			</SRLWrapper>
		</>
	);
}

export default ImageCards;
