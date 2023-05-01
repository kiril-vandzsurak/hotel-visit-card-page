import styles from "./HeaderPart.module.css";
import Navbar from "../Navbar/Navbar";

const HeaderPart = () => {
  return (
    <div className={styles.mainDiv}>
      <Navbar />
    </div>
  );
};

export default HeaderPart;
