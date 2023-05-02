import styles from "./Restaurant.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Restaurant = () => {
  return (
    <div>
      <div className={styles.restaurantDiv}>
        <div className={styles.bakcground}>
          <h2 className={styles.h2Text}>WELCOME TO OUR RESTAURANT</h2>
          <p className={styles.pText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            vel reprehenderit dignissimos ipsa quod recusandae fugit sit facere
            eum quae, quia saepe aut non magnam similique quas rerum, illum
            esse.
          </p>
        </div>
      </div>
      <h2 className={styles.galleryText}>GALERY</h2>
      <Container>
        <Row>
          <Col>
            <div>
              <img
                className={styles.imageSize}
                src={
                  window.location.origin +
                  "/pexels-farhad-ibrahimzade-8697543.jpg"
                }
                alt="img"
              />
              <img
                className={styles.imageSize}
                src={
                  window.location.origin +
                  "/pexels-taha-samet-arslan-7627414.jpg"
                }
                alt="img"
              />
              <img
                className={`${styles.imageSize} ${styles.bottomImg}`}
                src={window.location.origin + "/pexels-erik-mclean-4062274.jpg"}
                alt="img"
              />
            </div>
          </Col>
          <Col>
            {" "}
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                est eos quas! Quod nulla amet culpa quas repellendus eligendi
                ex, autem quaerat esse illum incidunt consequuntur provident,
                aliquam vero a? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veritatis laborum sit illo ex! Laboriosam
                quidem facere commodi odio voluptatum dicta et rem assumenda
                dolorem neque! Quos facilis iste vero rerum. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Dolores sequi, magnam
                laudantium earum aut velit eos. Aperiam sint vero dolores,
                consequatur minus nesciunt praesentium a enim omnis suscipit
                consequuntur fugit? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores consectetur quae magnam et eius,
                perferendis animi quis non tempore quam dolores omnis nisi.
                Saepe, repellat adipisci! Earum ipsum vitae quis?
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Restaurant;
