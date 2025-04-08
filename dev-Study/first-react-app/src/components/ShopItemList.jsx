import "./ShopItemList.css";

const ShopItemList = ({ data, onIncreaseCartCount }) => {
  // 구조분해할당으로 App에서 data와 onIncreaseCartCount를 변수명으로 받아옴
  return (
    <li>
      <p>{data.productName}</p>
      <p>{data.productPrice}</p>
      <span>장바구니 수량 : {data.count}</span>
      <button onClick={() => onIncreaseCartCount(data.id)}>장바구니 + 1</button>
    </li>
  );
};

export default ShopItemList;
