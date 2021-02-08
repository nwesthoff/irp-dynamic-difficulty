import React, { useState, useEffect, ReactElement } from "react";
import { MdPause, MdPlayArrow } from "react-icons/md";
import styled from "styled-components";

const QuoteWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-top: 3.2rem;
  margin-bottom: -4.4rem;
  margin-left: 2rem;
`;

const StyledButton = styled.button`
  height: 50px;
  width: 50px;
  font-size: 24px;
  margin-right: 1.2rem;
  background: var(--color-primary);
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: var(--color-primary-dark);
  }
`;

interface Props {
  url: string;
}

const PlayQuote = ({ url }: Props): ReactElement => {
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>();
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    !playing ? audio?.play() : audio?.pause();
    setPlaying(!playing);
  };

  useEffect(() => {
    const audioState = new Audio(url);
    setAudio(audioState);

    audioState?.addEventListener("ended", () => setPlaying(false));
    return () => {
      audioState?.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return (
    <QuoteWrap>
      <StyledButton onClick={toggle}>
        {playing ? <MdPause /> : <MdPlayArrow />}
      </StyledButton>
      <p>Listen</p>
    </QuoteWrap>
  );
};

export default PlayQuote;
