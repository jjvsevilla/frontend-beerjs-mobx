import ChelasStore from './ChelasStore';
import CommentsStore from './CommentsStore';

const store = {
  ChelasStore: new ChelasStore(),
  CommentsStore: new CommentsStore()
}

window.store = store;

export default store;