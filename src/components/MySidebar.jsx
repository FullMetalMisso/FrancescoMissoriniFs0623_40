import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, FormControl, Button, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SpotifyLogo from "../data/logo/SpotifyLogo.png";

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className="col-2">
      <Navbar
        bg="dark"
        expand="md"
        fixed="left"
        className="justify-content-between"
        id="sidebar"
      >
        <div className="nav-container">
          <Navbar.Brand>
            <img
              src={SpotifyLogo}
              alt="Spotify_Logo"
              width="131"
              height="40"
              className="my-2"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="d-flex flex-column">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon={faHome} className="mx-2 mt-2" />
                Home
              </Link>
              <Link to="/mylibrary" className="nav-link">
                <FontAwesomeIcon icon={faBookOpen} className="mx-2" />
                Your Library
              </Link>
              <InputGroup className=" ms-2">
                <FormControl
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                />
              </InputGroup>
            </Nav>
          </Navbar.Collapse>
        </div>

        <div className="nav-btn mb-5">
          <Button
            className="signup-btn"
            variant="success"
            type="button"
          >
            Sign Up
          </Button>
          <Button
            className="login-btn"
            variant="success"
            type="button"
          >
            Login
          </Button>
          <a href="www">Cookie Policy</a> | <a href="www"> Privacy</a>
        </div>
      </Navbar>
    </div>
  );
};

export default Sidebar;
