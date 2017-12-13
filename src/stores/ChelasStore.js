import { observable, action } from 'mobx';
import chelas from '../data/chelas';

class Chela {
  id;
  name;
  @observable likes;
  image;

  constructor(id, name, likes, image) {
    this.id = id;
    this.name = name;
    this.likes = likes;
    this.image = image;
  }

  @action setLikes(likes) {
    this.likes = likes;
  }

  @action increase() {
    this.setLikes(this.likes + 1)
  }
}

class ChelasStore {
  @observable list = [];

  constructor() {
    chelas.forEach(({ id, name, likes, image }) => {
      this.list.push(new Chela(id, name, likes, image))
    })
  }

  findChela(id) {
    return this.list.find(chela => chela.id === id);
  }

}

export default ChelasStore;