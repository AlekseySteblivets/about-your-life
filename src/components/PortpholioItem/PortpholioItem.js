import Cart from "../../lib/Cart/Cart";

import styles from "./PortpholioItem.module.scss";

export default function PortpholioItem({ pathNamePortpholio }) {
  return (
    <>
      <h2 className={styles.title}>{pathNamePortpholio}</h2>
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
