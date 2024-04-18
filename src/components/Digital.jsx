import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export default function Digital() {
  return (
    <>
      <Container
        className="bg_pink my-lg-5 my-4 pt-lg-5 pb-lg-0 py-5 custom_container"
        id="contact"
      >
        <Row className="justify-content-around gap-lg-0 gap-md-5 gap-4 mt-lg-3">
          <Col lg={3} className="text-lg-start text-center">
            <Image
              src="/assets/images/png/mobile.png"
              alt="mobile"
              width={315}
              height={425}
            />
          </Col>
          <Col lg={6} className="text-lg-start text-center">
            <h3 className="fw-semibold fs_xl text_black01 mb-lg-4 pb-lg-2 mb-sm-3 mb-2 pt-lg-3 lh_125">
              Take the Next Step in Your Digital Transformation
            </h3>
            <p className="fw-normal fs_sm text_black01 pe-xl-5 me-xl-5 lh_200 mb-sm-3 mb-2">
              Concentrate on your brand, business, or project while we handle
              the software development.
            </p>
            <p className="fw-medium text_blue fs_sm lh_200 mb-lg-4 pb-lg-2 mb-sm-3 mb-2">
              Get in touch with Kava Up to learn more!
            </p>
            <a
              href=""
              className="text-white fs_sm fw-mediun contact_btn d-inline-block transition "
            >
              Contact Us
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
