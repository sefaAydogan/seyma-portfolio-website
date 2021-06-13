import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";
import designData from "./designData";
function ImageCards() {
	return (
		<div>
			<h1 style={{ color: "white", textDecoration: "underline" }}>
				Tasarımlarım
			</h1>
			<br />
			<br />
			<SRLWrapper>
				<Row md={3} sm={1} xs={1}>
					{designData.map((design) => (
						<Col className="photos">
							<Image src={design.url} rounded fluid />
						</Col>
					))}
				</Row>
			</SRLWrapper>
		</div>
	);
}

export default ImageCards;
