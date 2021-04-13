import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { SRLWrapper } from 'simple-react-lightbox'
import designData from './photoData'
function ImageCards() {
    return (
        <div>
            <h1 style={{ color: 'white', textDecoration: 'underline' }}>
                My Photographs
            </h1>
            <br />
            <br />
            <SRLWrapper>
                <Row md={3} xs={1} sm={1}>
                    {
                        designData.map((design) => (
                            <Col>
                                <Image src={design.url} rounded fluid />
                            </Col>
                        ))
                    }
                </Row>
            </SRLWrapper>
        </div>
    )
}

export default ImageCards
