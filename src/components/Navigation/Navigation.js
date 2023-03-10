import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu1}>
        <li className={styles.item}>
          <a href="/">home</a>
        </li>
        <li className={styles.item}>
          <a href="/">portpholio</a>
        </li>
      </ul>
      <ul className={styles.menu2}>
        <li className={styles.item}>
          <a href="/">price</a>
        </li>
      </ul>
      <ul className={styles.menu3}>
        <li className={styles.item}>
          <a href="/">video</a>
        </li>
      </ul>
      <ul className={styles.menu4}>
        <li className={styles.item}>
          <a href="/">photobooks</a>
        </li>
        <li className={styles.item}>
          <a href="/">contact</a>
        </li>
      </ul>
    </nav>
  );
}
