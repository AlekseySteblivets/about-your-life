import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "../../lib/Select";

import { portpholioList } from "../../utils/portpholioList";
import { navigationList } from "../../utils/navigationList";

import styles from "./Navigation.module.scss";

export default function Navigation() {
  const [portpholioEl, setportpholioEl] = useState("portfolio");

  const passPortpholioEl = (selectedEl) => {
    setportpholioEl(selectedEl);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {navigationList.map((nameNav) => {
          if (nameNav === "home") {
            return (
              <li key={nameNav} className={styles.item}>
                <a href="/">{nameNav}</a>
              </li>
            );
          }
          if (nameNav === "portpholio") {
            return (
              <li key={nameNav} className={styles.item}>
                <Select
                  arrData={portpholioList}
                  currData={portpholioEl}
                  passNumberMonthOrYear={passPortpholioEl}
                />
              </li>
            );
          } else {
            return (
              <li key={nameNav} className={styles.item}>
                <Link to={nameNav}>{nameNav}</Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}

// <li className={styles.item}>
//         <Link to="/">home</Link>
//       </li>
//       <li className={styles.item}>
//         {/* <a href="/">portpholio</a> */}
//         <Select
//           arrData={monthList}
//           currData={numberMonth}
//           passNumberMonthOrYear={passNumberMonth}
//         />
//       </li>
//       <li className={styles.item}>
//         <Link to="/price">price</Link>
//       </li>
//       <li className={styles.item}>
//         <a href="/">video</a>
//       </li>
//       <li className={styles.item}>
//         <a href="/">contact</a>
//       </li>
