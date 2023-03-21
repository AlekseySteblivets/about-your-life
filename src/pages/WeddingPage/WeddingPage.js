import Container from "../../components/Container";
import Wedding from "../../components/Wedding/Wedding";
import LayoutSection from "../../views/LayoutSection";

import styles from "./WeddingPage.module.scss";

export default function WeddingPage() {
  return (
    <>
      <LayoutSection id="weddingPage" classNameProps={styles.wedding}>
        <Container>
          <Wedding />
        </Container>
      </LayoutSection>
    </>
  );
}
