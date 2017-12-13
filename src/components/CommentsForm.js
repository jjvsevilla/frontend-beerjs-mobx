import React, { Component } from 'react';

class CommentsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      comment: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.chelaCommentsStore.addComment(this.state.comment, this.state.user);
    this.resetForm();
  }

  resetForm = () => {
    this.setState({ user: '',comment: '' })
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  renderForm = () => {
    const { user, comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="comment-form">
        <input name="user" type="text" placeholder="Usuario" value={user} onChange={this.handleChange} />
        <input name="comment" type="text" placeholder="Comentario" value={comment} onChange={this.handleChange} />
        <input type="submit" hidden />
      </form>
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

export default CommentsForm;
