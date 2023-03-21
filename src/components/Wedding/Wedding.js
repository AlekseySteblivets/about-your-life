import Cart from "../../lib/Cart/Cart";

import styles from "./Wedding.module.scss";

export default function Wedding() {
  return (
    <>
      <h2 className={styles.title}>Wedding</h2>
      <ul className={styles.menu}>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </ul>
    </>
  );
}
