import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.bottomPart}>
      <div style={{ marginLeft: "50px", paddingTop: "29px" }}>
        <span>Hotel Hoverla, Yaremche</span>
        <br />
        <span>Ukraine, Postcode 88090</span>
        <br />
        <span>Tel. +30 213252 72217 – 8, 23750 73226 – 7 </span>
        <br />
        <span>e-mail: info@lagomandra.gr</span>
        <div className={styles.divCircle}>
          <div className={styles.circle}>
            <img
              className={styles.icon}
              src={window.location.origin + "/fb_icon-icons.com_65434.png"}
              alt="img"
            />
          </div>
          <div className={styles.circle}>
            <img
              className={styles.icon}
              src={
                window.location.origin + "/instagram_f_icon-icons.com_65485.png"
              }
              alt="img"
            />
          </div>
        </div>
      </div>
      <span className={styles.logo}>HOVERLA HOTEL</span>
    </div>
  );
};

export default Contact;
