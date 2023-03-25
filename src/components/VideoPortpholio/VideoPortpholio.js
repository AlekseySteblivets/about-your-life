import CartVideo from "../../lib/CartVideo";

import fotoWedding from "../../assets/img/price/wedding-image360.jpg";

import styles from "./VideoPortpholio.module.scss";

export default function VideoPortpholio() {
  return (
    <>
      <div className={styles.blockTitleVideo}>
        <h2 className={styles.title}>FILMS about your real life </h2>
        <p className={styles.text}>
          Each movie is your special life story that inspires you to be even
          happier
        </p>
        <img src={fotoWedding} alt="some foto" className={styles.titleVideo} />
      </div>
      <div className={styles.blockOfPortfolio}>
        <h3 className={styles.titleBlockPortfolio}>Family</h3>
        <ul className={styles.menu}>
          <CartVideo />
          <CartVideo />
        </ul>
      </div>
      <div className={styles.blockOfPortfolio}>
        <h3 className={styles.titleBlockPortfolio}>Couples</h3>
        <ul className={styles.menu}>
          <CartVideo />
          <CartVideo />
        </ul>
      </div>
      <div className={styles.blockOfPortfolio}>
        <h3 className={styles.titleBlockPortfolio}>Short films</h3>
        <ul className={styles.menu}>
          <CartVideo />
          <CartVideo />
        </ul>
      </div>
      <p className={styles.textAboutWatchVideo}>
        You can watch all the movies on my YouTube channel
      </p>
      <p></p>
      <a
        className={styles.linkYouTube}
        href="https://www.youtube.com/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
      </a>
    </>
  );
}
