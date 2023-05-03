import styles from "./Bar.module.css";

const Bar = () => {
  return (
    <div style={{ height: "1000px" }}>
      <div className={styles.mainPic}></div>
      <div className={styles.underPic}>
        <div className={styles.picDiv}>
          <div>
            {" "}
            <img
              className={styles.barPhoto}
              src={window.location.origin + "/pexels-the-castlebar-9201052.jpg"}
              alt="img"
            />
            <img
              className={styles.barPhoto}
              src={window.location.origin + "/pexels-таркос-7220271.jpg"}
              alt="img"
            />
          </div>
          <div>
            {" "}
            <img
              className={styles.barPhoto}
              src={
                window.location.origin + "/pexels-andrew-peterson-350478.jpg"
              }
              alt="img"
            />
            <img
              className={styles.barPhoto}
              src={
                window.location.origin + "/pexels-maria-bortolotto-6240974.jpg"
              }
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className={styles.infoBlock}>
        <h2 className={styles.heading}>Bar</h2>
        <p className={styles.subHeader}>Feel free to visit us!</p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id
          repellendus sed, debitis enim tempore nobis vero architecto harum et
          suscipit laboriosam nostrum aperiam quo dolores? Pariatur qui quod
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet debitis
          quas tempora, deleniti officia
        </p>
      </div>
    </div>
  );
};

export default Bar;
