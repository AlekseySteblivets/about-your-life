import iconInstagram from "../../assets/img/icon-instagram.png";
import iconFacebook from "../../assets/img/icon-facebook.png";
import iconTelegram from "../../assets/img/icon-telegram.png";
import iconYoutube from "../../assets/img/icon-youtube.png";

import styles from "./SocialMedia.module.scss";

export default function SocialMedia() {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <a
          className={styles.link}
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={iconInstagram}
            alt="icon social media"
            className={styles.icon}
          />
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={styles.link}
          href="https://web.telegram.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={iconTelegram}
            alt="icon social media"
            className={styles.icon}
          />
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={styles.link}
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={iconYoutube}
            alt="icon social media"
            className={styles.icon}
          />
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={styles.link}
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={iconFacebook}
            alt="icon social media"
            className={styles.icon}
          />
        </a>
      </li>
    </ul>
  );
}
