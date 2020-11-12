import Layout from "../components/Layout";
import ChapterBlock from "../components/ChapterBlock";
import PageIntroduction from "../components/PageIntroduction";
import { PageWrapper } from "../components/PageWrapper";
import { theme } from "../config/theme";
import styled from "styled-components";
const NameLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;

const IndexPage = () => (
  <Layout title="Dynamic Difficulty">
    <PageWrapper>
      <PageIntroduction>
        <h1 style={{ marginBottom: "1.2rem" }}>Dynamic Difficulty</h1>
        <h2 style={{ marginTop: "0" }}>in escape rooms</h2>
        <p>
          This is an Industry Research Project on Dynamic Difficulty in Escape
          Rooms. <i>Work in progress.</i>
        </p>
        <p style={{ fontSize: ".8em", border: "none" }}>
          BY{" "}
          <NameLink href="https://nilswesthoff.com" target="blank">
            NILS WESTHOFF
          </NameLink>{" "}
          <br />
          <span style={{ opacity: 0.5 }}>
            FEBRUARY 2021 | WORD COUNT: ?????
          </span>
        </p>
      </PageIntroduction>

      <ChapterBlock title="Introduction" index={0}>
        What are escape rooms?
      </ChapterBlock>
    </PageWrapper>
  </Layout>
);

export default IndexPage;
