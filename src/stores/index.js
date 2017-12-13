import ChelasStore from './ChelasStore';
import CommentsStore from './CommentsStore';

const store = {
  ChelasStore: new ChelasStore(),
  CommentsStore: new CommentsStore()
}

export default store;