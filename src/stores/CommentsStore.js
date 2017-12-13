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
    comments.forEach(({ text, user }) => {
      this.comments.push(new Comment(text, user))
    });
  }

  @computed get total() {
    return this.comments.length;
  }

  @action addComment = (text, user) => {
    this.comments.push(new Comment(text, user));
  }
}

class CommentsStore {
  @observable list = [];

  constructor() {
    Object.keys(comments).forEach(chelaId => {
      const chelaComments = comments[chelaId];
      this.list.push(new ChelaComment(chelaId, chelaComments));
    });
  }

  findChelaComment(id) {
    return this.list.find(chelaComment => chelaComment.chelaId === id);
  }

  @action initChelaComment = (chelaId) => {
    const newChelaComment = new ChelaComment(chelaId, []);
    this.list.push(newChelaComment);
    return newChelaComment;
  }

  @action getChelaComment(id) {
    return this.findChelaComment(id) || this.initChelaComment(id);
  }
}

export default CommentsStore;