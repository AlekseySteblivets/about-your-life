// import { useParams, useSearchParams, useLocation } from "react-router-dom";

import Container from "../../components/Container";

import Price from "../../components/Price/Price";
import LayoutSection from "../../views/LayoutSection";

import styles from "./PricePage.module.scss";

export default function PricePage() {
  // const qwe = useParams();
  // console.log("qwePricePage", qwe);

  // const [searchParams] = useSearchParams();
  // console.log("searchParams", searchParams);

  // const location = useLocation();
  // console.log("location", location);

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
