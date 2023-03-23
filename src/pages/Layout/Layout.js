import { Outlet } from "react-router-dom";

import Container from "../../components/Container";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import LayoutSection from "../../views/LayoutSection";

import styles from "./Layout.module.scss";

export default function Layout() {
  // console.log("this.props", this.props);
  return (
    <>
      <LayoutSection
        element="header"
        id="header"
        classNameProps={styles.header}
      >
        <Container>
          <Navigation />
        </Container>
      </LayoutSection>
      <main>
        <Outlet />
      </main>
      <LayoutSection element="footer" id="footer" classNameProps={styles.hero}>
        <Container>
          <Footer />
        </Container>
      </LayoutSection>
    </>
  );
}
