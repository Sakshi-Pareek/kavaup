import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export default function Digital() {
  return (
    <>
      <Container className="bg_pink mt-5">
        <Row className=" justify-content-around">
          <Col lg={3}>
            <Image
              src="/assets/images/png/mobile.png"
              alt="mobile"
              width={315}
              height={425}
            />
          </Col>

          <Col lg={6}>
            <h3 className="fw-semibold fs_xl text_black01 mb-4 pb-2">
              Take the Next Step in Your Digital Transformation
            </h3>
            <p className="fw-normal fs_sm text_black01 ">
              Concentrate on your brand, business, or project while we handle
              the software development.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
