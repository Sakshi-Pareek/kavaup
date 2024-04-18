"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Logo, Tickicon, UpdownArrow } from "./Icons";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

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
  return (
    <>
      <Container className="custom_container">
        <div className="d-flex justify-content-between align-items-center py-xl-4 mt-3">
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
              className="fw-mediun text_black01 fs_sm lh_122 nav_link position-relative"
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
            className="d-flex flex-lg-column flex-row gap-3 overflow-x-scroll"
          >
            <div className="d-flex max_w_430 mb-xxl-1 cursor_pointer navpill">
              <div className="gradient_bg transition"></div>
              <div className="fw-semibold fs_md text_black02 lh_125 tabbtn transition w-100">
                Business
              </div>
            </div>
            <div className="d-flex max_w_430 mb-xxl-1 cursor_pointer navpill">
              <div className="gradient_bg transition"></div>
              <div className="fw-semibold fs_md text_black02 lh_125 tabbtn transition w-100 text-nowrap">
                E-commerce
              </div>
            </div>
            <div className="d-flex max_w_430 mb-xxl-1 cursor_pointer navpill">
              <div className="gradient_bg transition"></div>
              <div className="fw-semibold fs_md text_black02 lh_125 tabbtn transition w-100 text-nowrap">
                Organized Communications
              </div>
            </div>
            <div className="d-flex max_w_430 mb-xxl-1 cursor_pointer navpill">
              <div className="gradient_bg transition"></div>
              <div className="fw-semibold fs_md text_black02 lh_125 tabbtn transition w-100">
                Chat
              </div>
            </div>
            <div className="d-flex max_w_430 mb-xxl-1 cursor_pointer navpill">
              <div className="gradient_bg transition"></div>
              <div className="fw-semibold fs_md text_black02 lh_125 tabbtn transition w-100 text-nowrap">
                Streaming Video / Audio
              </div>
            </div>
            <div className="d-flex max_w_430 mb-xxl-1 cursor_pointer navpill">
              <div className="gradient_bg transition"></div>
              <div className="fw-semibold fs_md text_black02 lh_125 tabbtn transition w-100 text-nowrap">
                Social Media
              </div>
            </div>
            <div className="d-flex max_w_430 mb-xxl-1 cursor_pointer navpill">
              <div className="gradient_bg transition"></div>
              <div className="fw-semibold fs_md text_black02 lh_125 tabbtn transition w-100 text-nowrap">
                Photo / Video editing
              </div>
            </div>
            <div className="d-flex max_w_430 mb-xxl-1 cursor_pointer navpill">
              <div className="gradient_bg transition"></div>
              <div className="fw-semibold fs_md text_black02 lh_125 tabbtn transition w-100">
                Maps
              </div>
            </div>
            <div className="d-flex max_w_430 mb-xxl-1 cursor_pointer navpill">
              <div className="gradient_bg transition"></div>
              <div className="fw-semibold fs_md text_black02 lh_125 tabbtn w-100 transition text-nowrap">
                Offline with data sync
              </div>
            </div>
            <div className="d-flex max_w_430 mb-xxl-1 navpill">
              <div className="gradient_bg transition"></div>
              <div className="fw-semibold fs_md text_black02 lh_125 tabbtn w-100 transition text-nowrap">
                Bluetooth
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="ps-lg-5">
              <Image
                src="/assets/images/png/setupaccount.png"
                alt="account"
                width={605}
                height={490}
                className="mb-4 w-100 h-100"
              />
              <p className="fw-semibold fs_xlg text_black02 lh_125 pe-xxl-5 pt-2">
                Create a business app for your online platform.
              </p>
              <p className="text_grey fw-normal fs_sm lh_178 pe-xxl-5 mb-xxl-4 mb-3 pb-xxl-2">
                Take your business to a new level by creating an app with an
                online platform.
              </p>
              <ul className="d-flex flex-column gap-xxl-3 gap-2 ps-0 mb-0">
                <li className="fw-normal fs_sm text_grey lh_178 d-flex gap-3">
                  <Tickicon />
                  Mobile App Can Increase Sales.
                </li>
                <li className="fw-normal fs_sm text_grey lh_178 d-flex gap-3">
                  <Tickicon />
                  Compete with Larger Businesses.
                </li>
                <li className="fw-normal fs_sm text_grey lh_178 d-flex gap-3">
                  <Tickicon />
                  Simplify the Buyer Journey.
                </li>
                <li className="fw-normal fs_sm text_grey lh_178 d-flex gap-3">
                  <Tickicon />
                  Build Customer Loyalty
                </li>
                <li className="fw-normal fs_sm text_grey lh_178 d-flex gap-3">
                  <Tickicon />
                  Create a Direct Marketing Channel
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
