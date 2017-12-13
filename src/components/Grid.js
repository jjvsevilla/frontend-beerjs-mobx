import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import Item from './Item';

const ItemWrapper = styled.div`
  max-width: 1000px;
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

const Grid = ({ ChelasStore, CommentsStore }) => (
  <ItemWrapper>
    {ChelasStore.list.map((chela, i) => <Item key={i} chela={chela} comments={CommentsStore.getChelaComment(chela.id)} />)}
  </ItemWrapper>
);

export default inject('ChelasStore', 'CommentsStore')(observer(Grid));