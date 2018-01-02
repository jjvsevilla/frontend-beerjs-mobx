import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import Item from './Item';

const ItemWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  column-count: 3;
  column-gap: 2rem;

  &:hover {
    figure {
      opacity: 0.3;
    }
  }

  figure {
    transition: .8s opacity;

    &:hover {
      opacity: 1;
    }
  }
`;

const Grid = ({ ChelasStore }) => (
  <ItemWrapper>
    {ChelasStore.list.map((chela, i) => <Item key={i} chela={chela} />)}
  </ItemWrapper>
);

export default inject('ChelasStore')(observer(Grid));