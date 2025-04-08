import "./ShopItemList.css";

const ShopItemList = ({ data, onIncreaseCartCount }) => {
  return (
    <li>
      <p>{data.productName}</p>
      <p>{data.productPrice}</p>
      <span>장바구니 수량 : {data.count}</span>
      <button onClick={() => onIncreaseCartCount(data.id)}>장바구니 +1</button>
    </li>
  );
};

export default ShopItemList;
