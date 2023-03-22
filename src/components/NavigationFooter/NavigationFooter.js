import { Link } from "react-router-dom";
import { useState } from "react";
import SelectFooter from "../../lib/SelectFooter";

import styles from "./NavigationFooter.module.scss";

export default function NavigationFooter() {
  const [numberMonth, setNumberMonth] = useState("portfolio");
  const monthList = ["wedding", "couples", "family", "portrait"];

  const passNumberMonth = (selectedEl) => {
    setNumberMonth(selectedEl);
  };

  return (
    <nav className={styles.navFooter}>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <Link to="/">home</Link>
        </li>
        <li className={styles.item}>
          {/* <a href="#">portfolio</a>
           */}
          <SelectFooter
            arrData={monthList}
            currData={numberMonth}
            passNumberMonthOrYear={passNumberMonth}
          />
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
