"use client";
import React, { useEffect, useState } from "react";
import { Logo, UpdownArrow } from "./Icons";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Helpers from "./Helpers";

export default function Header() {
  const [show, setShow] = useState(true);
  const [_document, _setdocument] = useState(null);
  useEffect(() => {
    _setdocument(document);
    if (show === false) {
      document.body.classList.add("overflow_hidden");
    } else {
      document.body.classList.remove("overflow_hidden");
    }
  });
  const [activeTab, setActiveTab] = useState("Business");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Container className="custom_container">
        <div className="d-flex justify-content-between align-items-center py-xl-4 mt-xl-0 mt-3">
          <Link href={"/"}>
            <Logo />
          </Link>
          <div
            className={`${
              show ? "left_neg_100" : "start-0"
            } d-flex flex-lg-row flex-column list-unstyled gap-4 align-items-center justify-content-lg-between justify-content-center mb-0 pe-0 nav_bar transition`}
          >
            <Link
              href={"/"}
              onClick={() => setShow(!show)}
              className="fw-mediun text_black01 fs_sm lh_122 nav_link"
            >
              Home
            </Link>
            <Link
              href={"/"}
              onClick={() => setShow(!show)}
              className="fw-mediun text_black01 fs_sm lh_122 nav_link position-relative transition"
            >
              Apps <UpdownArrow />
              <ul className="drop_down bg-white ps-0 mb-0 d-flex flex-column position-absolute transition">
                <li className="fw-normal fs_s text_grey lh_122 drop_down_link transition">
                  Type here
                </li>
                <li className="fw-normal fs_s text_grey lh_122 drop_down_link transition text-nowrap">
                  Android Apps
                </li>
                <li className="fw-normal fs_s text_grey lh_122 drop_down_link transition text-nowrap">
                  Our process
                </li>
                <li className="fw-normal fs_s text_grey lh_122 drop_down_link transition text-nowrap">
                  How we can help
                </li>
              </ul>
            </Link>
            <Link
              href={"/"}
              onClick={() => setShow(!show)}
              className="fw-mediun text_black01 fs_sm lh_122 nav_link position-relative"
            >
              Solutions <UpdownArrow />
              <ul className="drop_down bg-white ps-0 mb-0 d-flex flex-column position-absolute transition">
                <li className="fw-normal fs_s text_grey lh_122 drop_down_link transition">
                  Type here
                </li>
                <li className="fw-normal fs_s text_grey lh_122 drop_down_link transition text-nowrap">
                  Android Apps
                </li>
                <li className="fw-normal fs_s text_grey lh_122 drop_down_link transition text-nowrap">
                  Our process
                </li>
              </ul>
            </Link>
            <Link
              href={"/"}
              onClick={() => setShow(!show)}
              className="fw-mediun text_black01 fs_sm lh_122 nav_link position-relative"
            >
              Services <UpdownArrow />
              <ul className="drop_down bg-white ps-0 mb-0 d-flex flex-column position-absolute transition">
                <li className="fw-normal fs_s text_grey lh_122 drop_down_link transition">
                  Type here
                </li>
                <li className="fw-normal fs_s text_grey lh_122 drop_down_link transition text-nowrap">
                  Android Apps
                </li>
              </ul>
            </Link>
            <Link
              href={"#contact"}
              onClick={() => setShow(!show)}
              className="fw-mediun text_black01 fs_sm lh_122 nav_link"
            >
              Contact Us
            </Link>
          </div>
          <div
            onClick={() => setShow(!show)}
            className={`${
              show ? "" : "cross transition"
            } navline d-lg-none d-flex bg-transparent flex-column gap-2 justify-content-center align-items-center position-relative px-lg-0 px-4 top-0 z_4 cursor_pointer`}
          >
            <span className="crl_1 bg-black transition"></span>
            <span className="crl_2 bg-black transition"></span>
            <span className="crl_3 bg-black transition"></span>
          </div>
        </div>
        <div className="py-lg-5 py-3 my-5">
          <h1 className="fs_xxl fw-semibold text_black02 text-center lh_125 mb-0">
            What we have solutions on{" "}
            <span className="d-lg-block">this platform</span>
          </h1>
        </div>
        <Row className="justify-content-between gap-lg-0 gap-4">
          <Col
            lg={5}
            className="d-flex flex-lg-column flex-row justify-content-between gap-2 overflow-x-scroll"
          >
            <button
              className={`fw-semibold fs_md text_black02 lh_125 transition w-100 text-start ${
                activeTab === "Business" ? "tabbtn_hover" : "tabbtn"
              }`}
              onClick={() => handleTabClick("Business")}
            >
              Business
            </button>
            <button
              className={`fw-semibold fs_md text_black02 lh_125 transition w-100 text-start text-nowrap ${
                activeTab === "Commerce" ? "tabbtn_hover" : "tabbtn"
              }`}
              onClick={() => handleTabClick("Commerce")}
            >
              E-commerce
            </button>
            <button
              className={`fw-semibold fs_md text_black02 lh_125 transition w-100 text-start text-nowrap ${
                activeTab === "Communications" ? "tabbtn_hover" : "tabbtn"
              }`}
              onClick={() => handleTabClick("Communications")}
            >
              Organized Communications
            </button>
            <button
              className={`fw-semibold fs_md text_black02 lh_125 transition w-100 text-start ${
                activeTab === "Chat" ? "tabbtn_hover" : "tabbtn"
              }`}
              onClick={() => handleTabClick("Chat")}
            >
              Chat
            </button>
            <button
              className={`fw-semibold fs_md text_black02 lh_125 transition w-100 text-start text-nowrap ${
                activeTab === "Streaming" ? "tabbtn_hover" : "tabbtn"
              }`}
              onClick={() => handleTabClick("Streaming")}
            >
              Streaming Video / Audio
            </button>
            <button
              className={`fw-semibold fs_md text_black02 lh_125 transition w-100 text-start text-nowrap ${
                activeTab === "Media" ? "tabbtn_hover" : "tabbtn"
              }`}
              onClick={() => handleTabClick("Media")}
            >
              Social Media
            </button>
            <button
              className={`fw-semibold fs_md text_black02 lh_125 transition w-100 text-start text-nowrap ${
                activeTab === "Editing" ? "tabbtn_hover" : "tabbtn"
              }`}
              onClick={() => handleTabClick("Editing")}
            >
              Photo / Video editing
            </button>
            <button
              className={`fw-semibold fs_md text_black02 lh_125 transition w-100 text-start ${
                activeTab === "Maps" ? "tabbtn_hover" : "tabbtn"
              }`}
              onClick={() => handleTabClick("Maps")}
            >
              Maps
            </button>
            <button
              className={`fw-semibold fs_md text_black02 lh_125 transition w-100 text-start text-nowrap ${
                activeTab === "data" ? "tabbtn_hover" : "tabbtn"
              }`}
              onClick={() => handleTabClick("data")}
            >
              Offline with data sync
            </button>
            <button
              className={`fw-semibold fs_md text_black02 lh_125 transition w-100 text-start ${
                activeTab === "Bluetooth" ? "tabbtn_hover" : "tabbtn"
              }`}
              onClick={() => handleTabClick("Bluetooth")}
            >
              Bluetooth
            </button>
          </Col>
          <Col lg={7}>
            {activeTab === "Business" && (
              <Helpers heading="business" content="business"></Helpers>
            )}
            {activeTab === "Commerce" && (
              <Helpers heading="e-commerce" content="e-commerce"></Helpers>
            )}
            {activeTab === "Communications" && (
              <Helpers
                heading="communications"
                content="organized communications"
              ></Helpers>
            )}
            {activeTab === "Chat" && (
              <Helpers heading="chat" content="chat"></Helpers>
            )}
            {activeTab === "Streaming" && (
              <Helpers
                heading="streaming video / audio"
                content="streaming video / audio"
              ></Helpers>
            )}
            {activeTab === "Media" && (
              <Helpers heading="social media" content="social media"></Helpers>
            )}
            {activeTab === "Editing" && (
              <Helpers
                heading="photo / video editing"
                content="photo / video editing"
              ></Helpers>
            )}
            {activeTab === "Maps" && (
              <Helpers heading="map" content="map"></Helpers>
            )}
            {activeTab === "data" && (
              <Helpers
                heading="offline with data sync"
                content="offline with data sync"
              ></Helpers>
            )}
            {activeTab === "Bluetooth" && (
              <Helpers heading="bluetooth" content="bluetooth"></Helpers>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
