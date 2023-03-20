import styles from "./Price.module.scss";
import fotoWedding from "../../assets/img/price/wedding-image360.jpg";
import fotoFamily from "../../assets/img/price/family-image360.jpg";
import fotoCouples from "../../assets/img/price/couples-image360.jpg";
// import fotoPortrait from "../../assets/img/price/family-image360.jpg";

export default function Price() {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>price</h2>
      <div className={styles.blockWedding}>
        <h3 className={styles.titleMenu}>wedding</h3>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <h4 className={styles.itemTitle}> 3 hour</h4>
            <img src={fotoWedding} alt="wedding foto " />
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo li gula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturienmontes, nascetur ridi culus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <button type="button" className={styles.button}>
              read more
            </button>
          </li>
          <li className={styles.item}>
            <h4 className={styles.itemTitle}> 8 hour</h4>
            <img src={fotoWedding} alt="wedding foto " />
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo li gula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturienmontes, nascetur ridi culus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <button type="button" className={styles.button}>
              read more
            </button>
          </li>
          <li className={styles.item}>
            <h4 className={styles.itemTitle}> 12 hour</h4>
            <img src={fotoWedding} alt="wedding foto " />
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo li gula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturienmontes, nascetur ridi culus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <button type="button" className={styles.button}>
              read more
            </button>
          </li>
        </ul>
      </div>

      <div className={styles.blockOtherPhotos}>
        <div className={styles.blockWedding}>
          <h3 className={styles.titleMenu}>family</h3>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <img src={fotoFamily} alt="wedding foto " />
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo li gula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturienmontes, nascetur ridi culus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <button type="button" className={styles.button}>
                read more
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.blockWedding}>
          <h3 className={styles.titleMenu}>couples</h3>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <img src={fotoCouples} alt="wedding foto " />
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo li gula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturienmontes, nascetur ridi culus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <button type="button" className={styles.button}>
                read more
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.blockWedding}>
          <h3 className={styles.titleMenu}>portrait</h3>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <img src={fotoCouples} alt="wedding foto " />
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo li gula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturienmontes, nascetur ridi culus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <button type="button" className={styles.button}>
                read more
              </button>
            </li>
          </ul>
        </div>
      </div>

      <p className={styles.textFinal}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        li gula eget dolor. Aenean massa.
      </p>
    </div>
  );
}
