import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div>
      <Container fluid>
        <Row className="p-3">
          <Col className="d-flex align-items-center">
            <img
              className={styles.imgStyle}
              src={window.location.origin + "/phone-call.png"}
              alt="img"
            />
            <img
              className={styles.imgStyle}
              src={window.location.origin + "/email.png"}
              alt="img"
            />
          </Col>
          <Col
            className={`${styles.hotelName} d-flex justify-content-center align-items-center`}
          >
            HOVERLA HOTEL
          </Col>
          <Col className="d-flex justify-content-end">
            <Button className={styles.btnStyle} variant="dark">
              BOOK NOW
            </Button>
          </Col>
        </Row>
      </Container>
      <div className={styles.line}></div>
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col className="d-flex justify-content-center">
              {" "}
              <Link
                href="#link"
                style={{
                  width: "94px",
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                <Link to="hotel" spy={true}>
                  Hotel
                </Link>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              {" "}
              <Link
                href="#link"
                style={{
                  width: "94px",
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                <Link to="restaurant" spy={true}>
                  Restaurant
                </Link>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              <Link
                href="#link"
                style={{
                  width: "94px",
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                <Link to="bar" spy={true}>
                  Bar
                </Link>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              {" "}
              <Link
                href="#link"
                style={{
                  width: "94px",
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                <Link to="contact" spy={true}>
                  Contact
                </Link>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
