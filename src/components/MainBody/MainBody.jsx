import CardCarousel from "../CardCarousel/CardCarousel";
import Restaurant from "../Restaurant/Restaurant";
import styles from "./MainBody.module.css";

const MainBody = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      image: "/pexels-pixabay-164595.jpg",
      description: "This is card 1",
    },
    {
      id: 2,
      title: "Card 2",
      image: "/pexels-pixabay-262048.jpg",
      description: "This is card 2",
    },
    {
      id: 3,
      title: "Card 3",
      image: "/pexels-pixabay-237371.jpg",
      description: "This is card 3",
    },
    {
      id: 4,
      title: "Card 4",
      image: "/pexels-pixabay-276671.jpg",
      description: "This is card 4",
    },
    {
      id: 5,
      title: "Card 5",
      image: "/pexels-suhel-vba-3659683.jpg",
      description: "This is card 5",
    },
  ];
  return (
    <div>
      <h2 className={styles.heading}>OUR ROOMS</h2>
      <CardCarousel cards={cards} />
      <Restaurant />
    </div>
  );
};

export default MainBody;
