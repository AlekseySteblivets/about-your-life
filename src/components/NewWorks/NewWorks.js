import justFoto from "../../assets/img/number1.jpg";

import styles from "./NewWorks.module.scss";

export default function NewWorks() {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>NEW WORKS</h2>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <a href="/">
            <img alt="foto" src={justFoto} />
          </a>
          <h3 className={styles.nameWork}>name</h3>
          <p className={styles.data}>data</p>
        </li>
        <li className={styles.item}>
          <a href="/">
            <img alt="foto" src={justFoto} />
          </a>
          <h3 className={styles.nameWork}>name</h3>
          <p className={styles.data}>data</p>
        </li>
      </ul>
    </div>
  );
}
