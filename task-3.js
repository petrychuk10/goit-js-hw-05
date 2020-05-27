class Storage {
  constructor(arr) {
    this.items = arr;
  }

  getItems() {
    console.log(this.items);
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items.includes(item)
      ? this.items.splice(this.items.indexOf(item), 1)
      : "";
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

console.log(storage);

const items = storage.getItems();
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
