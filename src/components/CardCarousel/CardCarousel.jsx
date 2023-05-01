import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";
import styles from "./CardCarousel.module.css";

const CardCarousel = ({ cards }) => {
  const PrevArrow = (props) => (
    <button {...props} className="slick-arrow slick-prev">
      <img
        className={styles.arrows}
        src={window.location.origin + "/arrowpointingleft_87473.png"}
        alt="img"
      />
    </button>
  );

  const NextArrow = (props) => (
    <button {...props} className="slick-arrow slick-next">
      <img
        className={styles.arrows}
        src={window.location.origin + "/rightarrow_87483.png"}
        alt="img"
      />
    </button>
  );
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    centerPadding: "20px",
    centerMode: true,
    cssEase: "linear",
  };

  return (
    <div style={{ width: "90%", marginInline: "auto" }}>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id}>
            <Card
              title={card.title}
              image={card.image}
              description={card.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
