import styles from "./NavigationFooter.module.scss";

export default function NavigationFooter() {
  return (
    <nav className={styles.navFooter}>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <a href="#">home</a>
        </li>
        <li className={styles.item}>
          <a href="#">portfolio</a>
        </li>
        <li className={styles.item}>
          <a href="#">price</a>
        </li>
        <li className={styles.item}>
          <a href="#">home</a>
        </li>
        <li className={styles.item}>
          <a href="#">photobooks</a>
        </li>
        <li className={styles.item}>
          <a href="#">contact</a>
        </li>
      </ul>
    </nav>
  );
}
