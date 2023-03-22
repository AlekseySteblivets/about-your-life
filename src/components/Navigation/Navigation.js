import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "../../lib/Select";

import styles from "./Navigation.module.scss";

export default function Navigation() {
  const [numberMonth, setNumberMonth] = useState("portfolio");
  const monthList = ["wedding", "couples", "family", "portrait"];

  const passNumberMonth = (selectedEl) => {
    setNumberMonth(selectedEl);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <Link to="/">home</Link>
        </li>
        <li className={styles.item}>
          {/* <a href="/">portpholio</a> */}
          <Select
            arrData={monthList}
            currData={numberMonth}
            passNumberMonthOrYear={passNumberMonth}
          />
        </li>
        <li className={styles.item}>
          <Link to="/price">price</Link>
        </li>
        <li className={styles.item}>
          <a href="/">video</a>
        </li>
        <li className={styles.item}>
          <a href="/">contact</a>
        </li>
      </ul>
    </nav>
  );
}

// <nav className={styles.nav}>
//   <ul className={styles.menu1}>
//     <li className={styles.item}>
//       <a href="/">home</a>
//     </li>
//     <li className={styles.item}>
//       <a href="/">portpholio</a>
//     </li>
//   </ul>
//   <ul className={styles.menu2}>
//     <li className={styles.item}>
//       <a href="/">price</a>
//     </li>
//   </ul>
//   <ul className={styles.menu3}>
//     <li className={styles.item}>
//       <a href="/">video</a>
//     </li>
//   </ul>
//   <ul className={styles.menu4}>
//     <li className={styles.item}>
//       <a href="/">photobooks</a>
//     </li>
//     <li className={styles.item}>
//       <a href="/">contact</a>
//     </li>
//   </ul>
// </nav>;
