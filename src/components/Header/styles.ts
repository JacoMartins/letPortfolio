import styled from 'styled-components';
import polished from 'polished';

const HeaderSidePadding = 2;

interface ContainerProps{
  headerPosition: number;
}

export const Container = styled.header`
  position: fixed;
  animation: ${(props:ContainerProps) => props.headerPosition === 0? 'none' : 'headerFixed 0.25s ease-in'};
  display: flex;
  justify-content: center;
  height: 4.625rem;
  width: 100%;
  background: ${
    (props:ContainerProps) => 
      props.headerPosition === 0?
        'var(--back-dark)'
      :
        'rgba(10, 10, 10, 0.5)'
  };
  backdrop-filter: blur(90px);
  border-bottom: ${(props:ContainerProps) => props.headerPosition === 0? 'solid 2px rgba(0, 0, 0, 0.00)' : 'solid 2px rgba(0, 0, 0, 0.04)'};
  top: 0rem;
  z-index: 1;

  @keyframes headerFixed {
    0% {
      top: -4.625rem;
    }
    100%{
      top: 0rem;
    }
  }

  @keyframes headerPop {
    0% {
      top: 0;
      opacity: 0.5;
    }
    100%{
      top: -5rem;
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: calc(100% - ${HeaderSidePadding * 2}rem);
  
  margin: 0 0;

  @media screen and (max-width: 45rem) {
    width: calc(100% - ${HeaderSidePadding}rem);
  }
`;

export const Logo = styled.h2`
  width: auto;
  height: 24px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.05em;

  color: var(--text-dark);

  span {
    color: var(--yellow);
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.05em;
  }
`;

export const Nav = styled.nav`
  display: flex;

  ul{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 0px;

    button {
      display: none;
    }
    @media screen and (max-width: 54.375rem) {
      display: none;

      button{
        display: block;
      }
    }
  }
  
  @media screen and (max-width: 54.375rem) {

    .ul-show {
      position: absolute;
      animation: headerFixed 0.25s ease-out;
      top: 0px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0px;
      height: auto;
      background: var(--back-dark);
      z-index: 1;
      right: 0%;
      padding: 0.5rem;
      border-bottom: solid 2px rgba(255, 255, 255, 0.08);
      transition: 0.15s;

      button {
        position: absolute;
        top: 24px;
        right: 24px;
        background: transparent;
        img{
          filter: brightness(1);;
          height: 1.25rem;
          width: 1.25rem;
          opacity: 0.85;
        }
      }

      li { 
        padding: 1.5rem 2rem;
        a{
          font-size: 1.25rem;
          padding: 1.5rem 2rem;
        }
      }
    } 
  }

  ul + button {
    margin-left: 0.5rem;
  }

  button:last-child {
    display: none;

    img{
      margin: auto;
      filter: brightness(1);
      opacity: 0.85;
    }

    @media screen and (max-width: 54.375rem) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;