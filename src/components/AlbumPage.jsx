import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { updateTrackAction } from '../redux/actions';
import { useDispatch } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {addToFavouriteAction, removeFromFavouriteAction} from "../redux/actions"
import { useSelector } from "react-redux";

const AlbumPage = () => {
    const [album, setAlbum] = useState({});
    const [tracks, setTracks] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();

    const favourites = useSelector((state) => state.favourite.list)
    console.log(favourites)

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`, {
                    method: 'GET',
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNTY5YzE4N2U1YzAwMTgxNGM2YjQiLCJpYXQiOjE3MDU2NjIxMDgsImV4cCI6MTcwNjg3MTcwOH0.aBztB7t0GA8QRopl6rgganyDdrzE7DVzdja5mvqIXmE"
                    },
                });

                if (response.ok) {
                    const result = await response.json();
                    setAlbum(result);
                    setTracks(result.tracks.data);
                } else {
                    console.error('Errore nella richiesta:', response.status);
                }
            } catch (error) {
                console.error('Errore generico:', error);
            }
        };

        fetchAlbum();
    }, [id]);

    const handleToggleSelected = (index) => {
        setTracks((prevTracks) => {
            const updatedTracks = [...prevTracks];
            updatedTracks[index] = { ...updatedTracks[index], selected: !updatedTracks[index].selected };
            return updatedTracks;
        });
    };

    return (
        <div className="col-12 col-md-9 offset-md-3 mainPage">
            <Row className="mb-3 mt-3">
                <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
                    <a href="www">TRENDING</a>
                    <a href="www">PODCAST</a>
                    <a href="www">MOODS AND GENRES</a>
                    <a href="www">NEW RELEASES</a>
                    <a href="www">DISCOVER</a>
                </Col>
            </Row>
            <Row>
                <Col md={3} className="pt-5 text-center" id="img-container">
                    {album && album.artist && (
                        <img src={album.cover_medium} alt={album.artist.name} />
                    )}
                </Col>
                <Col md={8} className="p-5">
                    <Row>
                        <Col md={10} className="mb-5" id="trackList">
                            {tracks && tracks.map((song, index) => (
                                <div key={index} className="d-flex justify-content-between" onClick={() => { dispatch(updateTrackAction(song)) }}>
                                    <p className="text-white">{song.title}</p>
                                    <div className="d-flex align-items-baseline">
                                        <p className="text-white">
                                            {Math.floor(song.duration / 60)}:{song.duration % 60 < 10 ? `0${song.duration % 60}` : song.duration % 60}
                                        </p>
                                        <div onClick={() => handleToggleSelected(index)}>
                                            {song.selected ? <AiFillHeart
                                                className="text-white ms-2"
                                                onClick={()=>{dispatch(removeFromFavouriteAction(index))}}
                                            /> : <AiOutlineHeart
                                                className="text-success ms-2"
                                                onClick={()=>{dispatch(addToFavouriteAction(song))}}
                                            />}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default AlbumPage;
