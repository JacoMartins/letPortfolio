import styled from 'styled-components';

interface Props {
  type: string;
  link?: string | null;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props: Props) => props.type === 'skill' ? 'auto' : props.type === 'contact' ? '21.5rem' : '25rem'};
  height: 4.24rem;
  background: transparent;
  outline: 0;
  border: 0;
  /* border: solid 2px black; */
  justify-content: center;
  cursor: ${(props: Props) => props.link? props.type === 'skill' ? 'default' : 'pointer' : 'default'};
  transition: 0.15s ease-out;

  @media screen and (max-width: 30.3125rem) {
    width: ${(props: Props) => props.type === 'skill'? '22.5rem' : props.type === 'contact' ? '23.5rem' : '23rem'};
  }

  .TitleContainer + &{
    margin-top: 1rem;
  }

  &:hover{
    transform: translate(0, -0.125rem);
    svg {
      transition: 0.15s ease-in;
      filter: drop-shadow(0rem 0.25rem 0.5rem rgba(255, 247, 0, 0.5));
    }
  }
  
  div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: left;
    text-align: left;
    color: var(--text-dark-half);
    width: ${(props: Props) => props.type === 'skill' ? 'auto' : props.type === 'contact' ? '18rem' : '23.5rem'};

    @media screen and (max-width: 30.3125rem) {
      width: ${(props: Props) => props.type === 'skill' ? '20.5rem' : props.type === 'contact' ? '20rem' : '21.5rem'};
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
      
      h3{ 
        color: var(--text-dark);
        font-weight: 600;
        font-size: 1.125rem;
      }
    }

    img:last-child {
      display: ${(props: Props) => props.type === 'skill' ? 'none' : 'block'};
      height: 1rem;
      width: 0.625rem;
      margin: auto 0 auto 1rem;
    }

    svg {
      filter: brightness(1);
      min-height: 2.375rem;
      min-width: 2.375rem;
      max-height: 2.375rem;
      max-width: 2.375rem;
      transition: 0.15s ease-in;
    }
  }
`;