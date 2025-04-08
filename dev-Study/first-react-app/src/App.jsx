import { shopData } from "./shopData";
import { useState } from "react";
import ShopItemList from "./components/ShopItemList";
import "./App.css";

// App.jsx
function App() {
  // 기존 App
  const [shopList, setShopList] = useState(shopData); // useState 사용해서 사용자 정보 저장하고 수정, 기존 정보는 shopData를 통해 shopList 로 지정

  const onIncreaseCartCount = (shopId) => {
    // onIncreaseCartCount 라는 변수명으로 장바구니 count 증가 함수 생성, shopId 를 매개변수로
    const newShopList = shopList.map((s) => {
      // newShopList에 기존 배열 shopList(shopData) 을 s 객체로 반환,
      if (s.id === shopId)
        return {
          ...s,
          count: s.count + 1,
        }; // 만약 기존 객체의 id와 새로운 객체의 shopId가 같다면 기존 객체 유지한체 count만 1증가
      else return s; // 아니면 그냥 기존 객체 반환
    });
    setShopList(newShopList); //그리고 해당 결과를 setShopList에 저장
  };

  return (
    // (괄호로 시작 ,
    <main>
      <h3>Mandoo Shop</h3>

      <ul>
        {shopList.map(
          (
            data // useState의 shopData를 갖고있는 shopList가 map을 통해 변수 data로 새로운 객체 배열로 반환하여 ShopItemList 컴포넌트로 전달.
          ) => (
            <ShopItemList
              key={data.id} // 기존 id를 data.id로 참조
              data={data} // 기존 객체들의 정보를 data로 참조
              onIncreaseCartCount={onIncreaseCartCount} //onIncreaseCartCount 함수가 작동되면 위의 동작 실행됨.
            />
          )
        )}
      </ul>
    </main>
  );
}

export default App;
