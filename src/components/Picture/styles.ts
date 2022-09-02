import styled from 'styled-components';

interface ImgProps{
  imagem?: string;
  type?: number;
}

export const PictureCard = styled.div`
  background: black;
  width: 16rem;
  height: ${(props:ImgProps) => props.type === 0 ? '24rem' : '16rem'};
  overflow: hidden;
  border-radius: 1rem;
  transition: 0.25s;
  display: flex;
  justify-content: center;
  align-items: center;
  
  div + & {
    margin-left: 1rem;
  }

  @media screen and (max-width: 37.8125rem) {
    margin-bottom: 1rem;
    div + &{
      margin-left: 0;
    }
    width: 20rem;
    height: ${(props:ImgProps) => props.type === 0 ? '28rem' : '20rem'};
  }

  @media screen and (max-width: 42.8125rem) {
    margin-bottom: 1rem;
    width: 20rem;
    height: ${(props:ImgProps) => props.type === 0 ? '28rem' : '20rem'};
  }


  @media screen and (max-width: 54.375rem) {
    margin-bottom: 1rem;
    width: 20rem;
    height: ${(props:ImgProps) => props.type === 0 ? '28rem' : '20rem'};
  }

  &:hover {
    transform: scale(105%);

    div {
      left: 0rem;
      display: block;
    }
  }

  &:active {
    transform: scale(100%);
  }
`;

export const InfoCard = styled.div`
  position: fixed;
  height: 16rem;
  width: 16rem;
  left: -16rem;
  background-color: rgba(0,0,0,0.5);

  backdrop-filter: blur(30px);

  transition: 0.25s ease-out;

  color: white;

  @media screen and (max-width: 54.375rem) {
    height: 28rem;
    width: 20rem;
    left: -20rem;
  }

  .TextContainer{
    margin: 1.75rem 1.5rem;
    
    h1{
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
  }

`;

export const Pic = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props:ImgProps) => props.imagem});
  background-position: center;
  background-size: cover;
`;