/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

// 분산적인 조건부 타입이 되지 않도록 막고 싶다면, ( 분산 방지 )
type StringNumberSwitchNone<T> = [T] extends [number] ? string : number;
//이렇게 되면
let e: StringNumberSwitch<boolean | number | string>;
// boolean, number, string 을  바로 number랑 비교해버린다. 그래서 number가 나옴.

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// 조건부 타입에 유니온 타입을 할당하면 분산적인 조건부 타입으로 업그레이드 됨.
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 3단계
// number | string

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, stinrg>

// 2단계
// number |
// never |
// boolean

// 3단계
// number | never | boolean 유니온 타입에 never가 있으면 사라진다..

// 결과
// number / boolean
// 네버 타입은 공집합 타입이기 때문에 유니온(합집합) 은 그냥 없어짐.

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never |
// string |
// never

// 결과
// string
