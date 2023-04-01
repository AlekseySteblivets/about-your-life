import Contact from "../../components/Contact/Contact";
import Container from "../../components/Container/Container";
import LayoutSection from "../../views/LayoutSection/LayoutSection";
import styles from "./ContactPage.module.scss";

export default function ContactPage() {
  return (
    <>
      <LayoutSection id="contact" classNameProps={styles.contact}>
        <Container>
          <Contact />
        </Container>
      </LayoutSection>
    </>
  );
}
