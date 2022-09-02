import styled from 'styled-components';

export const CoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: calc(100%);

  aside{
    margin-top: 1rem;
    transition: 0.25s;
  }

  aside + aside {
    padding-top: 2rem;
  }

  @media screen and (min-width: 56.25rem) {
   aside + aside {
    margin-top: 1rem;
   }
  }

  @media screen and (max-width: 40rem) {
   flex-direction: row;
   flex-wrap: wrap;
   aside {
    margin-left: 0rem;
    margin-top: 1.5rem;
   }

   aside + aside {
    padding-top: 0rem;
   }
  }
`;