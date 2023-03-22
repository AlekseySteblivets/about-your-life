import Cart from "../../lib/Cart/Cart";

import styles from "./Couples.module.scss";

export default function Couples() {
  return (
    <>
      <h2 className={styles.title}>Couples</h2>
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
