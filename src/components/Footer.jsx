import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import {
  Fbicon,
  Footerlogo,
  Instagram,
  SendBtn,
  Twitter,
  Youtube,
} from "./Icons";

export default function Footer() {
  const Dates = new Date();
  const year = Dates.getFullYear();
  return (
    <>
      <Container className="pt-xl-5 pt-lg-3 custom_container">
        <Row className="py-xl-5 py-4 justify-content-between gap-4 hr_line">
          <Col className="d-lg-none d-block col-12">
            <div className="d-flex flex-column gap-md-3 gap-2 pb-1">
              <p className="fw-semibold fs_md text_black01 lh_117 mb-1">
                Get in touch
              </p>
              <div className="email_btn d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="email_input bg-transparent fs_xs fw-normal text_grey02 lh_200"
                />
                <SendBtn />
              </div>
              <div className="d-flex gap-3 mt-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fbicon />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </Col>
          <Col sm={2} xs={5}>
            <div className="d-flex flex-column gap-md-3 gap-2 pb-1">
              <p className="fw-semibold fs_md text_black01 lh_117 mb-1">
                Company
              </p>
              <Link href={"#home"} className="fw-normal fs_sm text_grey01">
                <span className="footer_link position-relative">Home</span>
              </Link>
              <Link href={"#solution"} className="fw-normal fs_sm text_grey01">
                <span className="footer_link position-relative">Solutions</span>
              </Link>
              <Link href={"#app"} className="fw-normal fs_sm text_grey01">
                <span className="footer_link position-relative">Apps</span>
              </Link>
              <Link href={"#service"} className="fw-normal fs_sm text_grey01">
                <span className="footer_link position-relative">Services</span>
              </Link>
            </div>
          </Col>
          <Col sm={3} xs={5}>
            <div className="d-flex flex-column gap-md-3 gap-2 pb-1">
              <p className="fw-semibold fs_md text_black01 lh_117 mb-1">
                Product
              </p>
              <Link href={"#home"} className="fw-normal fs_sm text_grey01">
                <span className="footer_link position-relative">Web apps</span>
              </Link>
              <Link href={"#solution"} className="fw-normal fs_sm text_grey01">
                <span className="footer_link position-relative">
                  Mobile apps
                </span>
              </Link>
              <Link href={"#app"} className="fw-normal fs_sm text_grey01">
                <span className="footer_link position-relative">
                  Mac & desktop apps
                </span>
              </Link>
            </div>
          </Col>
          <Col sm={3} xs={12}>
            <div className="d-flex flex-column gap-md-3 gap-2 pb-1">
              <p className="fw-semibold fs_md text_black01 lh_117 mb-1">
                Contact
              </p>
              <Link
                href={"mailto:info@kava.com"}
                className="fw-normal fs_sm text_grey01"
              >
                <span className="footer_link position-relative">
                  info@kava.com
                </span>
              </Link>
              <Link
                href={
                  "https://www.google.com/maps/@29.2904069,76.0389249,8z?entry=ttu" 
                }
                className="fw-normal fs_sm text_grey01"
              >
                <span className="footer_link position-relative">
                  1234, Lorem ipsum dolor sit amet, consectetuer.
                </span>
              </Link>
            </div>
          </Col>
          <Col lg={3} className="d-lg-block d-none">
            <div className="d-flex flex-column gap-3 pb-1">
              <p className="fw-semibold fs_md text_black01 lh_117 mb-1">
                Get in touch
              </p>
              <div className="email_btn d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="email_input bg-transparent fs_xs fw-normal text_grey02 lh_200"
                />
                <SendBtn />
              </div>
              <div className="d-flex gap-3 mt-5">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fbicon />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div className="d-flex flex-sm-row flex-column gap-2 align-items-center justify-content-between py-2 mt-1 mb-lg-4 mb-2">
          <Link href={"/"}>
            <Footerlogo />
          </Link>
          <p className="fw-normal text_grey02 lh_170 mb-0">
            Copyright© {year} kava up, LLC
          </p>
        </div>
      </Container>
    </>
  );
}
