import React from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";
import Next from "../data/images/Next.png"
import Play from "../data/images/Play.png"
import Previous from "../data/images/Previous.png"
import Repeat from "../data/images/Repeat.png"
import Shuffle from "../data/images/Shuffle.png"
import { useSelector } from "react-redux";



const MediaPlayer = () => {
    const song = useSelector((state) => state.track.song)
    console.log(song.track)
    return (

     
        <div className="container-fluid fixed-bottom bg-container pt-1">
            <Row>
            {song.track && (
                <>
                 <Col xs={5}>
                <div className="d-flex align-items-center">
                    <img
                        src={song.track.album.cover_small}
                        alt="track"
                    />
                    <p className="text-white ms-3">{song.track.title}</p>
                </div>
            </Col>
            <Col
                    xs={4}
                    className="playerControls c-player"
                >
                    <Row className=" d-flex justify-content-center ">

                        <Col xs={12} className="d-flex justify-content-center">
                            <Row>
                                <Col>
                                    <img
                                        src={Shuffle}
                                        alt="shuffle"
                                    />
                                </Col>
                                <Col>
                                    <img
                                        src={Previous}
                                        alt="previous"
                                        width={10}
                                        height={10}
                                    />
                                </Col>
                                <Col>
                                    <img
                                        src={Play}
                                        alt="play"
                                        width={10}
                                        height={10}
                                    />
                                </Col>
                                <Col>
                                    <img
                                        src={Next}
                                        alt="next"
                                        width={10}
                                        height={10}
                                    />
                                </Col>
                                <Col>
                                    <img
                                        src={Repeat}
                                        alt="repeat"
                                        width={10}
                                        height={10}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-3">
                            <ProgressBar now={30} className="progress" />
                        </Col>
                    </Row>
                </Col>
                </>
               
            )}
                
                
            </Row>

        </div>
    );
};

export default MediaPlayer;