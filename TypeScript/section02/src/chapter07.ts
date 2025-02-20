// void -> 공허.... -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// let a: void;
// a = 1;
// a = "hello";
// a = {};
// a = undefined;

// strictNumllChecks 옵션 off시 null 값은 들어갈 수 있다.

// undefined 나 null 값을 타입으로 지정하면되지 왜 void 를 사용할까?

function func3(): undefined {
  console.log("hello");
  return undefined;
}
function func4(): null {
  console.log("hello");
  return null;
}

//각각 undefined, null 을 return 해줘야 하기 때문.

// never
// never -> 존재하지 않는
// 불가능한 타입
// 반환할 수 가 없는 함수에 대하여..

function func5(): never {
  while (true) {}
}

function func6(): never {
  throw new Error();
}

let anyVar: any;

let a: never;
// a = 1;
// a = {};
// a = "";
// a = undefined; 담지 못함
// a = null;  담지 못함
// a = anyVar;
