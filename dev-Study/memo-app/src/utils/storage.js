const localStorageSetItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export default localStorageSetItem;
