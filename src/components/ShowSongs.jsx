import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const ShowSongs = ({ songs, showC }) => {
  const navigate = useNavigate()
  console.log(songs);

  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4} className="g-2">
        {songs.slice(0, showC).map((song) => (
          <Col key={song.id} className="text-center overflow-hidden" >
            <div onClick={() => { navigate(`/album/${song.album.id}`) }}>
              <img src={song.album.cover_medium} alt={song.album.title} />
              <p className="custom-font-size-p mt-3" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Album: {song.album.title.length ? song.album.title : `${song.album.title}...`}
              </p>
              <p className='d-none idAlbum'>{song.album.id}</p>

            </div>

            <p className="custom-font-size-p" onClick={() => { navigate(`/artist/${song.artist.id}`) }}>
              Artist: {song.artist.name.length ? song.artist.name : `${song.artist.name}...`}
            </p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ShowSongs;




