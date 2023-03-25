import { Link } from "react-router-dom";
import styles from "./Portpholio.module.scss";
import { portpholioList } from "../../utils/portpholioList";

export default function Portpholio() {
  return (
    <div className={styles.block}>
      <div className={styles.list}>
        <ul className={styles.menu}>
          {portpholioList.map((namePortpholio) => {
            return (
              <li key={namePortpholio} className={styles.item}>
                <Link to={namePortpholio}>{namePortpholio}</Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.blockFilm}>
          <Link to="/video">films</Link>
        </div>
        <div className={styles.linkPrice}>
          <Link to="/price">PRICE</Link>
        </div>
      </div>
      <div className={styles.bgFoto}></div>
    </div>
  );
}
