import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import GetSong from "./GetSong";




const ArtistPage = () => {

    const [artist, setArtist] = useState({})
    const { id } = useParams()



    useEffect(() => {
        const fetchArtist = async () => {
            try {
                const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`, {
                    method: 'GET',
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNTY5YzE4N2U1YzAwMTgxNGM2YjQiLCJpYXQiOjE3MDU2NjIxMDgsImV4cCI6MTcwNjg3MTcwOH0.aBztB7t0GA8QRopl6rgganyDdrzE7DVzdja5mvqIXmE"
                    },
                });

                if (response.ok) {
                    const result = await response.json();
                    setArtist(result);
                } else {
                    console.error('Errore nella richiesta:', response.status);
                }
            } catch (error) {
                console.error('Errore generico:', error);
            }
        };

        fetchArtist();
    }, [id]);

    




    return (
        <>
            <div className="mainPage">
                <div className="row mb-3">
                    <div className="col-9 col-lg-11 mainLinks d-none d-md-flex mt-5">
                        <a href="#">TRENDING</a>
                        <a href="#">PODCAST</a>
                        <a href="#">MOODS AND GENRES</a>
                        <a href="#">NEW RELEASES</a>
                        <a href="#">DISCOVER</a>
                    </div>
                </div>
                {artist && (
                    <>
                        <div className="row">
                            <div className="col-5 mt-5">
                                <h2 className="titleMain">{artist.name}</h2>
                                <div id="followers">Followers: {artist.nb_fan}</div>
                                <div className="d-flex justify-content-center" id="button-container">
                                    <button
                                        className="btn btn-success mr-2 mainButton me-1"
                                        id="playButton"
                                    >
                                        PLAY
                                    </button>
                                    <button
                                        className="btn btn-outline-light mainButton"
                                        id="followButton"
                                    >
                                        FOLLOW
                                    </button>
                                </div>
                            </div>
                            <div className="col-5 mt-5">
                                <img src={artist.picture_medium} alt={artist.name} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                                <div className="mt-4 d-flex justify-content-start">
                                    <h2 className="text-white font-weight-bold">Top Album</h2>
                                </div>
                                <div className="pt-5 mb-5">
                                    <div className="row text-white" id="apiLoaded">
                                        <GetSong genere={artist.name} showC={12}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                )}


            </div>
        </>



    )

}

export default ArtistPage;