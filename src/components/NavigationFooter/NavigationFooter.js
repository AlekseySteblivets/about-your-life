import { Link } from "react-router-dom";

import styles from "./NavigationFooter.module.scss";

export default function NavigationFooter() {
  return (
    <nav className={styles.navFooter}>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <Link to="/">home</Link>
        </li>
        <li className={styles.item}>
          <a href="#">portfolio</a>
        </li>
        <li className={styles.item}>
          <Link to="/price">price</Link>
        </li>

        <li className={styles.item}>
          <a href="#">video</a>
        </li>
        <li className={styles.item}>
          <a href="#">contact</a>
        </li>
      </ul>
    </nav>
  );
}
