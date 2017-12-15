import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import CommentsForm from './CommentsForm';

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Comment = styled.p`
  padding-bottom: 0.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid #d3d3d3;

  strong {
    margin-right: 5px
  }
`;

class Comments extends Component {
  renderComment = (comment, i) => {
    const { user, text } = comment;
    return (
      <Comment key={i}>
        <strong>{user}: </strong>
        <span>{text}</span>
      </Comment>
    )
  }

  renderComments = () => {
    return (
      <CommentsWrapper>
        {this.props.chelaComments.comments.map(this.renderComment)}
      </CommentsWrapper>
    )
  }

  render () {
    return (
      <div>
        {this.renderComments()}
        <CommentsForm chelaCommentsStore={this.props.chelaComments} />
      </div>
    )
  }
}

export default observer(Comments);
