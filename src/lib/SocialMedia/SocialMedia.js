import styles from "./SocialMedia.module.scss";

export default function SocialMedia() {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <a
          className={styles.linkInstagram}
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={styles.linkTelegram}
          href="https://web.telegram.org/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={styles.linkFb}
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={styles.linkYouTube}
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
      </li>
    </ul>
  );
}
