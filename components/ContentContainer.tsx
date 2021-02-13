import styled from "styled-components";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${(props: { wide?: boolean }) =>
    props.wide ? "1200px" : "900px"};
  padding: 2rem 2rem;

  h1 {
    font-size: 2.4rem;
    line-height: 1.2em;

    @media (max-width: 768px) {
      margin-top: 3.2rem;
      font-size: 1.6rem;
      line-height: 1.2em;
    }
  }

  h2 {
    @media (max-width: 768px) {
      font-size: 1.4rem;
      line-height: 1.1em;
    }
  }
`;

export default ContentContainer;
