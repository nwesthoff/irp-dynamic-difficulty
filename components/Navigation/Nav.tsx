import React, { ReactNode, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { MdMenu } from "react-icons/md";
import { darken } from "polished";
import { FrontMatter } from "types";
import { frontMatter as chapters } from "../../pages/chapters/*.mdx";
import AlertBar from "@components/AlertBar";
import formatPath from "@utils/formatPath";

const SmallNav = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: flex-end;
  height: 60px;
  width: 100%;
`;

const NavCollapse = styled.div`
  position: fixed;
  z-index: 98;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  font-size: 3rem;
  font-weight: 600;
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    line-height: 1.5em;
    padding-left: 0;
  }

  a {
    text-decoration: none;
    color: var(--color-fg);

    &:hover {
      color: var(--color-secondary);
    }
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    font-size: 2.4rem;
  }
`;

const NavBar = styled.div`
  position: relative;
  top: 0;
  z-index: 999;
`;

const NavToggle = styled.button`
  border: none;
  margin: 0;
  text-decoration: none;
  background: ${theme.colors.primary};
  color: #ffffff;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0.8rem;
  height: 60px;
  width: 60px;

  &:hover {
    background: ${darken(0.05, theme.colors.primary)};
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    height: 40px;
    width: 40px;
  }
`;

interface Props {
  alert?: ReactNode | string;
}

export default function Nav({ alert }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavBar>
      <SmallNav>
        {alert ? <AlertBar alertText={alert} /> : null}
        <NavToggle
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <MdMenu size={16} />
        </NavToggle>
      </SmallNav>
      {menuOpen ? (
        <nav>
          <NavCollapse>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              {chapters.map((chapter: FrontMatter, i: number) => (
                <li key={chapter.title}>
                  <Link href={`/${formatPath(chapter.__resourcePath)}`}>
                    <a>{chapter.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </NavCollapse>
        </nav>
      ) : null}
    </NavBar>
  );
}
