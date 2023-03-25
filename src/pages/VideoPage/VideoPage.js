import Container from "../../components/Container";
import VideoPortpholio from "../../components/VideoPortpholio/VideoPortpholio";
import LayoutSection from "../../views/LayoutSection";

import styles from "./VideoPage.module.scss";

export default function VideoPage() {
  return (
    <>
      <LayoutSection id="VideoPage" classNameProps={styles.videoPage}>
        <Container>
          <VideoPortpholio />
        </Container>
      </LayoutSection>
    </>
  );
}
