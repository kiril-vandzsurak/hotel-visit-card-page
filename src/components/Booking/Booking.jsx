import styles from "./Booking.module.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Booking = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [adultValue, setAdultValue] = useState(0);
  const [childrenValue, setChildrenValue] = useState(0);

  const incrementAdult = () => {
    setAdultValue(adultValue + 1);
  };

  const decrementAdult = () => {
    if (adultValue > 0) {
      setAdultValue(adultValue - 1);
    }
  };

  const incrementChildren = () => {
    setChildrenValue(childrenValue + 1);
  };

  const decrementChildren = () => {
    if (childrenValue > 0) {
      setChildrenValue(childrenValue - 1);
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className={styles.mainDiv}>
      <Container>
        <Row className="align-items-center" style={{ height: "126px" }}>
          <Col className="d-flex flex-column align-items-center">
            <span className={styles.textColor}>CHECK-IN/CHECK-OUT</span>
            <div className={styles.selectOpt}>
              <select
                id="dropdown"
                value={selectedOption}
                onChange={handleOptionChange}
                style={{ border: "0px", width: "285px" }}
              >
                <option value="">SELECT DATES</option>
                <option value="option1">Autumn</option>
                <option value="option2">Winter</option>
                <option value="option3">Spring</option>
                <option value="option3">Summer</option>
              </select>
            </div>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <span className={styles.textColor}>ADULTS</span>
            <Container
              style={{ width: "150px", margin: "0px", padding: "0px" }}
            >
              <Row>
                <Col>
                  <Button className={styles.incDecBtn} onClick={decrementAdult}>
                    <span className={styles.signSpan}>-</span>
                  </Button>
                </Col>
                <Col className={styles.colValue}>
                  <span>{adultValue}</span>
                </Col>
                <Col>
                  <Button className={styles.incDecBtn} onClick={incrementAdult}>
                    <span className={styles.signSpan}>+</span>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <span className={styles.textColor}>CHILDREN</span>
            <Container
              style={{ width: "150px", margin: "0px", padding: "0px" }}
            >
              <Row className="flex-row">
                <Col>
                  <Button
                    className={styles.incDecBtn}
                    onClick={decrementChildren}
                  >
                    <span className={styles.signSpan}>-</span>
                  </Button>
                </Col>
                <Col className={styles.colValue}>
                  <span>{childrenValue}</span>
                </Col>
                <Col>
                  <Button
                    className={styles.incDecBtn}
                    onClick={incrementChildren}
                  >
                    <span className={styles.signSpan}>+</span>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <Button className={styles.checkBtn}>CHECK AVAILABILITY</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
