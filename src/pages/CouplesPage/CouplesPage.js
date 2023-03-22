import Container from "../../components/Container";
import Couples from "../../components/Couples/Couples";

import LayoutSection from "../../views/LayoutSection";

import styles from "./CouplesPage.module.scss";

export default function CouplesPage() {
  return (
    <>
      <LayoutSection id="couplesPage" classNameProps={styles.couples}>
        <Container>
          <Couples />
        </Container>
      </LayoutSection>
    </>
  );
}
