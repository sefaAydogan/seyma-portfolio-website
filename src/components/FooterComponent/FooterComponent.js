import React from "react";
import "./Footer.scss";

import styled from "styled-components";

const Container = styled.div`
	padding: 80px 60px;
	background: radial-gradient(circle, #0d293b, #02121c);
	justify-content: center;
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`;
const MyRow = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 40px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 20px;
	}
`;
const MyColumn = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	max-width: 200px;
	margin: 0 auto;
`;
const Title = styled.p`
	color: rgba(255, 255, 255, 0.9);
	max-width: 200px;
	text-align: center;
	font-size: x-large;
	margin-bottom: 1rem;
`;

const Link = styled.a`
	color: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;
	max-width: 200px;
	&:hover {
		color: rgb(0, 153, 255);
		transition: 200ms ease-in;
		text-decoration: none;
	}
`;

const MyIcons = styled.i`
	margin-right: 12px;
	font-size: 20px;
`;

function FooterComponent() {
	return (
		<Container>
			<Wrapper>
				<MyRow>
					<MyColumn>
						<Title>Sayfalar</Title>
						<br />
						<br />
						<Link href="/">Hakkımda</Link>
						<Link href="/script">Senaryolarım</Link>
						<Link href="/designs">Tasarımlarım</Link>
						<Link href="/photographs">Fotoğraflarım</Link>
					</MyColumn>
					<MyColumn>
						<Title>Sosyal Medya Hesaplarım</Title>
						<br />
						<Link href="https://www.instagram.com/ar.seymanur/">
							<MyIcons className="fab fa-instagram" />
							Instagram
						</Link>
						<Link href="https://www.linkedin.com/in/şeyma-arnak-5289841a6">
							<MyIcons className="fab fa-linkedin" />
							LinkedIn
						</Link>
					</MyColumn>
				</MyRow>
			</Wrapper>
		</Container>
	);
}

export default FooterComponent;
