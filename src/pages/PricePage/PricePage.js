import Container from "../../components/Container";
import Navigation from "../../components/Navigation/Navigation";
import Price from "../../components/Price/Price";
import LayoutSection from "../../views/LayoutSection";

import styles from "./PricePage.module.scss";

export default function PricePage() {
  return (
    <>
      <LayoutSection id="newWorks" classNameProps={styles.price}>
        <Container>
          <Price />
        </Container>
      </LayoutSection>
    </>
  );
}
