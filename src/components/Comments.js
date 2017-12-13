import React, { Component } from 'react';
import { observer } from 'mobx-react';
import CommentsForm from './CommentsForm';

class Comments extends Component {

  renderComment = (comment, i) => {
    const { user, text } = comment;
    return (
      <p key={i} className="comment">
        <strong>{user}: </strong>
        <span>{text}</span>
      </p>
    )
  }

  renderComments = () => {
    return (
      <div className="comments">
        {this.props.chelaComments.comments.map(this.renderComment)}
      </div>
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
