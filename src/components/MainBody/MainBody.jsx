import Bar from "../Bar/Bar";
import CardCarousel from "../CardCarousel/CardCarousel";
import Contact from "../Contact/Contact";
import Restaurant from "../Restaurant/Restaurant";
import styles from "./MainBody.module.css";

const MainBody = () => {
  const cards = [
    {
      id: 1,
      title: "Standart",
      image: "/pexels-pixabay-164595.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id repellendus sed",
    },
    {
      id: 2,
      title: "Semi-lux",
      image: "/pexels-pixabay-262048.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id repellendus sed",
    },
    {
      id: 3,
      title: "Lux",
      image: "/pexels-pixabay-237371.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id repellendus sed",
    },
    {
      id: 4,
      title: "Presidental",
      image: "/pexels-pixabay-276671.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id repellendus sed",
    },
    {
      id: 5,
      title: "Imperial",
      image: "/pexels-suhel-vba-3659683.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id repellendus sed",
    },
  ];
  return (
    <div id="hotel">
      <h2 className={styles.heading}>OUR ROOMS</h2>
      <CardCarousel cards={cards} />
      <Restaurant />
      <Bar />
      <Contact />
    </div>
  );
};

export default MainBody;
