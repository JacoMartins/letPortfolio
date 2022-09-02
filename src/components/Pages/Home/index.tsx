import React, { useState, useEffect, ReactNode } from 'react';
import { Phone, InstagramLogo, Envelope } from 'phosphor-react';

import {
  PresentSection, PresentContainer, PageMain, AboutMeSection, AboutMeContainer, AbilitiesSection, SectionTitle, SectionText, AbilitiesContainer, ProjectsSection, ProjectsContainer, Sect, SectContainer, Container, Footer

} from './styles';
import { Summary } from '../../Summary';
import { IconButton } from '../../IconButton';

import darkPicture from '../../../assets/images/letmain.jpeg';
import lightPicture from '../../../assets/images/letmain.jpeg';
import instagramLogo from '../../../assets/images/instagram.svg';
import email from '../../../assets/images/email.svg';
import { Logo } from '../../Header/styles';
import { PictureCard } from '../../Picture/styles';
import { Picture } from '../../Picture';

import { letContact, letCourses, letSummary1, letSummary2, Projetos, Sobre } from './data';
import { PicContainer } from '../../PicContainer';


interface PageType {
  changeNav: (name: string) => void;
}

interface Elmnt {
  element: HTMLElement;
}

export function Page({ changeNav }: PageType) {

  return (
    <PageMain>

      <PresentSection id="home" >
        <PresentContainer >

          <div className="Container">
            <div className="TextContainer">
              <h1>Sou <span>Letícia Reis</span></h1>
              <h2>Produtora de moda e stylist</h2>
              <button onClick={() => {
                window.scrollTo(0, document.getElementById('contacts')!.offsetTop - document.getElementById('header')!.offsetHeight)
              }}>Entrar em contato</button>
            </div>
            <div className="Picture">
              <img src={darkPicture} alt="Foto de Letícia" />
            </div>
          </div>

        </PresentContainer>
      </PresentSection>


      <AboutMeSection id="aboutMe" >
        <AboutMeContainer>
          <div className='TextContainer'>

            <SectionTitle>Sobre mim</SectionTitle>

            <SectionText>
              Meu nome é Ana Letícia Sousa dos Reis, tenho 18 anos e estudo Produção de Moda e Stylist na EEEP Leonel de Moura Brizola.
            </SectionText>

            <div className='SoftSkills'>
              <IconButton
                text='Gosto de tudo que envolva arte, seja dança, canto ou música'
                description=''
                image='Music'
                link=''
                type='skill'
              />

              <IconButton
                text='Gosto de cozinhar'
                description=''
                image='Cook'
                link=''
                type='skill'
              />

              <IconButton
                text='E também de fotografar.'
                description=''
                image='Camera'
                link=''
                type='skill'
              />
            </div>

          </div>

          {Sobre.map(
            (item) => {
              return (
                <Summary key={item.key} type='Imagem' title={item.titulo} subTitle={item.descricao}>
                  <Container>
                    {item.items.map(
                      (item_) => {
                        return (
                          <Picture key={item_.key} titulo={item_.titulo} texto={item_.texto} alt={item_.alt} imagem={item_.src} type={0} />
                        )
                      }
                    )}
                  </Container>
                </Summary>
              )
            }
          )}

        </AboutMeContainer>
      </AboutMeSection>


      <AbilitiesSection id="habilities">
        <AbilitiesContainer >
          <div className='TextContainer'>
            <SectionTitle >Habilidades</SectionTitle>
          </div>

          <div className='SummaryContainer'>
            <Summary type='%list' title="Social Media" subTitle='' summaries={letSummary1} />
            <Summary type='%list' title="Marketing Digital" subTitle='' summaries={letSummary2} />
          </div>
        </AbilitiesContainer>
      </AbilitiesSection>

      <Sect id="contacts">
        <SectContainer>
          <SectionTitle>Contato</SectionTitle>

          <Container>
            {letContact.map((item) => {
              return (
                <>
                  <IconButton
                    key={item.description}
                    text={item.text}
                    description={item.description}
                    image={item.image}
                    link={item.link}
                    type={item.type}
                  />
                </>
              )
            })}
          </Container>
        </SectContainer>
      </Sect>

      <Sect id="portfolio">
        <SectContainer>
          <SectionTitle>Portfólio</SectionTitle>
          <div className='ColumnContainer'>
            <Summary type="Imagem" title="Marketing Digital" subTitle="Veja aqui alguns trabalhos de marketing digital que realizei">
              <hr></hr>
              <PicContainer>
                {Projetos.map(
                  (item) => {
                    return (
                      <Summary key={item.key} type='Imagem' title={item.titulo} subTitle={item.descricao}>
                        <Container>
                          {item.items.map(
                            (item_) => {
                              return (
                                <Picture key={item_.key} type={1} titulo={item_.titulo} texto={item_.texto} alt={item_.alt} imagem={item_.src} />
                              )
                            }
                          )}
                        </Container>
                      </Summary>
                    )
                  }
                )}
              </PicContainer>
            </Summary>
          </div>
        </SectContainer>
      </Sect>

      <Sect id="projects">
        <SectContainer>
          <SectionTitle>Projetos</SectionTitle>
          <Container>
            <Summary type='Button' title='Cursos e Certificados' subTitle='Encontre aqui os meus certificados em andamento.'>

              {letCourses.map(
                (item) => (
                  <IconButton
                    key={item.description}
                    text={item.text}
                    description={item.description}
                    image={item.image}
                    link={item.link}
                    type={item.type}
                  />
                )
              )}
            </Summary>
          </Container>
        </SectContainer>
      </Sect>


      <Footer>
        <SectContainer>

          <div className='FooterMain'>
            <div className='LogoContainer'>
              <Logo>
                Sou <span>Leticia Reis</span>
              </Logo>

              <SectionText tone='half'>Meu Portfólio</SectionText>
            </div>

            <div className='FooterContent'>
              <a onClick={() => {
                window.scrollTo(0, document.getElementById('home')!.offsetTop - document.getElementById('header')!.offsetHeight)
                changeNav('home');
              }}>
                <SectionText>Início</SectionText></a>
              <a onClick={() => {
                window.scrollTo(0, document.getElementById('aboutMe')!.offsetTop - document.getElementById('header')!.offsetHeight)
                changeNav('aboutMe');
              }}><SectionText>Sobre mim</SectionText></a>
              <a onClick={() => {
                window.scrollTo(0, document.getElementById('habilities')!.offsetTop - document.getElementById('header')!.offsetHeight)
                changeNav('habilities');
              }}><SectionText>Habilidades</SectionText></a>
              <a onClick={() => {
                window.scrollTo(0, document.getElementById('contacts')!.offsetTop - document.getElementById('header')!.offsetHeight)
                changeNav('contacts');
              }}><SectionText>Contatos</SectionText></a>
              <a onClick={() => {
                window.scrollTo(0, document.getElementById('portfolio')!.offsetTop - document.getElementById('header')!.offsetHeight)
                changeNav('portfolio');
              }}><SectionText>Portfólio</SectionText></a>
              <a onClick={() => {
                window.scrollTo(0, document.getElementById('projects')!.offsetTop - document.getElementById('header')!.offsetHeight)
                changeNav('projects');
              }}><SectionText>Projetos</SectionText></a>
            </div>
          </div>

        </SectContainer>
      </Footer>
    </PageMain>
  )
}