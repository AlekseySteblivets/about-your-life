import styles from "./Portpholio.module.scss";

export default function Portpholio() {
  return (
    <div className={styles.block}>
      <div className={styles.list}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <a href="/">family</a>
          </li>
          <li className={styles.item}>
            <a href="/">wedding</a>
          </li>

          <li className={styles.item}>
            <a href="/">couples</a>
          </li>

          <li className={styles.item}>
            <a href="/">portrait</a>
          </li>
          <li className={styles.item}>
            <a href="/">films</a>
          </li>
        </ul>
        <div className={styles.linkPrice}>
          <a href="/">PRICE</a>
        </div>
      </div>
      <div className={styles.bgFoto}></div>
    </div>
  );
}
