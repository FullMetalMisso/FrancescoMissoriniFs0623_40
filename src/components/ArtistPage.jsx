import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const ArtistPage = () => {
    return (
        <div className="col-12 col-md-9 offset-md-3 mainPage">
            <Row className="mb-3">
                <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
                    <a href="www">TRENDING</a>
                    <a href="www">PODCAST</a>
                    <a href="www">MOODS AND GENRES</a>
                    <a href="www">NEW RELEASES</a>
                    <a href="www">DISCOVER</a>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={10} lg={10} className="mt-5">
                    <h2 className="titleMain"></h2>
                    <div id="followers"></div>
                    <div
                        className="d-flex justify-content-center"
                        id="button-container"
                    >
                        <Button
                            className="btn btn-success mr-2 mainButton d-none"
                            id="playButton"
                        >
                            PLAY
                        </Button>
                        <Button
                            className="btn btn-outline-light mainButton d-none"
                            id="followButton"
                        >
                            FOLLOW
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={10} md={10} lg={10} className="p-0 offset-1">
                    <div className="mt-4 d-flex justify-content-start">
                        <h2 className="text-white font-weight-bold">Tracks</h2>
                    </div>
                    <div className="pt-5 mb-5">
                        <div className="row" id="apiLoaded"></div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ArtistPage;