/**
 * Unknown 타입
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar;
}

/**
 * Never 타입  //집합으로 보면 공집합이다.
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never3: never = true;
}

/**
 * void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

/**
 * any 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // 이게 오류가 발생이 안된다고?!

  undefinedVar = anyVar;

  //neverVar = anyVar;  아무리 any도 never는 호환이 안됨.
}
