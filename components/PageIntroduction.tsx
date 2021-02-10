import styled from "styled-components";
import { theme } from "../config/theme";

const PageIntroduction = styled.div`
  width: 1200px;
  max-width: 100%;
  margin-bottom: 3rem;

  h1 {
    font-size: 6rem;
    line-height: 1em;
    margin-top: 0;
  }

  h2 {
    color: var(--color-text-mute);
    margin-bottom: 0.4rem;
  }

  p {
    border-left: 1px solid #979797;
    padding-left: 3rem;
    max-width: 630px;
    color: var(--color-fg);
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    h1 {
      font-size: 2.4rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    h1 {
      font-size: 1.6rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;

export default PageIntroduction;
