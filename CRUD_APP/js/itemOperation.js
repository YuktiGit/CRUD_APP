itemOperations = {
  items: [],
  add(itemObject) {
    this.items.push(itemObject);
  },
  sort() {
    return this.items.sort((a, b) => a.iid - b.iid);
  },
  remove() {
    this.items = this.items.filter((itemObject) => !itemObject.isMarked);
    return this.items;
  },
  search(id) {
    return this.items.find((itemObject) => itemObject.id == id);
  },
  update() {},
};
