import Container from "../../components/Container";
import PortpholioItem from "../../components/PortpholioItem/PortpholioItem";

import LayoutSection from "../../views/LayoutSection";

import styles from "./PortpholioPage.module.scss";

export default function PortpholioPage({ pathNamePortpholio }) {
  return (
    <>
      <LayoutSection id={pathNamePortpholio} classNameProps={styles.couples}>
        <Container>
          <PortpholioItem pathNamePortpholio={pathNamePortpholio} />
        </Container>
      </LayoutSection>
    </>
  );
}
