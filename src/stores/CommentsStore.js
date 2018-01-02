import { observable, action, computed } from 'mobx';
import comments from '../data/comments';

class Comment {
  text;
  user;

  constructor(text, user) {
    this.text = text;
    this.user = user;
  }
}

class ChelaComment {
  chelaId;
  @observable comments = [];

  constructor(chelaId, comments) {
    this.chelaId = chelaId;
    this.setComments(comments);
  }

  @computed get total() {
    return this.comments.length;
  }

  @action setComments = (comments) => {
    Object.keys(comments).forEach(commentKey => {
      const { text, user } = comments[commentKey]
      this.comments.push(new Comment(text, user))
    });
  }

  @action clearComments = () => {
    this.comments = [];
  }

  @action addComment = (text, user) => {
    this.comments.push(new Comment(text, user));
  }
}

class CommentsStore {
  @observable list = [];
  @observable user = '';
  @observable comment = '';

  constructor() {
    Object.keys(comments).forEach(chelaKey => {
      const chelaComments = comments[chelaKey];
      this.list.push(new ChelaComment(chelaKey, chelaComments));
    });
  }

  getChelaComment(id) {
    return this.list.find(chelaComment => chelaComment.chelaId === id);
  }

  hasComments(id) {
    const item = this.list.find(chelaComment => chelaComment.chelaId === id);
    return !!item;
  }

  @action initChelaComment = (chelaId) => {
    const newChelaComment = new ChelaComment(chelaId, []);
    this.list.push(newChelaComment);
  }

  @action setInput(name, value) {
    this[name] = value;
  }

  @action cleanForm() {
    this.user = '';
    this.comment = '';
  }
}

export default CommentsStore;