import React from "react";
import Header3 from "../layout/header3";
import Sidebar from "../layout/sidebar";
import PageTitle from "../element/page-title";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Modal, Button } from "react-bootstrap";
import { MDBIcon, MDBContainer } from "mdbreact";

import BtcChart from "../charts/btc";
import LtcChart from "../charts/ltc";
import XrpChart from "../charts/xrp";
import AreaChart from "../charts/area";
import RadialChart from "../charts/radial";
import Logo from '../yellow2.jpg';

function MyVerticallyCenteredModal(props) {
  console.log("props", props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="card"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Slippage tolerance</h4>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            class="btn btn-outline-primary mt-3"
            style={{
              backgroundColor: "#20220D",
              color: "yellow",
              marginRight: 10,
            }}
          >
            0.1%
          </button>
          <button
            type="button"
            class="btn btn-outline-primary mt-3"
            style={{
              backgroundColor: "#20220D",
              color: "yellow",
              marginRight: 10,
            }}
          >
            0.5%
          </button>
          <button
            type="button"
            class="btn btn-outline-primary mt-3"
            style={{
              backgroundColor: "#20220D",
              color: "yellow",
              marginRight: 10,
            }}
          >
            1%
          </button>
          <input
            type="text"
            name="currency_amount"
            class="form-control mt-3"
            placeholder="0.6%"
            style={{ borderWidth: 1, borderRadius: "50px", padding: 15 }}
          />
        </div>
        <h4 class="mt-3">Transaction deadline</h4>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            name="currency_amount"
            class="form-control mt-3"
            placeholder="20"
            style={{
              borderWidth: 1,
              marginRight: 20,
              borderRadius: "50px",
              padding: 15,
            }}
          />
          <h4 class="mt-3">Minutes</h4>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Dashboard() {
  const [modalShow, setModalShow] = React.useState(false);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <>
      <Header3 />
      {/* <Sidebar /> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div class="content-body" style={{marginLeft:0}}>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-9 col-xxl-12">
              <div class="row">
                <div class="col-xl-4 col-lg-12 col-xxl-4">
                  <div class="row">
                    <div class="col-xxl-12 col-xl-12 col-lg-12" >
                      <div class="card welcome-profile transparent">
                        <div class="card-body">
                          <p
                            // style={{
                            //   marginTop: 15,
                            //   marginRight: 15,
                            //   height: 80,
                            //   width: 80,
                            //   borderRadius: 40,
                            //   backgroundColor: "#20220D",
                            //   textAlign: "center",
                            //   color: "#fff",
                            //   border: "4px solid #40412F",
                            // }}
                          >
                            <img
                                src={require("../seclogo.png")}
                                style={{
                                  //objectFit: "fill",
                                  height: '25%',
                                  width: '25%',
                                  borderRadius: '100%',
                                //  marginTop: 15,
                                  border: "3px solid #20220D",
                                }}
                            />
                          </p>
                          <div
                            style={{
                              width: "100%",
                              height: "auto",
                              marginTop: 20,
                            }}
                          >
                            <MDBContainer>
                            <div className="tradebuy-menu">
                              <a
                                onClick={() => openInNewTab('https://www.facebook.com')}
                                className="fb-ic mr-3"
                              >
                                <i
                                  class="fa fa-facebook"
                                  aria-hidden="true"
                                  style={{
                                    fontSize: 20,
                                    marginTop: 10,
                                  }}
                                ></i>
                              </a>
                              <a
                                onClick={() => openInNewTab('https://twitter.com')}
                                className="tw-ic mr-3"
                              >
                                <i
                                  class="fa fa-twitter"
                                  aria-hidden="true"
                                  style={{
                                    fontSize: 20,
                                    marginTop: 10,
                                  }}
                                ></i>
                              </a>
                              <a
                               onClick={() => openInNewTab("https://instagram.com")}
                                className="gplus-ic mr-3"
                              >
                                <i
                                  class="fa fa-instagram"
                                  aria-hidden="true"
                                  style={{
                                    fontSize: 20,
                                    marginTop: 10,
                                  }}
                                ></i>
                              </a>
                              <a
                               onClick={() => openInNewTab("https://www.github.com")}
                                className="li-ic mr-3"
                              >
                                <i
                                  class="fa fa-github"
                                  aria-hidden="true"
                                  style={{
                                    fontSize: 20,
                                    marginTop: 10,
                                  }}
                                ></i>
                              </a>
                              <a
                               onClick={() => openInNewTab("https://www.reddit.com")}
                                className="ins-ic mr-3"
                              >
                                <i
                                  class="fa fa-reddit-alien"
                                  aria-hidden="true"
                                  style={{
                                    fontSize: 20,
                                    marginTop: 10,
                                  }}
                                ></i>
                              </a>
                              <a
                               onClick={() => openInNewTab("https://www.twitch.tv")}
                                className="pin-ic mr-3"
                              >
                                <i
                                  class="fa fa-twitch"
                                  aria-hidden="true"
                                  style={{
                                    fontSize: 20,
                                    marginTop: 10,
                                  }}
                                ></i>
                              </a>
                              <a
                               onClick={() => openInNewTab("https://www.youtube.tv")}
                                className="yt-ic mr-3"
                              >
                                <i
                                  class="fa fa-youtube-play"
                                  aria-hidden="true"
                                  style={{
                                    fontSize: 20,
                                    marginTop: 10,
                                  }}
                                ></i>
                              </a>
                              {/* <a href="#!" className="so-ic mr-3">
      <i class="fa fa-discord" aria-hidden="true" style={{color:'#34c38f', fontSize:20, marginTop:10}}></i>
      </a> */}
                             </div>
                            </MDBContainer>
                          </div>

                          {/* <ul>
                            <li>
                              <a href="#">
                                <span class="verified">
                                  <i class="icofont-check-alt"></i>
                                </span>
                                Verify account
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="not-verified">
                                  <i class="icofont-close-line"></i>
                                </span>
                                Two-factor authentication (2FA)
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="not-verified">
                                  <i class="icofont-close-line"></i>
                                </span>
                                Deposit money
                              </a>
                            </li>
                          </ul> */}
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-12 col-xxl-6 col-lg-6">
                      <div class="balance-widget">
                        <ul class="list-unstyled">
                          <li class="media">
                            {/* <i class="cc BTC mr-3"></i> */}
                            <p
                              style={{
                                marginTop: 15,
                                marginRight: 15,
                                height: 30,
                                width: 30,
                                borderRadius: 15,
                                backgroundColor: "#20220D",
                                textAlign: "center",
                                color: "#fff",
                              }}
                            >
                              <img
                                src={require("../yellow2.jpg")}
                                height="18"
                                width="20"
                                style={{ objectFit: "fill" }}
                              />
                            </p>
                            <div class="media-body">
                              <h5 class="m-0">QOIN</h5>
                            </div>
                            <div class="text-right">
                              <h5>0.000242 BTC</h5>
                              <span>0.125 USD</span>
                            </div>
                          </li>
                          <li class="media">
                            <i class="cc BTC mr-3"></i>
                            <div class="media-body">
                              <h5 class="m-0">Bitcoin</h5>
                            </div>
                            <div class="text-right">
                              <h5>0.000242 BTC</h5>
                              <span>0.125 USD</span>
                            </div>
                          </li>
                          <li class="media">
                            <i class="cc LTC mr-3"></i>
                            <div class="media-body">
                              <h5 class="m-0">Litecoin</h5>
                            </div>
                            <div class="text-right">
                              <h5>0.000242 LTC</h5>
                              <span>0.125 USD</span>
                            </div>
                          </li>
                          <li class="media">
                            <i class="cc XRP mr-3"></i>
                            <div class="media-body">
                              <h5 class="m-0">Ripple</h5>
                            </div>
                            <div class="text-right">
                              <h5>0.000242 XRP</h5>
                              <span>0.125 USD</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-8 col-lg-12 col-xxl-8">
                  <div class="card">
                    <div class="card-header d-flex justify-content-center ">
                      <button
                        type="submit"
                        name="submit"
                        class="btn btn-success px-5"
                      >
                        Connect Wallet
                      </button>
                    </div>
                    <div class="card-body">
                      <div class="buy-sell-widget">
                        <form
                          method="post"
                          name="myform"
                          class="currency_validate form-row"
                        >
                          <div class="form-group col-xl-12 mb-3">
                            <div class="d-flex justify-content-between">
                              <label class="mr-sm-2">Enter your amount</label>
                              <i
                                onClick={() => setModalShow(true)}
                                style={{ fontSize: 25, color: "#2CA579" }}
                                class="fa"
                              >
                                &#xf013;
                              </i>
                            </div>
                            <div class="d-flex justify-content-between flex-nowrap">
                              <div
                                style={{
                                  backgroundColor: "#20220D",
                                  padding: 10,
                                  borderRadius: 5,
                                }}
                              >
                                <label class="mr-sm-2">From</label>
                                <div class="row">
                                  <div class="col-md-7">
                                    <input
                                      type="text"
                                      name="currency_amount"
                                      class="form-control"
                                      placeholder="0.0"
                                      style={{
                                        borderWidth: 0,
                                        padding: 0,
                                        color: "#fff",
                                        fontWeight: "bold",
                                      }}
                                    />
                                  </div>
                                  {/* <div class="col-md-2">
                                  </div> */}
                                  <div class="col-md-5 d-flex flex-direction-row">
                                  <img
                                        src={Logo}
                                        height="20"
                                        width="20"
                                        style={{ objectFit: "fill", marginRight:5, marginTop:10 }}
                                      />
                                    <select
                                      name="currency"
                                      class="form-control"
                                      style={{
                                        borderWidth: 0,
                                        color: "#fff",
                                        fontWeight: "bold",
                                        padding:0,
                                        height:30,
                                        width:'60%',
                                        marginTop:7,
                                        backgroundColor:'#3F4030',
                                        fontSize:13
                                      }}
                                    >
                                      {/* <option value="">Select</option> */}
                                      <option value="bitcoin">QOIN</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  margin: "0px 5px",
                                }}
                              >
                                <p
                                  style={{
                                    height: 30,
                                    width: 30,
                                    borderRadius: 15,
                                    backgroundColor: "#20220D",
                                    textAlign: "center",
                                    color: "#fff",
                                  }}
                                >
                                  &#x2192;
                                </p>
                              </div>
                              <div
                                style={{
                                  backgroundColor: "#20220D",
                                  padding: 10,
                                  borderRadius: 5,
                                }}
                              >
                                <label class="mr-sm-2">To</label>
                                <div class="row">
                                  <div class="col-md-7">
                                    <input
                                      type="text"
                                      name="currency_amount"
                                      class="form-control"
                                      placeholder="0.0"
                                      style={{
                                        borderWidth: 0,
                                        padding: 0,
                                        color: "#fff",
                                        fontWeight: "bold",
                                      }}
                                    />
                                  </div>
                                  <div class="col-md-5 d-flex">
                                  <img
                                        src={require("../bnb.png")}
                                        height="20"
                                        width="20"
                                        style={{ objectFit: "cover", marginRight:5, marginTop:13, borderRadius: 15}}
                                      />
                                    <select
                                      name="currency"
                                      class="form-control"
                                      style={{
                                        borderWidth: 0,
                                        color: "#fff",
                                        fontWeight: "bold",
                                        padding:0,
                                        height:30,
                                        width:'60%',
                                        marginTop:7,
                                        backgroundColor:'#3F4030',
                                        fontSize:13
                                      }}
                                    >
                                      {/* <option value="">Select</option> */}
                                      <option value="bitcoin">BNB</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-12">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                              <h6 class="mb-0">$49750 remaining</h6>
                              <button
                                type="submit"
                                name="submit"
                                class="btn btn-success px-5"
                              >
                                Exchange Now
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="card profile_chart transparent">
                    <div class="card-header">
                      <div class="chart_current_data">
                        <h3>
                          QOIN/USD
                        </h3>
                        <p class="text-success">
                          125648 <span>USD (20%)</span>
                        </p>
                      </div>
                    </div>
                    <div class="card-body">
                      <AreaChart />
                      <div class="chart-content text-center mt-3">
                        <div class="row">
                          <div class="col-xl-4 col-sm-6 col-6">
                            <div class="chart-stat">
                              <p class="mb-1">Market Cap</p>
                              <strong>$570,578,678</strong>
                            </div>
                          </div>
                          <div class="col-xl-4 col-sm-6 col-6">
                            <div class="chart-stat">
                              <p class="mb-1">Burnt</p>
                              <strong>58.07287 Q</strong>
                            </div>
                          </div>
                          <div class="col-xl-4 col-sm-6 col-6">
                            <div class="chart-stat">
                              <p class="mb-1">Circulating</p>
                              <strong>41.92713 Q</strong>
                            </div>
                          </div>
                          <div class="col-xl-4 col-sm-6 col-6">
                            <div class="chart-stat">
                              <p class="mb-1">Max Supply</p>
                              <strong>100 QUADRILLION</strong>
                            </div>
                          </div>
                          <div class="col-xl-4 col-sm-6 col-6">
                            <div class="chart-stat">
                              <p class="mb-1">Price </p>
                              <strong>$0.00006279846</strong>
                            </div>
                          </div>
                          <div class="col-xl-4 col-sm-6 col-6">
                            <div class="chart-stat">
                              <p class="mb-1">Trading activity </p>
                              <strong>70% buy </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-xxl-12">
              <div class="row">
                <div class="col-xl-12 col-xxl-6">
                  <div class="card balance-widget transparent">
                    <div class="card-body p-0">
                      <div class="row">
                        <div class="col-xl-12 col-xxl-6 col-lg-6" style={{textAlign:'center'}}>
                          {/* <RadialChart /> */}
                          <img
                            src={require("../mainlogo.png")}
                            height="360"
                            width="360"
                            style={{ objectFit: "cover", borderRadius:180 }}
                          />
                          {/* <h4>
                            Total Balance : <strong>$125480</strong>
                          </h4> */}
                        </div>
                        <div class="col-xl-12 col-xxl-6 col-lg-6 mt-3">
                          <div class="widget-card">
                            <h4 style={{ color: "#fff", marginTop: 40 }}>
                              TRADE-BUY QOHINOOR(QOIN){" "}
                            </h4>
                            <div className="tradebuy-menu">
                              <p style={{ color: "#34C38F" }}>
                                <b
                                  style={{
                                    color: "#EFD046",
                                    marginRight: 10,
                                    fontSize: 20,
                                  }}
                                >
                                  &#9724;
                                </b>
                                <a
                                  style={{ color: "#34c38f" }}
                                  onClick={() => openInNewTab("https://www.gate.io")}
                                >
                                  Gate.io
                                </a>
                              </p>
                              <p style={{ color: "#34C38F" }}>
                                <b
                                  style={{
                                    color: "#EFD046",
                                    marginRight: 10,
                                    fontSize: 20,
                                  }}
                                >
                                  &#9724;
                                </b>{" "}
                                <a
                                  style={{ color: "#34c38f" }}
                                  onClick={() => openInNewTab("https://whitebit.com")}
                                >
                                  Mxc
                                </a>
                              </p>
                              <p style={{ color: "#34C38F" }}>
                                <b
                                  style={{
                                    color: "#EFD046",
                                    marginRight: 10,
                                    fontSize: 20,
                                  }}
                                >
                                  &#9724;
                                </b>{" "}
                                <a
                                  style={{ color: "#34c38f" }}
                                  onClick={() => openInNewTab("https://www.mxc.com/")}
                                >
                                  BitMart
                                </a>
                              </p>
                              <p style={{ color: "#34C38F" }}>
                                <b
                                  style={{
                                    color: "#EFD046",
                                    marginRight: 10,
                                    fontSize: 20,
                                  }}
                                >
                                  &#9724;
                                </b>{" "}
                                <a
                                  style={{ color: "#34c38f" }}
                                  onClick={() => openInNewTab("https://www.bitmart.com")}
                                >
                                  WhiteBIT
                                </a>
                              </p>
                              <p style={{ color: "#34C38F" }}>
                                <b
                                  style={{
                                    color: "#EFD046",
                                    marginRight: 10,
                                    fontSize: 20,
                                  }}
                                >
                                  &#9724;
                                </b>{" "}
                                <a
                                  style={{ color: "#34c38f" }}
                                  onClick={() => openInNewTab("https://www.biki.com")}
                                >
                                  BiKi
                                </a>
                              </p>
                              <p style={{ color: "#34C38F" }}>
                                <b
                                  style={{
                                    color: "#EFD046",
                                    marginRight: 10,
                                    fontSize: 20,
                                  }}
                                >
                                  &#9724;
                                </b>{" "}
                                <a
                                  style={{ color: "#34c38f" }}
                                  onClick={() => openInNewTab("https://www.bitrue.com")}
                                >
                                  Bitrue
                                </a>
                              </p>
                              <p style={{ color: "#34C38F" }}>
                                <b
                                  style={{
                                    color: "#EFD046",
                                    marginRight: 10,
                                    fontSize: 20,
                                  }}
                                >
                                  &#9724;
                                </b>{" "}
                                <a
                                  style={{ color: "#34c38f" }}
                                  onClick={() => openInNewTab("https://www.hotbit.io")}
                                >
                                  PancakeSwap
                                </a>
                              </p>
                              <p style={{ color: "#34C38F" }}>
                                <b
                                  style={{
                                    color: "#EFD046",
                                    marginRight: 10,
                                    fontSize: 20,
                                  }}
                                >
                                  &#9724;
                                </b>{" "}
                                <a
                                  style={{ color: "#34c38f" }}
                                  onClick={() => openInNewTab("https://www.gate.io")}
                                >
                                  Hotbit
                                </a>
                              </p>
                              <p style={{ color: "#34C38F" }}>
                                <b
                                  style={{
                                    color: "#EFD046",
                                    marginRight: 10,
                                    fontSize: 20,
                                  }}
                                >
                                  &#9724;
                                </b>{" "}
                                <a
                                  style={{ color: "#34c38f" }}
                                  onClick={() => openInNewTab("https://www.gate.io")}
                                >
                                  BlueHelix Exchange
                                </a>
                              </p>
                            </div>
                            {/* <VerticalTimeline>
                            <VerticalTimelineElement
                              className="vertical-timeline-element--work"
                              contentStyle={{
                                background: "rgb(33, 150, 243)",
                                color: "#fff",
                                height:'auto',
                              }}
                              contentArrowStyle={{
                                borderRight: "7px solid  rgb(33, 150, 243)",
                              }}
                              iconStyle={{
                                background: "rgb(33, 150, 243)",
                                color: "#fff",
                              }}
                              icon={<i>&#10004;</i>}
                            >
                              <p>
                                Creative Direction,
                              </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                              className="vertical-timeline-element--work"
                              contentStyle={{
                                background: "white",
                                color: "#black",
                                height:'auto',
                              }}
                              iconStyle={{
                                background: "rgb(33, 150, 243)",
                                color: "#fff",
                              }}
                              icon={<i>&#10004;</i>}
                            >
                              <p>
                                Creative Direction, 
                              </p>
                            </VerticalTimelineElement>
                          </VerticalTimeline> */}
                            {/* <VerticalTimeline>
                              <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                  background: "#2ca579",
                                  color: "#fff",
                                  top: "-20px",
                                  right: "3%",
                                  height: "auto",
                                  margin: "0",
                                  padding: "2%",
                                  fontSize: "13px",
                                }}
                                contentArrowStyle={{
                                  borderRight: "7px solid  #2ca579",
                                }}
                                iconStyle={{
                                  background: "#2ca579",
                                  color: "#fff",
                                  height: "20px",
                                  width: "20px",
                                  left: "57%",
                                }}
                                icon={<i>&#10004;</i>}
                              >
                                <p>Creative Direction,</p>
                              </VerticalTimelineElement>
                              <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                  background: "white",
                                  color: "#black",
                                  top: "-20px",
                                  left: "2%",
                                  height: "auto",
                                  margin: "0",
                                  padding: "2%",
                                  fontSize: "13px",
                                }}
                                iconStyle={{
                                  background: "#2ca579",
                                  color: "#fff",
                                  height: "20px",
                                  width: "20px",
                                  left: "57%",
                                }}
                                icon={<i>&#10004;</i>}
                              >
                                <p>Creative Direction,</p>
                              </VerticalTimelineElement>
                            </VerticalTimeline> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-12 col-xxl-12">
              <div class="card">
                <div class="card-header border-0">
                  <h4 class="card-title">Transaction</h4>
                </div>
                <div class="card-body pt-0">
                  <div class="transaction-table">
                    <div class="table-responsive">
                      <table class="table mb-0 table-responsive-sm">
                        <tbody>
                          <tr>
                            <td>
                              <span class="sold-thumb">
                                <i class="la la-arrow-down"></i>
                              </span>
                            </td>

                            <td>
                              <span class="badge badge-danger">Sold</span>
                            </td>
                            <td>
                              <i class="cc BTC"></i> BTC
                            </td>
                            <td>Using - Bank *******5264</td>
                            <td class="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span class="buy-thumb">
                                <i class="la la-arrow-up"></i>
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">Buy</span>
                            </td>
                            <td>
                              <i class="cc LTC"></i> LTC
                            </td>
                            <td>Using - Card *******8475</td>
                            <td class="text-success">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span class="sold-thumb">
                                <i class="la la-arrow-down"></i>
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-danger">Sold</span>
                            </td>
                            <td>
                              <i class="cc XRP"></i> XRP
                            </td>
                            <td>Using - Card *******8475</td>
                            <td class="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span class="buy-thumb">
                                <i class="la la-arrow-up"></i>
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">Buy</span>
                            </td>
                            <td>
                              <i class="cc DASH"></i> DASH
                            </td>
                            <td>Using - Card *******2321</td>
                            <td class="text-success">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MODEL */}
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
