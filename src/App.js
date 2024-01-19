import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Col, Container , Row} from "react-bootstrap";
import MainPage from "./components/MainPage";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import SearchPage from "./components/SearchPage";
import MediaPlayer from "./components/MediaPlayer";
import MySidebar from "./components/MySidebar";
import MyLibrary from "./components/MyLibrary";
import NotFound from "./components/NotFound";



const App = () => (
  <>
  <BrowserRouter>
    <Container className="mx-0">
      <Row className="margin-custom">
      
        <Col xs={2}>
           <MySidebar/> 
        </Col>
        <Col xs={10}>
          
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/artist" element={<ArtistPage/>}/>
            <Route path="/album/:id" element={<AlbumPage/>}/>
            <Route path="/search/:query" element={<SearchPage/>}/>
            <Route path="/mylibrary" element={<MyLibrary/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          
        </Col>  
      </Row>
      <MediaPlayer />
      
    </Container>
    </BrowserRouter>
  </>
);

export default App;