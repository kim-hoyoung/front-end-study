const cart = {
  items: [],

  addItem(item) {
    this.items.push(item);
    console.log(`${item}이 장바구니에 추가되었습니다.`);
  },
  removeItem(item) {
    this.items = this.items.filter((i) => i !== item);
    console.log(`${item}이 장바구니에서 삭제되었습니다.`);
  },
  showCart() {
    console.log("장바구니 목록:", this.items.join(", "));
  },
};
