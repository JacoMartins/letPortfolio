import styled from 'styled-components';

export const CoreContainer = styled.div`
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
`;