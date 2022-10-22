import React from "react";
import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import LeftSideBar from "../LeftSideBar/LeftSideBar";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Daily News</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <Link to="/">Home</Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="/allnews">All News</Link>
              </Nav.Link>
            </Nav>
            <Nav className=" align-items-center">
              
              <Link to='/profile'>
                {user?.photoURL ? (
                  <Image
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUserAlt></FaUserAlt>
                )}
              </Link>

              <Nav.Link>
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <Link>
                      <Button variant="dark" onClick={handleLogOut}>
                        Log Out
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button variant="dark">Login</Button>
                    </Link>
                    <Link to="/register">
                      <Button variant="dark">Sign In</Button>
                    </Link>
                  </>
                )}
              </Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideBar></LeftSideBar>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
