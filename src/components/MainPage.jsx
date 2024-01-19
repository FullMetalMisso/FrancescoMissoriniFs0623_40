import React from "react";
import { Row, Col } from "react-bootstrap";
import GetSong from "./GetSong";

const MainPage = () => {
    return (
        <div className="mainPage mt-3 ms-5">
            <Row>
                <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                    <a href="www">TRENDING</a>
                    <a href="www">PODCAST</a>
                    <a href="www">MOODS AND GENRES</a>
                    <a href="www">NEW RELEASES</a>
                    <a href="www">DISCOVER</a>
                </Col>
            </Row>
            <Row>
                <Col >
                    <div id="rock">
                        <h2>Rock Classics</h2>
                        <div
                            id="rockSection"
                        >
                            <GetSong  genere="rock" showC={4}/>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="col-12">
                    <div id="pop">
                        <h2>Pop Culture</h2>
                        <div
                            id="popSection"
                        >
                            <GetSong  genere="pop" showC={4}/>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="col-12">
                    <div id="hiphop">
                        <h2>#HipHop</h2>
                        <div
                            id="hipHopSection"
                        >
                            <GetSong  genere="HipHop" showC={4}/>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MainPage;