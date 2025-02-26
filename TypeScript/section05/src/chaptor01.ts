/**
 * 인터페이스의 확장 (상속)
 */

interface Animal {
  name: string;
  color: string;
}
// //type Animal {  객체도 확장이 가능함.
//     name: string;
//     color: string;
//   }

interface Dog extends Animal {
  // 다시 정의하는 타입이 원본(부모) 타입의 sub타입이어야 함.
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
}; // 다중확장 가능하다.
