import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import { NextPage } from "next";
import ContentContainer from "../../components/ContentContainer";
import NextChapter from "../../components/Navigation/NextChapter";
import Citation from "../../components/Bibliography/Citation";

const IntroductionPage: NextPage = () => (
  <Layout title="Introduction | Dynamic Difficulty">
    <PageWrapper>
      <PageIntroduction>
        <h1>Introduction</h1>
        <p>
          Escape rooms are more so about escaping reality for an hour or two,
          than to break free from a small claustrophobic room.
        </p>
      </PageIntroduction>

      <ContentContainer>
        <h2>More introduction</h2>
        <p>
          this is it <Citation id="FIXME">Test</Citation>{" "}
        </p>
      </ContentContainer>
    </PageWrapper>
    <NextChapter title="Discover" index={1} />
  </Layout>
);

export default IntroductionPage;
