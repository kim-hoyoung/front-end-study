// 1. 만두 굿즈 데이터 뿌려주기.
try {
  const response = await fetch("./mock.json");

  if (!response.ok) {
    throw new Error("fetch data is fail");
  }
  const item = await response.json();

  createShopDataElement(item);
} catch (error) {
  console.error("Network error");
}

function createShopDataElement(mandooShopData) {
  const ul = document.querySelector("ul");
  mandooShopData.forEach((data) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${data.productName}</h3>
      <img src="./imgs/${data.productImgFileName}" width="200" />
      <span>${data.productPrice}</span>
      <button id="${data.id}">add cart</button>
    `;
    // 로컬스토리지에서 기존 장바구니 데이터 가져오기
    const cartData = JSON.parse(localStorage.getItem("cart")) ?? [];
    const newCartData = [...cartData, data];

    // 장바구니 업데이트
    localStorage.setItem("cart", JSON.stringify(newCartData));

    // ul에 li 추가 (forEach 안에 있어야 함!)
    ul.appendChild(li);
  });
}

const clearCartrBtn = document.querySelector(".clearCart");
clearCartrBtn.addEventListener("click", () => {
  localStorage.removeItem("cart");
});
