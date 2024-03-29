import { Outlet, useLocation } from "react-router-dom";

import Container from "../../components/Container";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import LayoutSection from "../../views/LayoutSection";

import cn from "classnames";

import styles from "./Layout.module.scss";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <LayoutSection
        element="header"
        id="header"
        classNameProps={cn(styles.header, {
          [styles.headerRoute]: location.pathname !== "/",
        })}
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
