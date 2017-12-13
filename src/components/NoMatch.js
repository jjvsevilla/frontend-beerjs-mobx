import React from 'react';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
   max-width: 500px;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   align-items: center;

   p {
     font-size: 2rem;
   }
`;

const NoMatch = () => {
  return (
    <NotFoundWrapper>
      <img src={`${process.env.PUBLIC_URL}/404-Face.png`} alt="Not found!"/>
      <p>404 - Not found!</p>
    </NotFoundWrapper>
  )
}

export default NoMatch;