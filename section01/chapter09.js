// 1. if 조건문 (if 문);

let num = 9;
if (num >= 10) {
  //   console.log("num은 10 이상입니다.");
  //   console.log("조건이 참 입니다!");
} else if (num === 9) {
  //   console.log("num은 9 입니다");
} else {
  //   console.log("num은 9 미만입니다.");
}
// else if 의 갯수의 제한이 없다.

// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if문 보다 더 직관적임.

let animal = "human";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("개");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("그런 동물은 저는 모르겠습니다.");
  }
}
