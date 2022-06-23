import { Container, Content, Nav, Logo } from "./styles";
import logo from '../../assets/images/logo.svg';
import NavShowIcon from '../../assets/images/navShowIcon.svg';
import NavCloseIcon from '../../assets/images/close.svg';
import NavLightIcon from '../../assets/images/light.svg';
import NavDarkIcon from '../../assets/images/moon.svg';
import NavBrazilIcon from '../../assets/images/hexa.svg';
import axios from 'axios';

import { MouseEventHandler, useEffect, useState } from "react";
import { NavButton } from "../NavButton";
import { NavIconButton } from "../NavIconButton";

const data = {
  sections: [
    {
      displayName: "Início",
      realName: "home"
    },

    {
      displayName: "Sobre mim",
      realName: "aboutMe"
    },
    {
      displayName: "Habilidades",
      realName: "habilities"
    },
    {
      displayName: "Contatos",
      realName: "contacts"
    },
    {
      displayName: "Portfólio",
      realName: "portfolio"
    },
    {
      displayName: "Projetos",
      realName: "projects"
    }
  ],
};

interface HeaderProps {
  changeNav: (name: string) => void;
  nav: string;
}

interface Section {
  displayName: string;
  realName: string;
}

interface Button {
  name: string;
  src: string;
  alt: string;
  selected: string;
}

export function Header({ changeNav, nav }: HeaderProps) {

  const [navPlaces, setNavPlaces] = useState<Section[]>(data.sections);
  const [headerPosition, setHeaderPosition] = useState(0);
  
  window.addEventListener('scroll', () => {
    window.scrollY < 74 ? setHeaderPosition(0) : setHeaderPosition(1)
  });

  return (
    <Container id="header" headerPosition={headerPosition} >
      <Content>
        <Logo>Sou <span>Letícia Reis</span></Logo>
        <Nav>

          <ul>
            <NavIconButton src={NavCloseIcon} alt={"Show"} selected="none" handleClick={() => {
              document.querySelectorAll('ul')[0].style.animation = 'headerPop 0.25s';
              setTimeout(() => {
                document.querySelectorAll('ul')[0].className = '';
                document.querySelectorAll('ul')[0].style.animation = 'headerFixed 0.25s ease-out';
              }, 250);
            }} />
            {navPlaces.map(
              (sections: Section) => (
                <NavButton nav={nav} key={sections.realName} changeNav={changeNav} realName={sections.realName} >{sections.displayName}</NavButton>
              )
            )}
          </ul>

          <NavIconButton src={NavShowIcon} alt={"Show"} selected="none" handleClick={() => {
            document.querySelectorAll('ul')[0].className = 'ul-show';
          }} />
        </Nav>
      </Content>
    </Container>
  )
}