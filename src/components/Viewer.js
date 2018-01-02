import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import Item from './Item';
import Comments from './Comments';

const MainPanel = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Panel = styled.div`
  width: 50%;
  margin-right: ${props => props.left ? '1rem' : '0'};
  margin-left: ${props => props.right ? '1rem' : '0'};
`;

class Viewer extends Component {
  componentWillMount() {
    const { match: { params: { chelaId }}, CommentsStore } = this.props;
    const hasComments = CommentsStore.hasComments(chelaId);
    if (!hasComments) {
      CommentsStore.initChelaComment(chelaId);
    }
  }

  render() {
    const { match: { params: { chelaId }}, ChelasStore, CommentsStore } = this.props;
    const chela = ChelasStore.findChela(chelaId);
    const comments = CommentsStore.getChelaComment(chelaId);
    return (
      <MainPanel>
        <Panel left>
          <Item chela={chela} />
        </Panel>
        <Panel right>
          <Comments chelaComments={comments} />
        </Panel>
      </MainPanel>
    )
  }
}

export default inject('ChelasStore', 'CommentsStore')(observer(Viewer));