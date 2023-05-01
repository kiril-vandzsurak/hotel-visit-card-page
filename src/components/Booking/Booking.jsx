import styles from "./Booking.module.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";

const Booking = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className={styles.mainDiv}>
      <Container>
        <Row>
          <Col>
            <span>CHECK-IN/CHECK-OUT</span>
            <div className={styles.selectOpt}>
              <select
                id="dropdown"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="">SELECT DATES</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
