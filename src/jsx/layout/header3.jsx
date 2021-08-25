import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Pdf from "../../document/PDF.pdf";

function Header3() {

  return (
    <>
      <div className="header landing_page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <Navbar expand="lg">
                  {/* <Link className="navbar-brand" to={"/"}>
                    <img src={require("./../../images/logo.png")} alt="" />
                    <span>Qohinoor </span>
                  </Link> */}
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse>
                    <Nav
                      className="justify-content-end"
                      style={{ width: "100%" }}
                    >
                      <Nav.Item>
                        <Link to={"/"}>
                          <span  className="nav-link" href="#intro">
                            Home
                          </span>
                        </Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Link to={"/buy-sell"}>
                          <span className="nav-link" href="#intro">
                            Exchange
                          </span>
                        </Link>
                      </Nav.Item> */}
                      <Nav.Item>
                        <Link to={"/token-generator"}>
                          <span className="nav-link" href="#intro">
                            Faucet
                          </span>
                        </Link>
                      </Nav.Item>
                      <Nav.Item>
                        {/* <Link to={"/accounts"}>
                          <span className="nav-link" href="#intro">
                            Wallet
                          </span>
                        </Link> */}
                      </Nav.Item>
                      <Nav.Item>
                        <Link to={"/white-paper"}>
                          <span className="nav-link" href="#intro">
                            White Paper
                          </span>
                        </Link>
                        {/* <a href={'Pdf'} target="_blank">
                          <span className="nav-link" href="#intro">
                            White Paper
                          </span>
                        </a> */}
                        {/* <embed src={Pdf} width="500" height="375" 
                        type="application/pdf"></embed> */}
                        {/* <iframe src={Pdf} width="640" height="480"></iframe> */}
                      </Nav.Item>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header3;
