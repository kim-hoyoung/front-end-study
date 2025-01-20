// Quiz 1. 우승자는? 광고 시청하고 오시겠습니다!
// 목표: 우승자를 긴장감 있게 발표하기 위해 시간을 끌어줄 비동기 함수가 필요하다.
// 요구사항을 만족하는 delay함수를 구현해보자.

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({});
    }, ms);
  });
}

async function main() {
  console.log("3초 후 결과를 공개하겠습니다!");
  await delay(3000);
  console.log("승자는 김호영!");
}

//main();
// 출력 결과 :
// 3초 후 결과를 공개하겠습니다! (3초 뒤)
// 승자는 김호영!

// Quiz 2. 주문 접수 -> 처리 -> 취소 하기.

// Promise 체이닝을 이용해 여러개의 비동기 함수를 연달아 실행시켜야 합니다.
// 다음 3개의 비동기 함수를 순서대로 연달아 실행시키세요 (함수를 수정해서는 안됩니다)
// receiveOrder: 주문을 하는 함수, 첫번째로 호출되어야 합니다.
// processOrder: 1번에서 받은 주문을 처리하는 함수, 두번째로 호출되어야 합니다.
// cancelOrder: 2번에서 처리가 완료된 주문을 취소하는 함수, 세번째로 호출되어야 합니다.

/* 1. 주문하는 기능 (수정 X) */
function receiveOrder() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("주문 접수가 완료되었습니다.");
      resolve("주문번호: 123");
    }, 2000)
  );
}

/* 2. 주문을 처리하는 기능 (수정 X) */
function processOrder(orderId) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`[${orderId}] 주문이 처리 되었습니다.`);
      resolve(orderId);
    }, 2000)
  );
}

/* 3. 주문을 취소하는 기능 (수정 X) */
function cancelOrder(orderId) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`[${orderId}] 주문이 취소되었습니다`);
      resolve();
    }, 1500)
  );
}

receiveOrder()
  .then((orderId) => processOrder(orderId))
  .then((orderId) => cancelOrder(orderId))
  .catch((err) => console.error(err));
