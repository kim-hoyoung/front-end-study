// Quiz 1. 배열 분할 및 결합하기

// 목표 : 배열을 반으로 나눈 다음, 순서를 바꿔 다시 결합해야 합니다.
// 다음 요구사항에 따라 함수 splitAndCombine을 완성하세요
// 함수 splitAndCombine은 매개변수로 제공된 배열 arr을 반으로 나눈 다음
// 분할된 배열을 순서를 바꿔 결합합니다.

// 1. 반으로 나누기
// arr1: 0~3번 인덱스까지 분할, 결과는 [0,1,2,3]이 되어야 함
// arr2: 4~7번 인덱스까지 분할, 결과는 [4,5,6,7]이 되어야 함

// 2. 순서를 바꿔 결합하기
// arr2뒤에 arr1을 결합, 결과는 [4,5,6,7,0,1,2,3]이 되어야 함

// 3. 반환하기
// 결합이 완료된 배열을 반환합니다.

function splitAndCombine(arr) {
  const arr1 = arr.slice(0, 4);
  const arr2 = arr.slice(4, 8);

  return arr2.concat(arr1);
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
console.log(result);

// Quiz 2. 클릭 이벤트 로그 처리하기
// 목표: 배열 형태의 이벤트 로그(기록)중 "클릭" 이벤트만 특별한 형태로 출력해야 합니다.

function printClickEventLogs(logs) {
  logs.forEach((log) => {
    if (log.type === "click") {
      console.log(`${log.type} :: ${new Date(log.date).toLocaleString()}`);
    }
  });
}

printClickEventLogs([
  {
    type: "click",
    date: "2023-01-01T12:00:00Z",
  },
  {
    type: "hover",
    date: "2023-01-01T12:10:00Z",
  },
  {
    type: "scroll",
    date: "2023-01-01T12:15:00Z",
  },
  {
    type: "click",
    date: "2023-01-01T12:20:00Z",
  },
]);

// Quiz 3. 카페할인 이벤트
// map 메서드 익히기

function getDiscountedMenus(menus) {
  const mapResult = menus.map((menu) => {
    return {
      ...menu,
      discountedPrice: menu.price - 500,
    };
  });
  return mapResult;
}

const discountedMenus = getDiscountedMenus([
  { itemId: 1, name: "아메리카노", price: 3000 },
  { itemId: 2, name: "라떼", price: 3500 },
  { itemId: 3, name: "초콜릿 케이크", price: 5000 },
  { itemId: 4, name: "크로와상", price: 2800 },
]);

console.log(discountedMenus);

// Quiz 4. 도서 정리하기
// 목표: 여러 권의 도서를 최근에 출간된 순으로 정렬하기.

function getSortedBooks(books) {
  return books.toSorted((a, b) => {
    const a = a.published.getTime();
    const b = b.published.getTime();
    return b - a;
  });
}

const sortedBooks = getSortedBooks([
  {
    title: "한입 리액트",
    published: new Date("2023. 04. 06"),
  },
  {
    title: "웹 프론트엔드 첫 걸음",
    published: new Date("2024. 04. 30"),
  },
  {
    title: "이펙티브 타입스크립트",
    published: new Date("2021. 06. 27"),
  },
  {
    title: "클린코드",
    published: new Date("2013. 12. 24"),
  },
]);

console.log(sortedBooks);
