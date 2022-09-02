import styled from 'styled-components';

interface FontProps {
  tone?: string | null;
}

export const PageMain = styled.main`
  height: auto;
  width: auto;
  margin: 0;
`;

export const SectionTitle = styled.h1`
  line-height: 3rem;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;

  color: var(--text-dark);
`;

export const SectionText = styled.p`
  color: var(--text-dark${(props: FontProps) => props.tone ? `-${props.tone}` : null});
`;

export const Sect = styled.section`
  display: block;
  width: 100%;
  height: auto;
  padding: 3rem 0;
  border-top: solid 2px rgba(255, 255, 255, 0.08);
  background: var(--back-dark);
`;

export const Footer = styled.footer`
  display: block;
  width: 100%;
  height: auto;
  padding: 3rem 0;
  border-top: solid 2px rgba(255, 255, 255, 0.08);
  background: var(--back-dark);

  a {
    cursor: pointer;
  }
`;

export const SectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  .Container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: calc(100% - 80px);
    justify-content: center;

    @media screen and (max-width: 54.375rem) {
      justify-content: center;
    }
  }

  .ColumnContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: calc(100% - 80px);
    justify-content: center;

    @media screen and (max-width: 54.375rem) {
      justify-content: center;
    }
  }

  .FooterMain {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2rem;

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        color: var(--text-dark-half);
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export const PresentSection = styled.section`
  display: block;
  width: 100%;
  height: 44.375rem;
  background: var(--back-dark);
`;

export const PresentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  .Container {
    display: flex;
    flex-wrap: wrap-reverse;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 54.375rem) {
      justify-content: center;
    }

    .TextContainer {
      @media screen and (max-width: 54.375rem) {
        margin-top: 2rem;

        text-align: center;
      }

      h1 {
        line-height: 3rem;
        margin: 0 0 1rem 0 ;
        font-size: 2.5rem;

        color: var(--text-dark);
  
        span {
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--yellow);
        }
      }
  
      h2{
        width: 30.3125rem;
  
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: -0.05em;
        
        color: var(--text-dark-pres);
  
        opacity: 0.85;

        @media screen and (max-width: 30.3125rem) {
          width: auto;
          margin: 0 2.5rem 0rem 2.5rem;
        }
      }

    }

    .Picture {
      height: 16rem;
      width: 18.75rem;
      border-radius: 16rem;
      background-image: url${() => {
    let isDevelopment = 0;

    if (isDevelopment === 0) {
      return '(/assets/letmain.89d2a3bc.jpeg)'
    } else {
      return '(../../src/assets/images/letmain.jpeg)'
    }

  }};
      background-size: 125%;
      background-position: 45% 10%;
      overflow: hidden;

      img {
        display: none;
      }
    }

    button {
      padding: 0.5rem 0.875rem;
      margin: 1.5rem 0 0 0;
      background: rgba(255, 255, 255, 0.05);
      color: var(--yellow);
      outline: none;
      border: none;
      border-radius: 1.2rem;
      transition: 0.05s ease-in;

      @media screen and (max-width: 40rem) {
        padding: 0.75rem 0.9rem;
        margin: 1.5rem 0 0 0;
        font-size: 1.125rem;
        border-radius: 1.8rem;
      }

      &:hover{
        filter: brightness(0.9);
      }

      &:active {
        transform: scale(0.975);
        filter: brightness(0.8);
      }
    }
  }  
`;

export const AboutMeSection = styled.section`
  display: block;
  width: 100%;
  height: auto;
  padding: 3rem 0;
  border-top: solid 2px rgba(255, 255, 255, 0.08);
  background: var(--back-dark);
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  .TextContainer{
    width: 22.5rem;
    margin-bottom: 1rem;

    h1{
      line-height: 3rem;
      margin-bottom: 2rem;
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;

      color: var(--text-dark);
    }

    p {
      text-align: center;
      margin-bottom: 1.5rem;

      color: var(--text-dark-half);

      @media screen and (max-width: 30.3125rem) {
        width: auto;
        margin: 0 2.5rem 2rem 2.5rem;
      }
    }

    .SoftSkills {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`

export const AbilitiesSection = styled.section`
  display: block;
  width: 100%;
  height: auto;
  border-top: solid 2px rgba(255, 255, 255, 0.08);
  background: var(--back-dark);
  padding: 3rem 0;
`;

export const AbilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  color: var(--text-dark);

  .TextContainer{
    width: 22.5rem;

    h1{
      line-height: 3rem;
      margin-bottom: 3rem;
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
    }

    p {
      text-align: center;
    }
  }

  .SummaryContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: calc(100% - 2.5rem);

    aside{
      transition: 0.25s;
    }

    @media screen and (min-width: 56.25rem) {
      aside + aside {
        margin-left: 4.5rem;
        margin-top: 0;
      }
    }

    @media screen and (max-width: 40rem) {
      flex-direction: column;
      aside + aside {
        margin-top: 2rem;
        margin-left: 0;
      }
    }
  }
`

export const ProjectsSection = styled.section`
  display: block;
  width: 100%;
  height: auto;
  border-top: solid 2px rgba(255, 255, 255, 0.08);
  background: var(--back-dark);
  padding: 3rem 0;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  .ButtonContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 56.25rem) {
      
    }

    @media screen and (max-width: 40rem) {
      flex-direction: column;
    }
  }
`;