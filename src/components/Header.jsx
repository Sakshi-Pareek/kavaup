"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Logo, UpdownArrow } from "./Icons";
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
      <div>
        <Container className="">
          <div className="d-flex justify-content-between align-items-center py-4 mt-3">
            <a href="">
              <Logo />
            </a>
            <div
              className={`${
                show ? "left_neg_100" : "start-0"
              } d-flex flex-lg-row flex-column list-unstyled gap-4 align-items-center justify-content-lg-between justify-content-center mb-0 pe-0 nav_bar transition`}
            >
              <Link
                href={"#home"}
                onClick={() => setShow(!show)}
                className="fw-mediun text_black01 fs_sm lh_122 nav_link"
              >
                Home
              </Link>
              <Link
                href={"#apps"}
                onClick={() => setShow(!show)}
                className="fw-mediun text_black01 fs_sm lh_122 nav_link"
              >
                Apps <UpdownArrow />
              </Link>
              <Link
                href={"#solution"}
                onClick={() => setShow(!show)}
                className="fw-mediun text_black01 fs_sm lh_122 nav_link"
              >
                Solutions <UpdownArrow />
              </Link>
              <Link
                href={"#service"}
                onClick={() => setShow(!show)}
                className="fw-mediun text_black01 fs_sm lh_122 nav_link"
              >
                Services <UpdownArrow />
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
              } navline d-lg-none d-flex bg-transparent flex-column gap-2 justify-content-center align-items-center position-relative px-lg-0 px-4 top-0 z_4`}
            >
              <span className="crl_1 bg-black transition"></span>
              <span className="crl_2 bg-black transition"></span>
              <span className="crl_3 bg-black transition"></span>
            </div>
          </div>
          <div className="py-5 my-5">
            <h1 className="fs_xxl fw-semibold text_black02 text-center lh_125 mb-0">
              What we have solutions on{" "}
              <span className="d-lg-block">this platform</span>
            </h1>
          </div>
          {/* <Row>
            <Col lg={4}>
              <button className="fw-semibold fs_md text_black02 lh_125 tabbtn">Business</button>
            </Col>
            <Col lg={8}></Col>
          </Row> */}
        </Container>
      </div>
    </>
  );
}
