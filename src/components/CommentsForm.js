import React, { Component } from 'react';
import { action } from 'mobx';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const Form = styled.form`
  input {
    width: 100%;
    border: 0;
    font-size: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #d3d3d3;
    outline: none;
  }
`;

class CommentsForm extends Component {
  @action handleSubmit = e => {
    e.preventDefault();
    const { user, comment } = this.props.CommentsStore;
    this.props.chelaCommentsStore.addComment(comment, user);
    this.props.CommentsStore.cleanForm();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.props.CommentsStore.setInput(name, value);
  }

  renderForm = () => {
    const { user, comment } = this.props.CommentsStore;
    return (
      <Form onSubmit={this.handleSubmit} className="comment-form">
        <input name="user" type="text" placeholder="Usuario" value={user} onChange={this.handleChange} />
        <input name="comment" type="text" placeholder="Comentario" value={comment} onChange={this.handleChange} />
        <input type="submit" hidden />
      </Form>
    )
  }

  render () {
    return (
      <div>
        {this.renderForm()}
      </div>
    )
  }
}

export default inject('CommentsStore')(observer(CommentsForm));
