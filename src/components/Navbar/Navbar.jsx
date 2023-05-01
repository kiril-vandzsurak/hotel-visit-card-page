import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import styles from "./Navbar.module.css";

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
    </div>
  );
};

export default Navbar;
